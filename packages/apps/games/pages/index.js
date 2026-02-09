export default [
  {
    component: () => import("./Board.vue"),
    name: "board",
    path: "/:id/board",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Home.vue"),
    name: "home",
    path: "home",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./OnBoard.vue"),
    name: "onboard",
    path: "/:id",
    meta: {},
    beforeEnter: undefined,
  },
];
