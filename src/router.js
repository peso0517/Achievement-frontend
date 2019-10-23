import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/about/About.vue";
import Report from "./components/report/Report.vue";
import Account from "./components/account/Account.vue";

Vue.use(Router);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/report",
      name: "report",
      component: Report
    },
    {
      path: "/account",
      name: "account",
      component: Account
    }
  ]
});