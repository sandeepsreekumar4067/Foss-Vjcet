import HomePage from '@/Pages/HomePage.vue'
import DepartmentPage from '@/Pages/DepartmentPage.vue'
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
        component:DepartmentPage,
        props:true,
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router