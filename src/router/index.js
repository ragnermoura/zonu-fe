import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import CadastroView from '../views/auth/CadastroView.vue'
import RecoveryView from '../views/auth/RecoveryView.vue'
import MainView from '../views/dashboard/MainView.vue'
import CadImovelView from '../views/dashboard/CadImovelView.vue'
import CadCondominioView from '../views/dashboard/CadCondominioView.vue'
import MyPlanView from '../views/dashboard/MyPlanView.vue'
import CaracteristicaView from '../views/dashboard/CaracteristicaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },  
    {
      path: '/recovery',
      name: 'recovery',
      component: RecoveryView
    },  
    {
      path: '/dashboard',
      name: 'dashboard',
      component: MainView
    },  
    {
      path: '/novo-imovel',
      name: 'novo-imovel',
      component: CadImovelView
    },  
    {
      path: '/caracteristica',
      name: 'caracteristica',
      component: CaracteristicaView
    },  
    {
      path: '/novo-condominio',
      name: 'novo-condominio',
      component: CadCondominioView
    },  
    {
      path: '/meu-plano',
      name: 'meu-plano',
      component: MyPlanView
    },  
  ]
})


router.beforeEach((to, from, next) => {

  const publicPages = ['/', '/recovery', '/code'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
});


export default router
