import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import { Button } from "mint-ui";
import vuetify from "./plugins/vuetify";

//注册成标签(全局注册)
Vue.component(Button.name, Button);

fastclick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
