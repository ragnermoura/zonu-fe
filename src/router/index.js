import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import LetsGoView from '../views/auth/LetsGoView.vue'
import CadEmpresaView from '../views/auth/CadEmpresaView.vue'
import CadRespEmpresaView from '../views/auth/CadRespEmpresaView.vue'
import RecoveryView from '../views/auth/RecoveryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/vamos-comecar',
      name: 'vamos-comecar',
      component: LetsGoView
    },    
    {
      path: '/cadastrar-empresa',
      name: 'cadastrar-empresa',
      component: CadEmpresaView
    },    
    {
      path: '/cadastrar-responsavel',
      name: 'cadastrar-responsavel',
      component: CadRespEmpresaView
    },
    {
      path: '/recuperar-senha',
      name: 'recuperar-senha',
      component: RecoveryView
    },
    
  ]
})

export default router
