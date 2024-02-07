<template>
  <div class="wrapper">
    <Sidebar>
      <SidebarItem icon="lni-user" text="Profile" />
      <SidebarItem icon="lni-agenda" text="Task" />
      <!-- Adicione mais itens de menu aqui, se necessário -->
    </Sidebar>

    <div class="main p-3">

      <h1 class="text-center">teste de funcionamento</h1>

    </div>
  </div>
</template>
<script>
import Sidebar from '../../../components/sidebar/Sidebar.vue'
import SidebarItem from '../../../components/sidebar/SidebarItem.vue'

export default {
  name: 'ShowCards',
  components: {
    Sidebar,
    SidebarItem
  }
}
</script>