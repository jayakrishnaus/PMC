import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"
import HomePage from "../components/HomePage.vue"

const routes=[
   
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        meta: {
            title:"HomePage"
        }

    },
    {
        path: "/HelloWorld",
        name: "HelloWorld",
        component: HelloWorld,
        meta: {
            title:"HelloWorld"
        }

    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;