import { auth } from "@/scripts/firebase";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/Counter.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/counter-props",
    name: "CounterProps",
    component: () => import("../views/CounterProps.vue"),
    meta: { requiresAuth: false }
  },
  {
    path: "/user-auth",
    name: "UserAuth",
    component: () => import("../views/UserAuth.vue"),
    meta: { requiresAuth: false }
  },
  {
    path: "/books",
    name: "Books",
    component: () => import("../views/Books.vue"),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // 認証状態を取得
    auth.onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        // 認証されていない場合、認証画面へ
        next({ name: 'UserAuth' })
      }
    })
  } else {
    next()
  }
})

export default router;
