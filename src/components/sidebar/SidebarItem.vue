<template>
  <!-- <li class="sidebar-item">
    <a href="#" class="sidebar-link" @click="handleItemClick">
      <i :class="iconClass"></i>
      <span>{{ text }}</span>
    </a>
  </li> -->

  <li class="sidebar-item">
  <a href="#" class="sidebar-link {{ isFirstItem ? ' active' : '' }}" @click="handleItemClick">
    <img :src="icon" alt="Icon">
    <span>{{ text }}</span>
  </a>
</li>

</template>

<script>
export default {
  props: {
    text: String,
    isFirstItem: Boolean,
    icon: String, // Adiciona a prop icon para receber o caminho da imagem do ícone
  },
  methods: {
    handleItemClick() {
      // Aqui você pode definir o comportamento quando o item do sidebar for clicado
    }
  }
}
</script>

<style scoped>
/* Estilos aqui */
</style>
