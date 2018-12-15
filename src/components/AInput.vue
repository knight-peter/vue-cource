<template>
  <div><input type="text" @input="handleInput" :value="value" /></div>
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>

<style scoped></style>
