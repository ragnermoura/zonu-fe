<template>
  <aside id="sidebar">
    <div class="box d-flex flex-column justify-content-center">
      <div class="d-flex">
        <button class="toggle-btn" type="button" @click="toggleSidebar">
          <img src="brenner2.webp" alt="">
        </button>
        <div class="sidebar-logo">
          <span>Brenner</span>
        </div>
      </div>
      <ul class="sidebar-nav">
        <SidebarItem icon="lni-user" text="Profile" />
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
import SidebarItem from '@/components/SidebarItem.vue'; // Caminho para o arquivo SidebarItem.vue

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
