import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import CadastroView from '../views/auth/CadastroView.vue'
import RecoveryView from '../views/auth/RecoveryView.vue'
import MainView from '../views/dashboard/MainView.vue'
import CadImovelView from '../views/dashboard/CadImovelView.vue'
import CadCondominioView from '../views/dashboard/CadCondominioView.vue'
import MyPlanView from '../views/dashboard/MyPlanView.vue'
import CadCaracteristica from '../views/dashboard/CadCaracteristicaView.vue'
import novoPlano from '../views/dashboard/NovoPlanoView.vue'

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
      path: "/dashboard/",
      name: 'dashboard',
      component: MainView,
      meta: { requiresAuth: true },
    },
    {
      path: '/novo-imovel',
      name: 'novo-imovel',
      component: CadImovelView,
      meta: { requiresAuth: true }
    },
    {
      path: '/novo-condominio',
      name: 'novo-condominio',
      component: CadCondominioView,
      meta: { requiresAuth: true }
    },
    {
      path: '/meu-plano',
      name: 'meu-plano',
      component: MyPlanView,
      meta: { requiresAuth: true }
    },
    {
      path: '/cad-caracteristica',
      name: 'cad-caracteristica',
      component: CadCaracteristica,
      meta: { requiresAuth: true }
    },
    {
      path: '/novo-plano',
      name: 'novo-plano',
      component: novoPlano,
      meta: { requiresAuth: true }
    },
  ]
})






export default router
