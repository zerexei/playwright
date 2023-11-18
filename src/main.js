import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
