<template>
  <div class="home">
    <button @click="handleClick('back')">back</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
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
