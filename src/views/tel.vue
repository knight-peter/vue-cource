<template>
  <div class="p-tel">
    <p>message:{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", msg => {
      this.message = msg;
    });
  }
};
</script>

<style lang="scss" scoped>
.p-tel {
  color: red;
  font-weight: 600;
}
</style>
