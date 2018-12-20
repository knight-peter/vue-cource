import { dispatch } from "rxjs/internal/observable/range";
import { login, authorization } from "@/api/user";
import { setToken } from "@/lib/util";

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
  },
  login({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      })
        .then(res => {
          if (res.code === 200 && res.data.token) {
            setToken(res.data.token);
            resolve();
          } else {
            reject(new Error("错误"));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  authorization({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (parseInt(res.code) === 401) {
            reject(new Error("token error"));
          } else {
            setToken(res.data.token);
            resolve();
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout() {
    setToken("");
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
