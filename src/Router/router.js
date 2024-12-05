import HomePage from '@/Pages/HomePage.vue'
import DepartmentPage from '@/Pages/DepartmentPage.vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import SemesterPage from '@/Pages/SemesterPage.vue'
const routes = [
    {
        name:'Home',
        path:'/',
        component:HomePage
    },
    {
        name:'Department',
        path:"/department/:name",
        component:DepartmentPage,
        props:true,
    },
    {
        name:'Semester',
        path:'/semester/:id',
        component:SemesterPage,
        props:true
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router