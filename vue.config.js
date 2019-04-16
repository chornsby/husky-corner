// https://cli.vuejs.org/guide/deployment.html#gitlab-pages
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/husky-corner/" : "/"
};
