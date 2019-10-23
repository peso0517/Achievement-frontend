import Vue from "vue";
import axios from 'axios'
import BootstrapVue from "bootstrap-vue";
import VueTyper  from "vue-typer";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faUser, faChevronDown, faChevronUp, faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add( faAddressCard, faUser, faChevronDown, faChevronUp, faFileAlt, faQuestionCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueTyper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
