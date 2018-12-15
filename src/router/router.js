import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    alias: "/home_page",
    name: "home",
    component: Home,
    /* 
    route=>({})
    等同于
    route=>{
      return {}
    }
    */
    props: route => ({
      food: route.query.food
    })
    /* beforeEnter: (to, form, next) => {
      if (form.name === "about") {
        alert("这是从about页来的");
      } else {
        alert("这不是从about页来的");
      }
      // 添加beforeEnter后，一定要调用next(),不然不会跳转
      next();
    } */
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载组件
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    props: {
      food: "banana"
    },
    meta: {
      title: "关于"
    }
  },
  {
    path: "/argu/:name",
    name: "argu",
    component: () => import("@/views/argu.vue"),
    props: true
  },
  {
    path: "/parent",
    name: "parent",
    component: () => import("@/views/parent.vue"),
    children: [
      {
        path: "child",
        component: () => import("@/views/child.vue")
      }
    ]
  },
  {
    path: "/named_view",
    components: {
      default: () => import("@/views/child.vue"),
      email: () => import("@/views/email.vue"),
      tel: () => import("@/views/tel.vue")
    }
  },
  {
    path: "/main",
    /* redirect: {
      name: "home"
    } */
    redirect: to => {
      console.log(to);
      return {
        name: "home"
      };
    }
  },
  {
    path: "*",
    component: () => import("@/views/error_404.vue")
  }
];
