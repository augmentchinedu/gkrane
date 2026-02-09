export default [
  {
    component: () => import("./Home.vue"),
    name: "home",
    path: "home",
    meta: {
      auth: true,
    },
    beforeEnter: undefined,
  },
  {
    component: () => import("./Profile.vue"),
    name: "profile",
    path: "profile",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Settings.vue"),
    name: "settings",
    path: "settings",
    meta: {},
    beforeEnter: undefined,
  },
  {
    path: "/components",
    children: [
      {
        component: () => import("./components/ChartCard.vue"),
        name: "chartcard",
        path: "chartcard",
        meta: {},
        beforeEnter: undefined,
      },
      {
        component: () => import("./components/QuickLink.vue"),
        name: "quicklink",
        path: "quicklink",
        meta: {},
        beforeEnter: undefined,
      },
      {
        component: () => import("./components/StatCard.vue"),
        name: "statcard",
        path: "statcard",
        meta: {},
        beforeEnter: undefined,
      },
      {
        component: () => import("./components/StatusCard.vue"),
        name: "statuscard",
        path: "statuscard",
        meta: {},
        beforeEnter: undefined,
      },
    ],
  },
];
