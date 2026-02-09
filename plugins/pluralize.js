import pluralize from "pluralize";

export default {
  install: (app) => {
    // Add as global property: use in template via $pluralize
    app.config.globalProperties.$pluralize = pluralize;

    // Optional: also add to app.provide for composition API injection
    app.provide("pluralize", pluralize);
  },
};
