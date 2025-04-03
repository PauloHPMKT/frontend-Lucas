import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login-view.vue"),            
        },
        {
            path: "/",
            name: "dashboard",
            component: () => import("../views/dashboard.vue"),
        },
        {
            path: "/create",
            name: "create-user",
            component: () => import("../views/create-user.vue"),
        },
    ]
})

export default router;