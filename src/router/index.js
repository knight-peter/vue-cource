import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import { setTitle } from "@/lib/util";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  // mode: "history",
  routes
});

const HAS_LOGINED = true;

// beforeEach可以注册一个全局前置守卫
router.beforeEach((to, form, next) => {
  to.meta && setTitle(to.meta.title);
  // 如果不是去登陆页
  if (to.name !== "login") {
    // 已经登录
    if (HAS_LOGINED) {
      next();
    } else {
      next({
        name: "login"
      });
    }
    //如果是去登陆页
  } else {
    //已经登录
    if (HAS_LOGINED) {
      next({
        name: "home"
      });
    } else {
      next();
    }
  }
});

// 全局守卫 参数与beforeEach一致
// router.beforeResolve()

// afterEach 注册全局后置钩子
router.afterEach(() => {
  // 一般用于取消加载动画 loading = false
});

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router;
