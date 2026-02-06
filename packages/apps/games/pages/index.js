export default [
  {
    component: () => import("./Board.vue"),
    name: "board",
    path: "/:id/board",
    meta: {},
    beforeEach: undefined,
  },
  {
    component: () => import("./Home.vue"),
    name: "home",
    path: "home",
    meta: {},
    beforeEach: undefined,
  },
  {
    component: () => import("./OnBoard.vue"),
    name: "onboard",
    path: "/:id",
    meta: {},
    beforeEach: undefined,
  },
];
