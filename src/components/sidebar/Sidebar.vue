<template>
  <aside id="sidebar" class="expand">
    <div class="box d-flex flex-column justify-content-center">
      <div class="d-flex">
        <button class="toggle-btn" type="button" @click="toggleSidebar">
          <i class="lni lni-grid-alt"></i>
        </button>
        <div class="sidebar-logo">
          <span>Olá, User</span>
        </div>
      </div>
      <ul class="sidebar-nav text-light">
        <SidebarItem icon="../../../assets/images/icons/chart.svg" text="Profile" />
        <SidebarItem icon="lni-agenda" text="Task" />
        <!-- Adicione mais itens de menu aqui, se necessário -->
      </ul>
      <div class="sidebar-footer">
        <a href="#" class="sidebar-link">
          <i class="lni lni-exit"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem.vue';

export default {
  components: {
    SidebarItem
  },
  methods: {
    toggleSidebar() {
      // Adicione a lógica para alternar a exibição do menu lateral aqui
    }
  }
};
</script>

<style scoped>
/* Estilos aqui */
</style>
