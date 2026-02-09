export default [
  {
    component: () => import("./Home.vue"),
    name: "home",
    path: "home",
    meta: {},
    beforeEnter: (to, from, next) => {
      if (
        import.meta.env.MODE === "production" &&
        window.location.hostname !== "gkrane.online"
      ) {
        next({ name: "notfound" });
      } else next();
    },
  },
];
