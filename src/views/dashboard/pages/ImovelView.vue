<template>
    <div class="nav-area">
        <div class="container">
            <div class="nav-itens-area">
                <div class="nav-item">
                    <h3><a href="#iddoelemento">INFORMAÇÕES</a></h3>
                </div>
                <div class="nav-item">
                    <h3>COMODOS</h3>
                </div>
                <div class="nav-item">
                    <h3>MEDIDAS</h3>
                </div>
                <div class="nav-item">
                    <h3>PREÇO</h3>
                </div>
                <div class="nav-item">
                    <h3>CARACTERÍSTICAS</h3>
                </div>
                <div class="nav-item">
                    <h3>LOCALIZAÇÃO</h3>
                </div>
                <div class="nav-item">
                    <h3>PROXIMIDADES</h3>
                </div>
                <div class="nav-item">
                    <h3>COMPLEMENTO</h3>
                </div>

            </div>
        </div>

    </div>
    <div style="background-color: #F24E1E; width: 100vw; height: 60px; padding-top: 15px">
        <h2 class="text-center text-light"><strong>EMPREENDIMENTO EM CONSTRUÇÃO</strong></h2>
    </div>
    <div class="capa-area">
        <div class="gradient-page-imovel"></div>
        <img class="capa" src="../../../../assets/images/05.png" alt="">

        <div class="logo-area">
            <img class="logo-page" src="../../../../assets/images/logoEmpresa.jpg" alt="">
        </div>
    </div>
    <div style="background-color: #5AB910; width: 100vw; height: 60px; padding-top: 15px">
        <h2 class="text-center text-light"><strong>VENDA</strong></h2>
    </div>
    <div class="container">
        <div class="row">
            <h1 class="text-title text-center mt-4"><strong>title</strong></h1>
            <h4 class="text-title-subtitle text-center mt-2">Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque</h4>
        </div>
        <div id="iddoelemento" class="carrousel-area row">

            <img class="imagem-imovel" src="../../../../assets/images/exemple.png" alt="">
            <img class="imagem-imovel" src="../../../../assets/images/exemple.png" alt="">
            <img class="imagem-imovel" src="../../../../assets/images/exemple.png" alt="">
            <img class="imagem-imovel" src="../../../../assets/images/exemple.png" alt="">
            <img class="imagem-imovel" src="../../../../assets/images/exemple.png" alt="">
        </div>
    </div>

</template>
<script>
import Sidebar from "../../../components/sidebar/index.vue";
import Navbar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";

export default {
    name: "ImovelView",
    components: {
        Sidebar,
        Navbar,
        Footer,
    },
    mounted(){
        //Cola as funçoes aqui
        function myFunction() {

        }
    },



};
</script>