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
                                                        <th scope="row">
                                                            <div
                                                                class="avatar-null rounded me-1 mb-4"
                                                                style="width: 58px; height: 58px; font-size: 30px; justify-content: center; align-items: center; display: flex;">
                                                                <i class="fa fa-building"></i>
                                                            </div>
                                                        </th>
                                                        <td>{{ item.nome }} {{ item.sobrenome }}</td>
                                                        <td>{{ item.email }}</td>
                                                        <td v-if="item.perfil == null">N/A</td>
                                                        <td v-if="item.perfil !== null">{{ item.perfil.telefone }}</td>

                                                        <td v-if="item.id_nivel == 2"><span
                                                                class="badge text-bg-warning">Cliente</span></td>

                                                        <td v-if="item.id_status == 1"><span
                                                                class="badge text-bg-success">Ativo</span></td>
                                                        <td v-if="item.id_status == 2"><span
                                                                class="badge text-bg-danger">Inativo</span></td>

                                                        <td v-if="item.perfil !== null">{{ item.perfil.razao_social }}
                                                        </td>
                                                        <td><button v-if="item.id_status == 2"
                                                                @click="handleEditStatusAtivate(item.id_user)"
                                                                type="button" class="btn btn-success"
                                                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                                <i class="fa fa-check"></i>
                                                            </button>
                                                            <button v-if="item.id_status == 1"
                                                                @click="handleEditStatusBlock(item.id_user)"
                                                                type="button" class="btn btn-info"
                                                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                                <i class="fa fa-ban"></i>
                                                            </button>
                                                            <button @click="handleDeleteUser(item.id_user)"
                                                                type="button" class="btn btn-danger"
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
    watch: {
        cnpj(newVal) {
            this.debouncedCheckCNPJ();
        },
        cep(newVal) {
            this.debouncedCheckCEP();
        },
    },
    created() {
        this.debouncedCheckCNPJ = _.debounce(this.consultarCNPJ, 100);
        this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
    },
    computed: {
        passwordsMatch() {
            return this.senha === this.confirmSenha;
        },

        iniciais() {
            let inicialNome = this.nome.charAt(0);
            let inicialSobrenome = this.sobrenome.charAt(0);
            return `${inicialNome}${inicialSobrenome}`.toUpperCase().trim();
        }
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

        aplicaMascaraCNPJ() {
            let v = this.cnpj;

            v = v.replace(/\D/g, "");
            if (v.length > 14) {
                v = v.substring(0, 14);
            }

            v = v.replace(/^(\d{2})(\d)/, "$1.$2");
            v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
            v = v.replace(/(\d{4})(\d)/, "$1-$2");

            this.cnpj = v;
        },
        aplicaMascaraCEP() {
            let v = this.cep;

            v = v.replace(/\D/g, "");
            if (v.length > 8) {
                v = v.substring(0, 8);
            }

            v = v.replace(/^(\d{5})(\d)/, "$1-$2");

            this.cep = v;
        },
        aplicaMascaraTelefone() {
            let v = this.telefone;

            v = v.replace(/\D/g, "");
            if (v.length > 11) {
                v = v.substring(0, 11);
            }
            v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
            v = v.replace(/(\d{5})(\d)/, "$1-$2");

            this.telefone = v;
        },
        async consultarCNPJ() {
            if (this.cnpj.length === 18) {
                const cnpj = this.cnpj.replace(/\D/g, '');
                try {
                    const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);

                    if (response.data.descricao_situacao_cadastral == "ATIVA") {
                        this.razao_social = response.data.razao_social
                        this.msgSuccessCnpj = true;
                        this.msgErrorCnpj = false;
                    } else {
                        this.msgErrorCnpj = true;
                        this.msgSuccessCnpj = false;
                    }
                } catch (error) {
                    this.msgErrorCnpj = true;
                    this.msgSuccessCnpj = false;
                }

            }
        },
        async consultarCEP() {
            if (this.cep.length === 9) {
                const cep = this.cep.replace(/\D/g, '');

                try {
                    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

                    // Correção nas propriedades de acordo com a resposta da API
                    let rua = res.data.logradouro;
                    let bairro = res.data.bairro;
                    let cidade = res.data.localidade;
                    let estado = res.data.uf;

                    this.endereco = rua + ' - ' + bairro + ' - ' + cidade + ' - ' + estado


                } catch (error) {
                    console.error("Erro ao consultar CEP: ", error);
                }
            }
        },

        handleSalvarUserZonu() {

            this.textoBotao = "Salvando...";
            this.autenticando = true;

            let nome = this.nome;
            let sobrenome = this.sobrenome;
            let email = this.email;
            let senha = this.senha;
            let selectNivel = this.selectNivel;

            if (nome !== '' && sobrenome !== '' && email !== '' && senha !== '' && selectNivel) {

                api.cadastrosample(nome, sobrenome, email, senha, selectNivel).then(res => {

                    if (res.status == 202) {
                        this.nome = '';
                        this.sobrenome = '';
                        this.email = '';
                        this.senha = '';
                        this.selectNivel = '';
                        this.msgSuccess = true;
                        this.textoBotao = "Criar novo usuário";
                        this.autenticando = false;
                    }

                    setTimeout(() => {
                        this.msgSuccess = false;

                    }, 3000);

                })

            } else {
                this.msgErrorNull = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                setTimeout(() => {
                    this.msgErrorNull = false;

                }, 3000);

            }




        },

        handleSalvarUserConstrutora() {

            this.textoBotao = "Salvando...";
            this.autenticando = true;

            let nome = this.nome;
            let sobrenome = this.sobrenome;
            let email = this.email;
            let senha = this.senha;
            let cnpj = this.cnpj
            let razao_social = this.razao_social
            let telefone = this.telefone
            let cep = this.cep
            let endereco = this.endereco

            if (nome !== '' && sobrenome !== '' && email !== '' && senha !== '' && telefone && cep && endereco != '') {

                api.cadastro(nome, sobrenome, email, senha, razao_social, cnpj, telefone, cep, endereco).then(res => {

                    if (res.status == 202) {
                        this.nome = '';
                        this.sobrenome = '';
                        this.email = '';
                        this.senha = '';
                        this.cnpj = '';
                        this.razao_social = '';
                        this.cep = '';
                        this.endereco = '';
                        this.msgSuccess = true;
                        this.textoBotao = "Criar novo usuário";
                        this.autenticando = false;
                    }

                    setTimeout(() => {
                        this.msgSuccess = false;

                    }, 3000);

                })

            } else {
                this.msgErrorNull = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                setTimeout(() => {
                    this.msgErrorNull = false;

                }, 3000);
            }



        },

        fetcUsuarios() {
            api.listusuarios().then(res => {
                this.listUsers = res.data.response;
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