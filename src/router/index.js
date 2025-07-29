import { createRouter, createWebHistory } from 'vue-router';

// استيراد الصفحات (Views)
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import CompanyList from '../components/CompanyList.vue';
import DepartmentList from '../components/DepartmentList.vue';
import EmployeeList from '../components/EmployeeList.vue';
import ProjectList from '../components/ProjectList.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/companies', name: 'CompanyList', component: CompanyList },
  { path: '/departments', name: 'DepartmentList', component: DepartmentList },
  { path: '/employees', name: 'EmployeeList', component: EmployeeList },
  { path: '/projects', name: 'ProjectList', component: ProjectList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
