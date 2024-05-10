<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Lista de clientes |</strong> Zonu</h1>
                    <div class="row">

                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-building"></i> Lista de clientes </h5>
                                </div>
                                <div class="card-body">
                                    <div v-if="msgSuccessEdit" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Status atualizado com sucesso!
                                    </div>

                                    <div v-if="msgSuccessDelete" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Usuário Excluído com sucesso!
                                    </div>
                                    <div class="container">
                                        <div class="row">

                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Nome</th>
                                                        <th scope="col">E-mail</th>
                                                        <th scope="col">Telefone</th>
                                                        <th scope="col">Nivel</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Empresa</th>
                                                        <th scope="col">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in listUsers">
                                                    <th scope="row"></th>
                                                    <td>{{ item.nome }} {{ item.sobrenome }}</td>
                                                    <td>{{ item.email }}</td>
                                                    <td v-if="item.perfil == null">N/A</td>
                                                    <td v-if="item.perfil !== null">{{ item.perfil.telefone }}</td>
                                                    <td v-if="item.id_nivel == 1"><span
                                                            class="badge text-bg-dark">Administrador</span></td>
                                                    <td v-if="item.id_nivel == 2"><span
                                                            class="badge text-bg-warning">Cliente</span></td>
                                                    <td v-if="item.id_nivel == 3"><span
                                                            class="badge text-bg-success">Suporte</span></td>
                                                    <td v-if="item.id_status == 1"><span
                                                            class="badge text-bg-success">Ativo</span></td>
                                                    <td v-if="item.id_status == 2"><span
                                                            class="badge text-bg-danger">Inativo</span></td>
                                                    <td v-if="item.perfil == null">Team Zonu</td>
                                                    <td v-if="item.perfil !== null">{{ item.perfil.razao_social }}</td>
                                                    <td><button v-if="item.id_status == 2"
                                                            @click="handleEditStatusAtivate(item.id_user)" type="button"
                                                            class="btn btn-success"
                                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                            <i class="fa fa-check"></i>
                                                        </button>
                                                        <button v-if="item.id_status == 1"
                                                            @click="handleEditStatusBlock(item.id_user)" type="button"
                                                            class="btn btn-info"
                                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                            <i class="fa fa-ban"></i>
                                                        </button>
                                                        <button @click="handleDeleteUser(item.id_user)" type="button"
                                                            class="btn btn-danger"
                                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                    </tr>

                                                </tbody>
                                            </table>



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
import SideBar from '../../../components/sidebar/index.vue';
import NavBar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import _ from 'lodash';

import api from '../../../../service/api/index.js'
export default {
    name: 'ClientesView',
    data() {
        return {

            tabCliente: false,
            tabZonu: false,
            selectTab: false,

            cnpj: '',
            razao_social: '',
            nome: '',
            sobrenome: '',
            iniciais: '',
            email: '',
            senha: '',
            confirmSenha: '',
            telefone: '',
            cep: '',
            endereco: '',
            selectNivel: '',
            msgSuccess: false,
            msgErrorNull: false,

            textoBotao: "Criar novo usuário",
            autenticando: false,

            listUsers: [],

            msgSuccessEdit: false,
            msgSuccessDelete: false
        }
    },
    components: {
        SideBar,
        NavBar,
        Footer
    },
    mounted() {
        let token = localStorage.getItem('token')
        this.token = token;
        let decode = jwtDecode(token);

        this.tabZonu = true;
        this.selectTab = true;

        this.fetcUsuarios();
    },

    methods: {
        handledSelect() {
            let escolha = this.selectTab;


            if (escolha == true) {
                this.tabZonu = true;
                this.tabCliente = false;
            } else {
                this.tabCliente = true;
                this.tabZonu = false;
            }

        },







        fetcUsuarios() {
            api.listusuarios().then(res => {
                this.listUsers = res.data.response;

                console - log(this.listUsers)
            })
        },

        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2

            api.editStatusUser(id_user, status).then(res => {

                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;

                    }, 3000);
                }
            })

        },

        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1

            api.editStatusUser(id_user, status).then(res => {

                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;

                    }, 3000);
                }
            })

        },

        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then(res => {

                if (res.status == 200) {
                    this.fetcUsuarios();
                    this.msgSuccessDelete = true;

                    setTimeout(() => {
                        this.msgSuccessDelete = false;

                    }, 3000);
                }
            })

        }
    }
}
</script>