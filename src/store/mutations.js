import vue from "vue";

const mutations = {
  SET_APP_NAME(state, params) {
    state.appName = params.appName;
  },
  SET_APP_VERSION(state) {
    vue.set(state, "appVersion", "v2.0");
  },
  SET_STATE_VALUE(state, value) {
    state.stateValue = value;
  }
};
export default mutations;
/**
Mutation 需遵守 Vue 的响应规则
既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

最好提前在你的 store 中初始化好所有所需属性。

当需要在对象上添加新属性时，你应该

使用 Vue.set(obj, 'newProp', 123), 或者

以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：

state.obj = { ...state.obj, newProp: 123 }
 *  */
