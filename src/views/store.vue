<template>
  <div>
    <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
    相当于 <a-input :value="inputValue" @input="handleInput"></a-input>
     -->
    <!-- <a-input :value="stateValue" @input="handleStateValueChange"></a-input> -->
    <a-input v-model="stateValue"></a-input>
    <p>{{ stateValue }} -> lastletter is {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>appName:{{ appName }},appNameWithVersion:{{ appNameWithVersion }}</p>
    <p>userName:{{ userName }},firstLetter:{{ firstLetter }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>appVersion:{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers("user");
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: { AInput, AShow },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    /* 使用命名空间 第一种 */
    // ...mapState({
    //   userName: state => state.userName
    // })
    /* 使用命名空间 第二种 */
    ...mapState({
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      todoList: state => (state.user.todo ? state.user.todo.todoList : [])
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      get() {
        return this.$store.state.stateValue;
      },
      set(value) {
        this.SET_STATE_VALUE(value);
      }
    },
    ...mapState("user", {
      userName: state => state.userName
    }),
    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    /* vuex */
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion;
    // },
    ...mapGetters(["appNameWithVersion"]),
    ...mapGetters("user", ["firstLetter"]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    }

    /* 状态管理vuex感觉像计算属性抽出后可复用的代码 */
  },
  // 相当于
  /* methods:{handleInput (val) {this.inputValue = val}} */
  methods: {
    ...mapMutations(["SET_APP_NAME", "SET_APP_VERSION", "SET_STATE_VALUE"]),
    ...mapMutations("user", ["SET_USER_NAME"]),
    ...mapActions(["updateAppName"]),
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppName() {
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   appName: "newAppName"
      // });
      // this.SET_APP_NAME({ appName: "newAppName" });
      /* 异步方法必须用actions */
      this.updateAppName();
      // this.$store.commit("SET_APP_VERSION");
      this.SET_APP_VERSION();
    },
    changeUserName() {
      // this.$store.dispatch("updateAppName", "123");
      this.SET_USER_NAME({ userName: "vue-cource" });
    },
    registerModule() {
      /* registerModule 动态注册模块 */
      this.$store.registerModule(["user", "todo"], {
        state: {
          todoList: ["学习mutations", "学习actions"]
        }
      });
    },
    handleStateValueChange(val) {
      this.SET_STATE_VALUE(val);
    }
  }
};
</script>

<style scoped></style>
