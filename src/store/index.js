import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import user from "./module/user";
import getters from "./getters";
// import saveInLocal from "./plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  /* 如果是开发环境开启严格模式，如果是生产环境关闭严格模式 */
  strict: process.env.NODE_ENV === "development",
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
  // plugins: [saveInLocal]
});
