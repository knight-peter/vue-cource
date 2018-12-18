import { dispatch } from "rxjs/internal/observable/range";

const state = {
  //
  userName: "Lison"
};
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1);
  }
};
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params.userName;
  }
};
const actions = {
  updateUserName({ commit, state, rootState, dispath }) {
    // rootState.appName
    /* 使用dispath触发另一个dispath */
    dispatch("xxx", "");
  },
  xxx() {
    //
  }
};
const modules = {};

export default {
  // 使用命名空间
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules
};
