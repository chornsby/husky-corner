import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "bulma/css/bulma.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
