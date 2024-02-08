const hamBurger = document.querySelector(".toggle-btn");

// hamBurger.addEventListener("click", function () {
//   document.querySelector("#sidebar").classList.toggle("expand");
// });

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");

  // Se o sidebar tá abrindo, espera 0.5 segundos e mostra os spans
  if (document.querySelector("#sidebar").classList.contains("expand")) {
      setTimeout(function() {
          document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
              span.style.display = "inline-block";
          });
      }, 200); // 500 milissegundos = 0.5 segundos
  } else {
      // Se não, esconde de novo imediatamente
      document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
          span.style.display = "none";
      });
  }
});


//EFEITO ACTIVE
// Primeiro, pega todos os links do sidebar
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Agora, adiciona um event listener pra cada link
sidebarLinks.forEach(function(link, index) {
  link.addEventListener("click", function() {
    // Remove a classe active de todos os links
    sidebarLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    
    // Adiciona a classe active só no link que foi clicado
    this.classList.add("active");
  });

  // Agora, adiciona a classe active só no primeiro link
  if (index === 0) {
    link.classList.add("active");
  }
});
