import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";
// if (process.env.NODE_ENV !== "production") {
//   require("./mock");
// }

Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;

/* const handleClcik = event => {
  console.log(event);
  event.stopPropagation();
};
let list = [
  {
    name: "lison"
  },
  {
    name: "lili"
  }
];
const getLiEleArr = h => {
  return list.map((item, index) =>
    h(
      "li",
      {
        on: {
          click: handleClcik
        },
        key: `list_item_${index}`
      },
      item.name
    )
  );
}; */

new Vue({
  router,
  store,
  render: h => h(App)
  /* 使用render创建模板 */
  /* render: h =>
    h("div", [
      h(
        "ul",
        {
          on: {
            click: handleClcik
          }
        },
        getLiEleArr(h)
      )
    ]) */
}).$mount("#app");
