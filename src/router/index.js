import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddStudent from '../views/AddStudent.vue'
import Students from '../views/Students.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add-student',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
