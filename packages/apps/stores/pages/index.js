export default [
  {
    component: () => import("./Index.vue"),
    name: "index",
    path: "index",
    meta: {},
    beforeEach: undefined,
  },
  {
    component: () => import("./Stores.vue"),
    name: "stores",
    path: ":type",
    meta: {},
    beforeEach: undefined,
  },
  {
    component: () => import("./Create.vue"),
    name: "create",
    path: "create",
    meta: {},
    beforeEach: undefined,
  },
];
