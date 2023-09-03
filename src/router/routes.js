import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../components/helloWorld.vue"

const routes=[
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        meta: {
            title:"HomePage"
        }

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
  });
  
  export default router;