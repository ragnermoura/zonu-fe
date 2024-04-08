<template>
    <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
        </a>

        <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                        <div class="position-relative">
                            <i class="align-middle" data-feather="bell"></i>
                            <span class="indicator">0</span>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                        <div class="dropdown-menu-header">
                            0 Novas Notificações
                        </div>
                        <div class="list-group">
                            <!-- <a href="solicitacoes" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <i class="text-success" data-feather="user-plus"></i>
                                    </div>
                                    <div class="col-10">
                                        <div class="text-dark">New connection</div>
                                        <div class="text-muted small mt-1">Christina accepted your request.</div>
                                        <div class="text-muted small mt-1">14h ago</div>
                                    </div>
                                </div>
                            </a> -->
                        </div>
                        <div class="dropdown-menu-footer">
                            <a href="solicitacoes" class="text-muted">Mostrar todas as Solicitações</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                        <div class="position-relative">
                            <i class="align-middle" data-feather="message-square"></i>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                        aria-labelledby="messagesDropdown">
                        <div class="dropdown-menu-header">
                            <div class="position-relative">
                                0 Novas mensagens
                            </div>
                        </div>
                        <div class="list-group">
                            <!-- <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <img src="../../../assets/image/avatars/avatar-5.jpg"
                                            class="avatar img-fluid rounded-circle" alt="Vanessa Tucker">
                                    </div>
                                    <div class="col-10 ps-2">
                                        <div class="text-dark">Vanessa Tucker</div>
                                        <div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.
                                        </div>
                                        <div class="text-muted small mt-1">15m ago</div>
                                    </div>
                                </div>
                            </a> -->

                        </div>
                        <div class="dropdown-menu-footer">
                            <a href="#" class="text-muted">Mostrar todas as Mensagens</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                        <i class="align-middle" data-feather="settings"></i>
                    </a>

                    <a v-if="image == !null" class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                        data-bs-toggle="dropdown">
                        <img :src="`https://www.zonu.com.br/api/public${image}`" class="avatar img-fluid rounded me-1"
                            alt="Imagem de perfil" /> <span class="text-dark">{{ nome }} {{ sobrenome }}</span>
                    </a>
                    <a v-if="image == null || image == '/avatar/default-avatar.png'" class="nav-link dropdown-toggle d-flex align-items-center" href="#"
                        data-bs-toggle="dropdown">
                        <div class="avatar-null img-fluid rounded me-1" alt="Avatar">{{ iniciais }}</div>
                        <span class="text-dark">{{ nome }} {{ sobrenome }}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="/perfil"><i class="align-middle me-1" data-feather="user"></i>
                            Perfil</a>
                        <a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="pie-chart"></i>
                            Meus Créditos</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="index.html"><i class="align-middle me-1"
                                data-feather="settings"></i>
                            Configuração & Privacidade</a>
                        <a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="help-circle"></i>
                            Help
                            Center</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click="handleLogout" href="#">Log out</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

<div class="msgPerfil">
<h6 class="text-perfil"><img src="../../../assets/images/icons/iconStars.png" width="25" alt=""> Seu perfil não está completo <a><i class="iconClose fa fa-close"></i></a> </h6>
</div>
   
</template>
<script>
import { jwtDecode } from "jwt-decode";

export default {
    name: 'NavBar',
    data() {
        return {
            image: null,
            nome: '',
            sobrenome: '',
            email: '',
            iniciais: '',
            token: localStorage.getItem('token')

        }
    },
    mounted() {
        let decode = jwtDecode(this.token);

        this.image = decode.avatar
        this.nome = decode.nome
        this.sobrenome = decode.sobrenome
        this.email = decode.email

        const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
        this.iniciais = iniciais


    },
    methods: {
        handleLogout() {
            localStorage.clear();

            window.location.href = '/';
            return false;
        }
    }
}

</script>