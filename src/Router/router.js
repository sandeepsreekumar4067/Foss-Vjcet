import HomePage from '@/Pages/HomePage.vue'
import SemesterPage from '@/Pages/SemesterPage.vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
const routes = [
    {
        name:'Home',
        path:'/',
        component:HomePage
    },
    {
        name:'Semester',
        path:"/semester/:name",
        component:SemesterPage,
        props:true,
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router