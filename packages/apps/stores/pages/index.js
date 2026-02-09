export default [
  {
    component: () => import("./Index.vue"),
    name: "index",
    path: "index",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Stores.vue"),
    name: "stores",
    path: ":type",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Create.vue"),
    name: "create",
    path: "create",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Created.vue"),
    name: "created",
    path: "created",
    meta: {},
    beforeEnter: undefined,
  },
];
