// https://cli.vuejs.org/guide/deployment.html#gitlab-pages
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/husky-corner/" : "/"
};
