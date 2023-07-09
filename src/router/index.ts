import { createRouter, createWebHistory } from "vue-router";
import WorkoutGenerator from "../views/workoutGenerator.vue"
import LeaderBoard from "../views/leaderBoard.vue"
import profile from "../views/profile.vue"



const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "gene",
            component: WorkoutGenerator
        },
        {
            path: "/leader-board",
            name: "leader-board",
            component: LeaderBoard
        },
        {
            path: "/profile",
            name: "profile",
            component: profile
        },
    ]

})

export default router;