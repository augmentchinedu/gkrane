export default [
  {
    component: () => import("./About.vue"),
    name: "about",
    path: "about",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Contact.vue"),
    name: "contact",
    path: "contact",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Projects.vue"),
    name: "projects",
    path: "projects",
    meta: {},
    beforeEnter: undefined,
  },
  {
    component: () => import("./Splash.vue"),
    name: "splash",
    path: "splash",
    meta: {},
    beforeEnter: undefined,
  },
];
