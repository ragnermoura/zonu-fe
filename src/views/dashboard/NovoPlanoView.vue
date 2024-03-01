<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Novo Plano</h1>

                    <div class="row">

                        <div class="col-xl-5 col-xxl-5 d-flex">
                            <div class="container">
                                <div class="row">
                                    <div v-if="mostrarSkeleton" class="skeleton-card-table"></div>

                                    <div class="card" v-if="!mostrarSkeleton">
                                        <div class="row">
                                            <div class="col-6 mt-4">
                                                <label class="form-check-label mb-2"
                                                    for="flexSwitchCheckChecked"><strong>Nome
                                                        do Plano</strong></label>
                                                <input type="text" class="form-control" required v-model="plano"
                                                    placeholder="Nome do Plano">
                                            </div>
                                            <div class="col-6 mt-4">
                                                <label class="form-check-label mb-2"
                                                    for="flexSwitchCheckChecked"><strong>Valor
                                                        <small>(R$)</small></strong></label>
                                                <input type="text" class="form-control" @input="formatarValor" required v-model="valor"
                                                    placeholder="R$ 0,00">
                                            </div>
                                            <div class="col-12 mt-4">
                                                <label class="form-check-label mb-2"
                                                    for="flexSwitchCheckChecked"><strong>Descrição </strong></label>
                                                <textarea rows="4" class="form-control" required
                                                    v-model="descricao"></textarea>
                                            </div>
                                            <span v-if="msgSuccess" class="text-success mt-2"><strong><i
                                                        class="align-middle" data-feather="check"></i> Plano
                                                    cadastrado com sucesso</strong></span>

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



                        <div class="col-7 col-lg-7 col-xxl-7 d-flex">

                            <div v-if="mostrarSkeleton" class="skeleton-card-table"></div>
                            <div class="card flex-fill" v-if="!mostrarSkeleton">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Lista de Planos
                                    </h5>
                                </div>

                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">

                                            <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                                                aria-describedby="passwordHelpBlock" v-model="searchPlanos" />


                                            <span style="margin-left: 10px !important;" v-if="msgSuccessDelete"
                                                class="text-success mt-2"><strong><i class="align-middle"
                                                        data-feather="check"></i> Plano excluido da
                                                    lista</strong></span>
                                            <table class="table table-hover my-0">
                                                <thead>
                                                    <tr class="text-center">

                                                        <th>Plano</th>
                                                        <th>Valor</th>
                                                        <th>Descrição</th>
                                                        <th class="d-none d-md-table-cell">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="text-center" v-for="list in planoOnCurrentPage">

                                                        <td class="d-none d-xl-table-cell">{{ list.nome_plano }}
                                                        </td>
                                                        <td class="d-none d-xl-table-cell">{{ list.valor_plano }}
                                                        </td>
                                                        <td class="d-none d-xl-table-cell">{{ list.descricao }}
                                                        </td>
                                                        <td class="d-none d-md-table-cell"><button type="button"
                                                                class="btn btn-danger btn-sm"
                                                                @click="handleDelete(list.id_plano)"><i class="align-middle"
                                                                    data-feather="trash-2"></i>
                                                                Apagar</button>
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>

                                            <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                <button class="btn btn-dark btn-sm" @click="previousPagePlano()"
                                                    :disabled="currentPagePlano <= 1">
                                                    Anterior
                                                </button>
                                                <button class=" btn btn-dark btn-sm" style="margin-right: 3% !important;"
                                                    @click="nextPageplano()"
                                                    :disabled="currentPagePlano >= totalPagesPlano">
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

            plano: '',
            descricao: '',
            valor: '',
            listPlano: [],
            msgSuccess: false,
            msgVazio: false,
            msgSuccessDelete: false,
            autenticando: false,
            textoBotao: "Cadastrar",

            currentPagePlano: 1,
            perPagePlano: 5,
            searchPlanos: '',

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

        formatarValor() {
            let valorNumerico = this.valor.replace(/\D/g, '');
            this.valor = valorNumerico ? `R$ ${valorNumerico}` : '';
        },

        handleCad() {
            this.autenticando = true;
            this.textoBotao = "Aguarde...";

            let plano = this.plano
            let valor = this.valor
            let descricao = this.descricao

            if (plano == '' || valor == '' || descricao == '') {
                this.msgVazio = true;

                setTimeout(() => {
                    this.msgVazio = false;
                }, 4000)

                setTimeout(() => {
                    this.autenticando = false;
                    this.textoBotao = "Tentar novamente";
                }, 1000)
            } else {

                api.novoPlano(plano, valor, descricao).then((res) => {

                    if (res.status == 201) {

                        this.msgSuccess = true
                        this.plano = ''

                        this.fetchList();

                        setTimeout(() => {
                            this.msgSuccess = false;
                            this.autenticando = false;
                            this.textoBotao = "Cadastre mais um Plano.";
                        }, 2000);
                    }

                }).catch(() => {
                    this.autenticando = false;
                    this.textoBotao = "Cadastrar";
                });

            }
        },
        handleDelete(id_plano) {
            api.planoDelete(id_plano).then((res) => {
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
            api.planolist().then((res) => {
                let resultado = res.data.response
                this.listPlano = resultado
            })
        },
        previousPagePlano() {
            if (this.currentPagePlano > 1) {
                this.currentPagePlano -= 1
            }
        },
        nextPageplano() {
            if (this.currentPagePlano < this.totalPagesPlano) {
                this.currentPagePlano += 1
            }
        },
    },

    computed: {

        planoOnCurrentPage() {
            const startIndex = (this.currentPagePlano - 1) * this.perPagePlano
            const endIndex = startIndex + this.perPagePlano
            return this.listPlano
                .filter((item) => {
                    return item.nome_plano
                        .toLowerCase()
                        .includes(this.searchPlanos.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },
        totalPagesPlano() {
            return Math.ceil(
                this.listPlano.filter((item) => {
                    this.currentPagePlano = 1
                    return item.nome_plano
                        .toLowerCase()
                        .includes(this.searchPlanos.toLowerCase())
                }).length / this.perPagePlano,
            )
        },
    }



}
</script>