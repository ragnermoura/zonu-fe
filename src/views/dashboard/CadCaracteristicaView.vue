<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Nova Característica</h1>

                    <div class="row">

                        <div class="col-xl-6 col-xxl-6 d-flex">
                            <div class="container">
                                <div class="row">
                                    <div v-if="mostrarSkeleton" class="skeleton-card-table"></div>

                                    <div class="card" v-if="!mostrarSkeleton">
                                        <div class="row">
                                            <div class="col-12 mt-4">
                                                <label class="form-check-label mb-2"
                                                    for="flexSwitchCheckChecked"><strong>Nome
                                                        caracteristica</strong></label>
                                                <input type="text" class="form-control" required v-model="caracteristica"
                                                    placeholder="Digite aqui uma caracteristica">
                                            </div>
                                            <span v-if="msgSuccess" class="text-success mt-2"><strong><i
                                                        class="align-middle" data-feather="check"></i> Caracteristica
                                                    cadastrada sucesso</strong></span>

                                            <span v-if="msgVazio" class="text-danger mt-2"><strong><i class="align-middle"
                                                        data-feather="x"></i> Não deixe campos vazios!</strong></span>

                                            <div class="col-12 mb-2">
                                                <button v-if="!mostrarSkeleton" @click="handleCad()"
                                                    :disabled="autenticando" type="button" class="btn btn-success bot mt-4">
                                                    {{ textoBotao }}

                                                    <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                        aria-hidden="true"></span>
                                                    <span v-if="autenticando"
                                                        class="visually-hidden">Aguarde...</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div class="col-6 col-lg-6 col-xxl-6 d-flex">

                            <div v-if="mostrarSkeleton" class="skeleton-card-table"></div>
                            <div class="card flex-fill" v-if="!mostrarSkeleton">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Lista de Características
                                    </h5>
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">

                                            <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                                                aria-describedby="passwordHelpBlock" v-model="searchCaracteristica" />


                                            <span style="margin-left: 10px !important;" v-if="msgSuccessDelete"
                                                class="text-success mt-2"><strong><i class="align-middle"
                                                        data-feather="check"></i> Token excluido da
                                                    lista</strong></span>
                                            <table class="table table-hover my-0">
                                                <thead>
                                                    <tr class="text-center">

                                                        <th>Característica</th>
                                                        <th class="d-none d-md-table-cell">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="text-center" v-for="list in caracteristicaOnCurrentPage">

                                                        <td class="d-none d-xl-table-cell">{{ list.nome_caracteristica }}
                                                        </td>
                                                        <td class="d-none d-md-table-cell"><button type="button"
                                                                class="btn btn-danger btn-sm"
                                                                @click="handleDelete(list.id_caracteristica)"><i
                                                                    class="align-middle" data-feather="trash-2"></i>
                                                                Apagar</button>
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>

                                            <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                <button class="btn btn-dark btn-sm" @click="previousPageCaracteristica()"
                                                    :disabled="currentPageCaracteristica <= 1">
                                                    Anterior
                                                </button>
                                                <button class=" btn btn-dark btn-sm" style="margin-right: 3% !important;"
                                                    @click="nextPageCaracteristica()"
                                                    :disabled="currentPageCaracteristica >= totalPagesCaracteristica">
                                                    Proximo
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

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

import api from '../../../service/api/index.js'

export default {
    name: 'MainView',
    data() {
        return {

            listCaracteristica: [],
            msgSuccess: false,
            msgVazio: false,
            msgSuccessDelete: false,
            autenticando: false,
            textoBotao: "Cadastrar",

            currentPageCaracteristica: 1,
            perPageCaracteristca: 5,
            searchCaracteristica: '',

        }
    },
    components: {
        Sidebar,
        Navbar,
        Footer
    },

    mounted() {
        this.fetchList();
    },

    methods: {

        handleCad() {
            this.autenticando = true;
            this.textoBotao = "Aguarde...";

            let caracteristica = this.caracteristica

            if (caracteristica == '') {
                this.msgVazio = true;

                setTimeout(() => {
                    this.msgVazio = false;
                }, 4000)

                setTimeout(() => {
                    this.autenticando = false;
                    this.textoBotao = "Tentar novamente";
                }, 1000)
            } else {

                api.novaCaracteristica(caracteristica).then((res) => {

                    if (res.status == 201) {

                        this.msgSuccess = true
                        this.caracteristica = ''

                        this.fetchList();

                        setTimeout(() => {
                            this.msgSuccess = false;
                            this.autenticando = false;
                            this.textoBotao = "Cadastre mais uma característica.";
                        }, 2000);
                    }

                }).catch(() => {
                    this.autenticando = false;
                    this.textoBotao = "Cadastrar";
                });

            }
        },
        handleDelete(id_caracteristica) {
            api.caracteristicaDelete(id_caracteristica).then((res) => {
                if (res.status == 200) {

                    this.msgSuccessDelete = true;
                    this.fetchList();

                    setTimeout(() => {
                        this.msgSuccessDelete = false;
                        this.autenticando = false;

                    }, 2000);
                }
            })

        },
        fetchList() {
            api.caracteristicalist().then((res) => {
                let resultado = res.data.response
                this.listCaracteristica = resultado
            })
        },
        previousPageCaracteristica() {
            if (this.currentPageCaracteristica > 1) {
                this.currentPageCaracteristica -= 1
            }
        },
        nextPageCaracteristica() {
            if (this.currentPageCaracteristica < this.totalPagesCaracteristica) {
                this.currentPageCaracteristica += 1
            }
        },
    },

    computed: {

        caracteristicaOnCurrentPage() {
            const startIndex = (this.currentPageCaracteristica - 1) * this.perPageCaracteristca
            const endIndex = startIndex + this.perPageCaracteristca
            return this.listCaracteristica
                .filter((item) => {
                    return item.nome_caracteristica
                        .toLowerCase()
                        .includes(this.searchCaracteristica.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },

        totalPagesCaracteristica() {
            return Math.ceil(
                this.listCaracteristica.filter((item) => {
                    this.currentPageCaracteristica = 1
                    return item.nome_caracteristica
                        .toLowerCase()
                        .includes(this.searchCaracteristica.toLowerCase())
                }).length / this.perPageCaracteristca,
            )
        },
    }



}
</script>