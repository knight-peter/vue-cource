<template>
  <div><button @click="handelClcik">按我</button></div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$bus);
    // this.$on("on-click", msg => {
    //   console.log({ msg });
    // });
  },
  methods: {
    // handelClcik() {
    //   this.$emit("on-click", "hello");
    // }
    handelClcik() {
      this.$bus.$emit("on-click", "hello");
    }
  }
};
</script>

<style scoped></style>
