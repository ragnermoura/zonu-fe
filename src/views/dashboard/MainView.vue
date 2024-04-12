<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <Navbar />

            <main class="content">
                <div class="container-fluid p-0">

 <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Administrador</h1>

                    <div class="col-xl-12 mt-2">
                        <div class="w-100">
                            <div class="row">

                                <div class="row" style="margin-left: 2%; margin-top: 2%; margin-bottom: 3%;">

                                    <div class="col-xl-1">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Perfil</small></h6>
                                                    <img src="../../../../assets/images/icons/iconPerfil.png" alt="">
                                                    <img class="mt-3 iconCheck img-fluid"
                                                        src="../../../../assets/images/icons/iconCheckInActive.png"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-1">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Logo</small></h6>
                                                    <img src="../../../../assets/images/icons/iconLogo.png" alt="">
                                                    <img class="mt-3 iconCheck img-fluid"
                                                        src="../../../../assets/images/icons/iconCheckInActive.png"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-1">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"> <small>Capa</small></h6>
                                                    <img src="../../../../assets/images/icons/iconCapa.png" alt="">
                                                    <img class="mt-3 iconCheck img-fluid"
                                                        src="../../../../assets/images/icons/iconCheckInActive.png"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-1">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Imóvel</small> </h6>
                                                    <img src="../../../../assets/images/icons/iconImovel.png" alt="">
                                                    <img class="mt-3 iconCheck img-fluid"
                                                        src="../../../../assets/images/icons/iconCheckInActive.png"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-1">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Publicação</small> </h6>
                                                    <img src="../../../../assets/images/icons/iconPublish.png" alt="">
                                                    <img class="mt-3 iconCheck img-fluid"
                                                        src="../../../../assets/images/icons/iconCheckInActive.png"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                   

                    <div class="row">
                        <div class="thumb-wrapper">
                            <img class="thumb" src="../../../../assets/images/exempleThumb.jpg" alt="">
                        </div>

                        <div class="thumb-wrapper">
                            <img class="thumb" src="../../../../assets/images/exempleThumb.jpg" alt="">
                        </div>

                    </div>

                   

                    <div class="col-xl-6 mt-5">
                        <div class="w-100">
                            <div class="row">



                            </div>
                        </div>
                    </div>


                </div>
            </main>

            <Footer />
        </div>


    </div>
</template>
<script>
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'

export default {
    name: 'MainView',
    data() {
        return {

        }
    },
    components: {
        Sidebar,
        Navbar,
        Footer
    },


}
</script>