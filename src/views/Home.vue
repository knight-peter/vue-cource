<template>
  <div class="home">
    <p>{{ food }}</p>
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
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
    }
  }
};
</script>
