export default [
  {
    path: "/admin",
    children: [
      {
        component: () => import("./admin/Index.vue"),
        name: "index",
        path: "index",
        meta: {},
        beforeEnter: undefined,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        component: () => import("./auth/SignIn.vue"),
        name: "signin",
        path: "signin",
        meta: {},
        beforeEnter: undefined,
      },
      {
        component: () => import("./auth/SignUp.vue"),
        name: "signup",
        path: "signup",
        meta: {},
        beforeEnter: undefined,
      },
    ],
  },
  {
    path: "/error",
    children: [
      {
        component: () => import("./error/NotFound.vue"),
        name: "notfound",
        path: "notfound",
        meta: {},
        beforeEnter: undefined,
      },
    ],
  },
];
