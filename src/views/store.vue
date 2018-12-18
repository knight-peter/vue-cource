<template>
  <div>
    <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
    相当于 <a-input :value="inputValue" @input="handleInput"></a-input>
     -->
    <a-input v-model="inputValue"></a-input>
    <!-- <p>{{ inputValue }}</p> -->
    <a-show :content="inputValue" />
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: { AInput, AShow },
  // 相当于
  /* methods:{handleInput (val) {this.inputValue = val}} */
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style scoped></style>
