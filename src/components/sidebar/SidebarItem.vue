<template>
  <li class="sidebar-item">
    <a href="#" class="sidebar-link" @click="handleItemClick">
      <i :class="iconClass"></i>
      <span>{{ text }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    url: String // Adicionamos uma nova propriedade para receber a URL da página
  },
  computed: {
    iconClass() {
      return `lni ${this.icon}`;
    }
  },
  methods: {
    handleItemClick() {
      // Aqui você pode definir o que acontece quando um item do menu é clicado
      console.log("Item do menu clicado:", this.text);
      if (this.url) {
        // Se a propriedade url estiver definida, navega para a página correspondente
        window.location.href = this.url;
      }
    }
  }
};
</script>

<style scoped>
/* Estilos aqui */
</style>
