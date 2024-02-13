<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center px-5">
                <div v-if="mostrarSkeleton" class=" mb-5 skeleton-logo"></div>
                <img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="">

                <div v-if="emailTab" class="area-login px-4">

                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Calma, vamos resolver...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Siga os passos que tudo correrá bem!</p>

                    <div class="mt-4">
                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Informe o E-mail
                            cadastrado
                        </label>
                        <input type="email" v-if="!mostrarSkeleton" class="form-control" v-model="cnpj"
                            placeholder="email@dominio.com">
                        <p v-if="msgSuccessEmail" class="text-success mt-2"><i class="fa fa-check"></i> Este e-mail está
                            em nossa base de dados.</p>
                        <p v-if="msgErrorEmail" class="text-danger mt-2"><i class="fa fa-ban"></i> Este e-mail não está
                            em nossa base de dados, tente outro.
                            tenho outro.</p>

                    </div>

                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" @click="handleAvancar()" :disabled="!msgSuccessCnpj" type="submit"
                        class="btn btn-dark bot mt-4">Avançar</button>

                    <a href="/">
                        <button type="button" v-if="!mostrarSkeleton" href="/" class="btn btn-outline-dark bot mt-4">Voltar ao
                            login</button>
                    </a>


                </div>


                <div v-if="passwordTab" class="area-login px-4">
                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Perfeito...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Digite novas senhas e anote em um lugar seguro.</p>

                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Crie uma nova
                                    senha
                                </label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control" v-model="senha"
                                    placeholder="Digite sua senha">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Confirme a
                                    nova senha
                                </label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="confimSenha" placeholder="Digite a senha novamente">

                                <p v-if="msgErrorSenha" class="text-danger mt-2"><small><i class="fa fa-ban"></i> As
                                        senhas não conferem</small> </p>
                                <p v-if="msgSuccessSenha" class="text-success mt-2"><small><i class="fa fa-check"></i>
                                        As
                                        senhas conferem</small> </p>
                            </div>
                        </div>
                    </div>

                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" @click="handleValidar()" type="submit"
                        class="btn btn-dark bot mt-4">Salvar</button>

                    <button v-if="!mostrarSkeleton" @click="handleVoltar()" type="button"
                        class="btn btn-outline-dark bot mt-4">Voltar</button>


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
export default {
    name: 'RecoveryView',
    data() {
        return {
            mostrarSkeleton: true,
            msgErrorEmail: false,
            msgSuccessEmail: false,
            msgSuccessSenha: false,
            msgErrorSenha: false,
            msgSuccess: false,
            loading: false,

            email: '',
            senha: '',
            confimSenha: '',

            emailTab: true,
            passwordTab: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000)
    },
    methods: {

        handleAvancar() {
            this.emailTabTab = false
            this.passwordTabTab = true
        },
        handleVoltar() {
            this.emailTabTab = true
            this.passwordTabTab = false
        },
        handleValidar() {
            this.emailTabTab = false
            this.passwordTabTab = false
        },

    },

}

</script>