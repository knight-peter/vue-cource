<template>
  <div>
    <!-- <ul @click="handleClick">
      <li
        @click.stop="handleClick"
        v-for="(item, index) in list"
        :key="`list_item_${index}`"
      >
        {{ item.name }}
      </li>
    </ul> -->
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>

<script>
import List from "_c/list";
import CountTo from "_c/count-to";
export default {
  data() {
    return {
      // list: [{ name: "lison" }, { name: "lili" }]
      list: [{ number: 100 }, { number: 45 }]
    };
  },
  components: {
    List
  },
  methods: {
    /* jsx */
    renderFunc(h, number) {
      return (
        <CountTo
          nativeOn-click={this.handleClick}
          on-on-animation-end={this.handleEnd}
          endVal={number}
          style={{ color: "pink" }}
        />
      );
    },
    handleClick(event) {
      console.log(event);
    },
    handleEnd() {
      console.log("end!");
    }
    /* render函数 */
    // renderFunc(h, name) {
    //   return h(
    //     "i",
    //     {
    //       style: {
    //         color: "pink"
    //       }
    //     },
    //     name
    //   );
    // }
  }
};
// export default {
//   data() {
//     return {
//       list: [{ name: "lison" }, { name: "lili" }]
//     };
//   },
//   methods: {
//     handleClick(event) {
//       console.log(event);
//     }
//   }
// };
</script>

<style scoped></style>
