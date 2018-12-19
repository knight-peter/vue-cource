<template>
  <div class="home">
    <p>{{ food }}</p>
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo" :style="{ background: bgColor }">请求数据</button>
    <img :src="url" />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      url: "",
      bgColor: ""
    };
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  /* beforeRouteEnter(to, from, next) {
    // 这是在渲染前被调用的，所以this获取不到实例
    // console.log("beforeRouteEnter:", to);
    next(vm => {
      console.log(vm);
    });
  }, */
  // 在页面即将离开的时候调用钩子方法
  /* beforeRouteLeave(to, form, next) {
    const leave = confirm("您确定要离开吗？");
    if (leave) {
      next();
    } else {
      next(false);
    }
  }, */
  methods: {
    /* 编程式导航 */
    handleClick(type) {
      if (type === "back") this.$router.back();
      else if (type === "push") {
        let name = "lison";
        this.$router.push({
          path: `/argu/${name}`
          // name: "argu",
          // params参数
          /* params: {
            name: "lison"
          } */
          // query参数
          /* query: {
            name: "lison"
          } */
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log("res: ", res.data);
        this.url = res.data.img;
        this.bgColor = res.data.color;
      });
    }
  }
};
</script>
