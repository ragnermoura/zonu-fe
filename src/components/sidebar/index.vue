<template>
    <nav id="sidebar" class="sidebar js-sidebar" :class="{ 'collapsed': isCollapsed }">
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
                <span class="align-middle">
                    <img src="../../../assets/images/logo.svg" class="logomin" alt="" srcset="">

                </span>
            </a>

            <hr>

            <div class="logoArea">
                <img class="logoEmpresa" src="../../../assets/images/logoEmpresa.jpg" alt="">
            </div>

            <ul class="sidebar-nav" style="margin-top: -20px !important;">
                <li class="sidebar-header">
                    Administrador
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/dashboard">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/usuarios">
                        <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Usuários <span
                                class="badge text-bg-info">Admin Zonu</span>
                        </span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/proximidades">
                        <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Proximidades
                            <span class="badge text-bg-success">Geral</span></span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/caracteristica">
                        <i class="align-middle" data-feather="check-square"></i> <span
                            class="align-middle">Caracteristica <span class="badge text-bg-success">Geral</span></span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/clientes">
                        <i class="align-middle" data-feather="user-check"></i> <span class="align-middle">Clientes
                        </span>
                    </a>
                </li>


                <li class="sidebar-header">
                    Gestão
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/dashboard-client">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                    </a>
                </li>


                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-imovel">
                        <i class="align-middle" data-feather="home"></i> <span class="align-middle">Novo imóvel</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-condominio">
                        <i class="align-middle" data-feather="plus"></i> <span class="align-middle">Novo
                            condomínio</span>
                    </a>
                </li>



            </ul>


        </div>
    </nav>
</template>

<script>

import { jwtDecode } from "jwt-decode";
export default {
    name: 'SideBar',

    data() {
        return {
            token: '',
            isCollapsed: this.defaultCollapsed,
        }
    },

    created() {
        if (this.$route.path === '/novo-imovel') {
            this.isCollapsed = true;
        }
    },
    mounted() {

        let token = localStorage.getItem('token');

        if (!token || token === 'null') {
            window.location.href = "/";
        } else {
            try {
                let decode = jwtDecode(token);
                this.token = decode;

                if (decode.id_status == 2) {

                    console.log('Status do token inválido:', decode.id_status);
                    window.location.href = "/";

                }
            } catch (error) {
                console.error('Erro ao decodificar token:', error);
            }
        }
    }



}
</script>