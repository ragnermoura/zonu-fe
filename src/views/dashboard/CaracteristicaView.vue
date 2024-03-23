<template>
    <div class="wrapper">
        <Sidebar :defaultCollapsed="true" />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Cadastro |</strong> Características</h1>

                    <div class="row d-flex flex-row justify-content-between">
                        <div style="width: 49%; margin-right: 1%">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Cadastro de Características</h1>

                                                    <div
                                                        v-if="msgSuccess"
                                                        class="alert alert-success alert-dismissible fade show"
                                                        role="alert"
                                                    >
                                                        <strong><i class="fa fa-check"></i> Sucesso!</strong> Nova
                                                        característica cadastrada.
                                                    </div>
                                                </div>

                                                <div>
                                                    <div class="row mt-4">
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <div
                                                                    v-if="mostrarSkeleton"
                                                                    class="skeleton-label"
                                                                ></div>
                                                                <div
                                                                    v-if="mostrarSkeleton"
                                                                    class="skeleton-input"
                                                                ></div>
                                                                <label
                                                                    v-if="!mostrarSkeleton"
                                                                    for="exampleInputEmail1"
                                                                    class="form-label"
                                                                >
                                                                    Nova característica
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    required
                                                                    v-if="!mostrarSkeleton"
                                                                    class="form-control"
                                                                    v-model="caracteristica"
                                                                    placeholder="Digite aqui..."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                            <button
                                                                v-if="!mostrarSkeleton"
                                                                class="btn btn-success"
                                                                @click="handleSalvar()"
                                                                type="button"
                                                            >
                                                                Salvar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="width: 49%; margin-left: 1%">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Lista de Características</h1>
                                                </div>
                                                <div>
                                                    <div class="row mt-4">
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Caracteristica</th>
                                                                            <th scope="col">Ação</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr
                                                                            v-for="item in lists"
                                                                            :key="item.id_caracteristica"
                                                                        >
                                                                            <td>{{ item.nome_caracteristica }}</td>
                                                                            <td>
                                                                                <button
                                                                                    @click="
                                                                                        handleDelete(
                                                                                            item.id_caracteristica
                                                                                        )
                                                                                    "
                                                                                    type="button"
                                                                                    class="btn btn-danger"
                                                                                    style="
                                                                                        --bs-btn-padding-y: 0.25rem;
                                                                                        --bs-btn-padding-x: 0.5rem;
                                                                                        --bs-btn-font-size: 0.75rem;
                                                                                    "
                                                                                >
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
import Sidebar from "../../components/sidebar/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import api from "../../../service/api/index";
import {jwtDecode} from "jwt-decode";

export default {
    name: "CaracteristicaView",
    components: {
        Sidebar,
        Navbar,
        Footer,
    },
    data() {
        return {
            mostrarSkeleton: true,
            caracteristica: "",
            msgSuccess: false,
            lists: [],
            token: localStorage.getItem("token"),
            id_user: "",
        };
    },
    mounted() {
        this.fetchList();

        let token = this.token;
        let decode = jwtDecode(token);
        this.id_user = decode.id_user;

        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000);
    },
    methods: {
        handleSalvar() {
            let nome_caracteristica = this.caracteristica;

            api.caracteristica(nome_caracteristica, id_user).then((res) => {
                console.log(res);

                this.fetchList();
            });
        },

        handleDelete(id) {
            let id_caracteristica = id;

            api.deletecaracteristica(id_caracteristica).then((res) => {
                console.log(res);

                this.fetchList();
            });
        },

        fetchList() {
            api.listcaracteristica().then((res) => {
                this.lists = res.data;
            });
        },
    },
};
</script>
