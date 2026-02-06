export default [
  {
    component: () => import("./Home.vue"),
    name: "home",
    path: "home",
    meta: {
      auth: true,
    },
    beforeEach: undefined,
  },
  {
    component: () => import("./Profile.vue"),
    name: "profile",
    path: "profile",
    meta: {},
    beforeEach: undefined,
  },
  {
    component: () => import("./Settings.vue"),
    name: "settings",
    path: "settings",
    meta: {},
    beforeEach: undefined,
  },
  {
    path: "/components",
    children: [
      {
        component: () => import("./components/ChartCard.vue"),
        name: "chartcard",
        path: "chartcard",
        meta: {},
        beforeEach: undefined,
      },
      {
        component: () => import("./components/QuickLink.vue"),
        name: "quicklink",
        path: "quicklink",
        meta: {},
        beforeEach: undefined,
      },
      {
        component: () => import("./components/StatCard.vue"),
        name: "statcard",
        path: "statcard",
        meta: {},
        beforeEach: undefined,
      },
      {
        component: () => import("./components/StatusCard.vue"),
        name: "statuscard",
        path: "statuscard",
        meta: {},
        beforeEach: undefined,
      },
    ],
  },
];
