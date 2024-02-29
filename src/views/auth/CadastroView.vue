<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center px-5">
                <div v-if="mostrarSkeleton" class=" mb-5 skeleton-logo"></div>
                <img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="">

                <div v-if="cnpjTab" class="area-login px-4">

                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Vamos lá...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Antes de tudo, vamos precisar validar alguns dados.</p>

                    <div class="mt-4">
                        <div class="mb-3">
                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Informe seu CNPJ
                            </label>
                            <input type="text" v-if="!mostrarSkeleton" class="form-control" @input="aplicaMascaraCNPJ"
                                v-model="cnpj" placeholder="00.000.000/0001-00">
                            <p v-if="msgSuccessCnpj" class="text-success mt-2"><i class="fa fa-check"></i> Seu CNPJ é
                                válido.</p>
                            <p v-if="msgErrorCnpj" class="text-danger mt-2"><i class="fa fa-ban"></i> Seu CNPJ não é válido,
                                tenho outro.</p>
                        </div>
                    </div>

                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" @click="handleAvancar()" type="submit" :disabled="!msgSuccessCnpj"
                        class="btn btn-dark bot mt-4">Avançar</button>

                    <a href="/">
                        <button v-if="!mostrarSkeleton" href="/" class="btn btn-outline-dark bot mt-4">Voltar ao
                            login</button>

                    </a>

                </div>

                <div v-if="dadosTab" class="px-4">
                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Muito bom...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Agora preencha esses dados para entrar na sua plataforma.</p>

                    <p v-if="campoNullError" class="text-warning mt-2"><i class="fa fa-circle-exclamation"></i> Não deixe
                        campor vazios.</p>


                    <div class="area-dados">
                        <div class="mt-4">
                            <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Razão Social
                                </label>
                                <input type="text" v-if="!mostrarSkeleton" class="form-control" v-model="razao_social"
                                    disabled>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Seu nome
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="nome"
                                        placeholder="Digite seu nome">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Sobrenome
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="sobrenome" placeholder="Digite seu sobrenome">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">E-mail
                                    </label>
                                    <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="email" :required="true" placeholder="Digite um e-mail válido"
                                        :class="{ 'is-invalid': emailValid === true || emailVazio === true }">

                                    <p v-if="emailVazio === true" class="text-danger mt-2"><i
                                            class="fa fa-circle-exclamation"></i>
                                        <strong> Oops...</strong> o e-mail não pode ser em branco.
                                    </p>
                                    <p v-if="emailValid === true && emailVazio !== false" class="text-danger mt-2"><i
                                            class="fa fa-circle-exclamation"></i>
                                        Por favor, forneça um e-mail válido.
                                    </p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Crie uma
                                        senha
                                    </label>
                                    <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="senha" :class="{ 'is-invalid': isEmailInvalid || emailVazio }"
                                        placeholder="Digite sua senha">

                                    <p v-if="emailVazio" class="text-danger mt-2"><i class="fa fa-circle-exclamation"></i>
                                        <strong> Eei...</strong> a senha não pode ser em branco.
                                    </p>

                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Confirme a
                                        senha
                                    </label>
                                    <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="confimSenha" placeholder="Digite a senha novamente">

                                    <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch"><i
                                            class="fa fa-ban"></i> As senhas não conferem!</p>
                                    <p class="text-success mt-2" v-if="confimSenha && passwordsMatch"><i
                                            class="fa fa-check"></i> As senhas conferem</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Telefone
                                    </label>
                                    <input type="text" @input="aplicaMascaraTelefone" required v-if="!mostrarSkeleton"
                                        class="form-control" v-model="telefone" placeholder="(00) 0000-0000">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Cep
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" @input="aplicaMascaraCEP"
                                        class="form-control" v-model="cep" placeholder="000000-000">
                                    <p v-if="msgErrorCep" class="text-danger mt-2"><small><i class="fa fa-check"></i> Cep
                                            inválido</small> </p>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Endereço
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="endereco" placeholder="Digite o endereço completo">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" :disabled="autenticando" @click="handleValidar()" type="submit"
                        class="btn btn-dark bot mt-4">{{ textoBotao }}
                        <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span v-if="autenticando" class="visually-hidden">Aguarde...</span></button>

                    <button v-if="!mostrarSkeleton" @click="handleVoltar()" type="submit" :disabled="!msgSuccessCnpj"
                        class="btn btn-outline-dark bot mt-4">Voltar</button>
                </div>

                <div v-if="validationTab" class="px-4">
                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Perfeito...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Estamos validando tudo. Fique de olho no seu email.</p>


                    <div v-if="loading" class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>

                    <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
                        <i class="fa fa-check"></i> Dados gravados com sucesso! Faça o login e use sua plataforma<strong>
                            Zonu</strong>
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
import axios from 'axios'
import _ from 'lodash';
import api from '../../../service/api';
export default {
    name: 'CadastroView',
    data() {
        return {
            mostrarSkeleton: true,
            msgErrorCnpj: false,
            msgSuccessCnpj: false,
            msgSuccessSenha: false,
            msgErrorSenha: false,
            msgSuccess: false,
            loading: false,

            senhaVazio: true,
            senhaValid: true,
            emailValid: false,
            emailVazio: false,

            cnpj: '',
            razao_social: '',
            nome: '',
            sobrenome: '',
            email: '',
            senha: '',
            confimSenha: '',
            telefone: '',
            cep: '',
            endereco: '',
            id_user: '',
            campoNullError: false,
            textoBotao: "Salvar",
            autenticando: false,
            cnpjTab: true,
            dadosTab: false,
            validationTab: false,

        }
    },
    mounted() {
        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000)
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
        this.debouncedCheckCNPJ = _.debounce(this.consultarCNPJ, 500);
        this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
    },
    computed: {
        passwordsMatch() {
            return this.cadsenha === this.confirmsenha;
        },
    },
    methods: {
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


                }
            }
        },
        consultarCEP() {
            if (this.cep.length === 9) {
                const cepNumeros = this.cep.replace(/\D/g, '');
                try {
                    const response = axios.get(`https://brasilapi.com.br/api/cep/v2/${cepNumeros}`);
                    //console.log(response.data);

                    let rua = response.data.street
                    let bairro = response.data.neighborhood
                    let cidade = response.data.city
                    let estado = response.data.state

                    this.endereco = rua + ', ' + bairro + ', ' + cidade + ' - ' + estado

                } catch (error) {
                    console.error("Erro ao consultar CEP: ", error);

                }
            } else {


            }
        },

        handleAvancar() {
            this.cnpjTab = false
            this.dadosTab = true
            this.validationTab = false
        },
        handleVoltar() {
            this.cnpjTab = true
            this.dadosTab = false
            this.validationTab = false
        },
        handleValidar() {
            this.autenticando = true;
            this.textoBotao = "Aguarde...";

            let cnpj = this.cnpj
            let razao_social = this.razao_social
            let nome = this.nome
            let sobrenome = this.sobrenome
            let email = this.email
            let senha = this.senha
            let telefone = this.telefone
            let cep = this.cep
            let endereco = this.endereco


            if (nome !== '' && sobrenome !== '' && email !== '' && senha !== '' && telefone && cep && endereco != '') {

                this.emailVazio = false;


                setTimeout(() => {
                    this.emailVazio = true;
                    this.senhaVazio = true;
                }, 5000)

                api.cadastro(nome, sobrenome, email, senha).then((res) => {
                    if (res.status == 202) {
                        this.id_user = res.data.usuarioCriado.id_user
                        let id_user = this.id_user

                        api.perfil(id_user, cnpj, razao_social, telefone, cep, endereco).then((res) => {
                            if (res.data.status == 202) {
                                this.validationTab = true

                                setTimeout(() => {
                                    this.lvalidationTab = false;
                                }, 4000)

                            }
                        })
                    } if (res.status == 409) {
                        this.isEmailInvalid = false;
                    }

                })
            } else {
                this.campoNullError = true

                setTimeout(() => {
                    this.campoNullError = false
                    this.autenticando = false;
                    this.textoBotao = "Salvar";
                }, 3000);
                setTimeout(() => {
                    this.campoNullError = false
                }, 10000);


            }




            this.cnpjTab = false


        },


    },

}

</script>