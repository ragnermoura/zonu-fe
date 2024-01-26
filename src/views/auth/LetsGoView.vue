<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-6 d-flex flex-column justify-content-center align-items-center px-5">
        <img src="../../../assets/images/logo.svg" class="mb-5" alt="">
        <div class="area-login px-4 mt-2">

          <h1 class="title-login">Vamos Começar</h1>
          <p>selecione o seu tipo de cadastro</p>

          <div class="area-escolha d-flex justify-content-between my-5">
            <a href="#" class="btn-construtora d-flex flex-column align-items-center justify-content-center py-2">
              <img src="../../../assets/images/icons/icon-construtora.svg" class="icon-construtora" alt="">
              Contrutora
            </a>
            <a href="#" class="btn-corretora d-flex flex-column align-items-center justify-content-center py-2">
              <img src="../../../assets/images/icons/icon-corretora.svg" class="icon-corretora" alt="">
              Corretor
            </a>
          </div>


          <div class="login-links d-flex justify-content-center mt-5">
            <a href="">Já tenho uma conta</a>
          </div>
        </div>
      </div>

      <div class="col-6 p-0">
        <div class="bg-login">
          <div class="gradient d-flex flex-column justify-content-center align-items-center px-5">
            <img src="../../../assets/images/logo-transparente2.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'LetsGoView'
}
</script>