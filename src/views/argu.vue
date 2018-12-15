<template>
  <div>{{ name }}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "lison"
    }
  },
  // url发生变化，组件是被复用的组件
  beforeRouteUpdate(to, form, next) {
    // beforeRouteUpdate被调用时，已经被渲染了，所以可以调用this实例
    console.log(to.name, form.name);
  }
};
</script>
