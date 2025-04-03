import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocation } from "vue-router";

const authGuard = () => (
    to: RouteLocation, 
    from: RouteLocation, 
    next: NavigationGuardNext
) => { 
    if (localStorage.getItem("access_token") || "") {
        next();
    } else {
        next({ name: "login" });
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: authGuard() ? "/app" : "/login",
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login-view.vue"),
        },
        {
            path: "/app",
            name: "template",
            redirect: "/app/dashboard",
            component: () => import("../views/Layout/page-layout.vue"),
            beforeEnter: authGuard(),
            children: [
                {
                    path: "dashboard",
                    name: "dashboard",
                    component: () => import("../views/dashboard.vue"),
                },
            ]
        },
        {
            path: "/create",
            name: "create-user",
            component: () => import("../views/create-user.vue"),
        },
    ]
})

export default router;