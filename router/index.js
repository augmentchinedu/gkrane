import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "../store";

/* ---------------- Pages (build-time resolved) ---------------- */
import globalPages from "global-pages/index.js";
import packagePages from "package-pages/index.js";

/* ---------------- Helpers ---------------- */
function joinPaths(parent, child) {
  const p = (parent ?? "").replace(/^\/+|\/+$/g, "");
  const c = (child ?? "").replace(/^\/+|\/+$/g, "");
  return p ? `/${p}/${c}`.replace(/\/+/g, "/") : `/${c}`;
}

function normalizeRouteName(nodeName, parentName) {
  if (nodeName.toLowerCase() === "index" && parentName) return parentName;
  return parentName
    ? `${parentName}-${nodeName.toLowerCase()}`
    : nodeName.toLowerCase();
}

/* ---------------- Build routes from tree ---------------- */
function buildRoutesFromTree(pages, parentPath = "", parentName = "") {
  const routes = [];
  let notFoundRoute = null;
  let rootIndexComponent = null;

  for (const key in pages) {
    const node = pages[key];
    if (!node) continue;

    // Detect NotFound page
    if (key.toLowerCase() === "notfound") {
      notFoundRoute = {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: node.component,
        meta: node.meta ?? { title: "404 - Page Not Found" },
      };
      continue;
    }

    let segment = node.path ?? key.toLowerCase();
    segment = segment.replace(/^\/+|\/+$/g, "");
    const isRootIndex = segment === "index" && !parentPath;

    // Capture root index component for later use
    if (isRootIndex && node.component) {
      rootIndexComponent = node.component;
    }

    let fullPath = joinPaths(parentPath, isRootIndex ? "" : segment);
    if (segment === "index" && parentPath) {
      fullPath = parentPath.startsWith("/") ? parentPath : `/${parentPath}`;
    }

    const routeName = node.name ?? normalizeRouteName(key, parentName);
    const route = {
      path: fullPath,
      name: routeName,
      meta: node.meta ?? {},
      beforeEnter: node.beforeEnter,
    };

    if (node.component) {
      route.component = node.component;
      if (!route.beforeEnter) {
        route.beforeEnter = async (to, from, next) => {
          const mod = await node.component();
          if (mod.path) route.path = "/" + mod.path.replace(/^\/+|\/+$/g, "");
          if (mod.routeMeta?.meta)
            route.meta = { ...route.meta, ...mod.routeMeta.meta };
          if (mod.routeMeta?.beforeEnter)
            return mod.routeMeta.beforeEnter(to, from, next);
          next();
        };
      }
    }

    if (node.children) {
      const childTree = buildRoutesFromTree(node.children, fullPath, routeName);
      route.children = childTree.routes;
      if (childTree.notFoundRoute) notFoundRoute = childTree.notFoundRoute;
    }

    routes.push(route);
  }

  return { routes, notFoundRoute, rootIndexComponent };
}

/* ---------------- Merge global + package routes ---------------- */
function mergeRoutes(globalRoutes, packageRoutes) {
  const map = new Map();

  function flatten(routes) {
    for (const r of routes) {
      map.set(r.path, r);
      if (r.children) flatten(r.children);
    }
  }

  flatten(globalRoutes);
  flatten(packageRoutes);

  return [...map.values()];
}

/* ---------------- Root redirect ---------------- */
function resolveRootRedirect(routes) {
  const priority = ["/splash", "/dashboard", "/home"];
  for (const p of priority) {
    if (routes.find((r) => r.path === p)) return p;
  }
  const first = routes.find((r) => r.path !== "/");
  return first?.path || "/";
}

/* ---------------- Promote NotFound to global catch-all ---------------- */
function promoteNotFound(routes) {
  let found = null;
  function recurse(rs) {
    for (let i = rs.length - 1; i >= 0; i--) {
      const r = rs[i];
      if (r.name?.toLowerCase() === "notfound") {
        found = r;
        rs.splice(i, 1);
        continue;
      }
      if (r.children) recurse(r.children);
    }
  }
  recurse(routes);
  if (found) {
    found.path = "/:pathMatch(.*)*";
    routes.push(found);
  }
  return routes;
}

/* ---------------- Remove routes with no component ---------------- */
function filterNoComponent(routes) {
  return routes
    .map((r) => {
      if (r.children) r.children = filterNoComponent(r.children);
      return r.component ? r : null;
    })
    .filter(Boolean);
}

/* ---------------- Router factory ---------------- */
export function createAppRouter() {
  const globalTree = buildRoutesFromTree(globalPages);
  const packageTree = buildRoutesFromTree(packagePages);

  // Determine which root index component to use (prioritize package over global)
  const rootIndexComponent =
    packageTree.rootIndexComponent ?? globalTree.rootIndexComponent;

  // Merge routes
  let mergedRoutes = mergeRoutes(globalTree.routes, packageTree.routes);

  // Normalize /index → / and set name to parent if index
  mergedRoutes = mergedRoutes.map((r) => {
    if (r.path === "/index") r.path = "/";
    if (r.name.toLowerCase() === "index" && r.path !== "/") {
      const parts = r.path.split("/").filter(Boolean);
      r.name = parts[0] ?? "index"; // use parent segment as name
    }
    return r;
  });

  // Remove any route without a component
  mergedRoutes = filterNoComponent(mergedRoutes);

  // Filter out the root path if it exists (we'll handle it specially)
  const finalRoutes = mergedRoutes.filter((r) => r.path !== "/");

  // Add root route
  if (rootIndexComponent) {
    // If Index.vue component exists, use it directly for "/"
    finalRoutes.unshift({
      path: "/",
      name: null,
      component: rootIndexComponent,
      meta: {},
    });
  } else {
    // Otherwise, add redirect as before
    const rootRedirect = resolveRootRedirect(mergedRoutes);
    finalRoutes.unshift({ path: "/", redirect: rootRedirect });
  }

  // Promote NotFound
  promoteNotFound(finalRoutes);

  const router = createRouter({
    history: createWebHistory(),
    routes: finalRoutes,
  });

  // Global auth guard
  router.beforeEach((to, from, next) => {
    const { app } = useStore();
    if (to.meta?.auth && !app.isAuthenticated) {
      return next({ name: "signin" });
    }
    next();
  });

  console.log("Generated routes:", finalRoutes);
  return router;
}
