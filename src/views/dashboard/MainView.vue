<template>
    <div class="wrapper">
        <Sidebar />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Administrador</h1>

                    <div class="row">

                        <div class="col-xl-6 col-xxl-5 d-flex">
                            <div class="w-100">
                                <div class="row">

                                    <div class="col-sm-6">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Usuários</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="user-check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">0</h1>
                                                <div class="mb-0">
                                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i>
                                                        -3.65% </span>
                                                    <span class="text-muted">Última semana</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="mostrarSkeleton" class="skeleton-card mt-4"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Revendas</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="users"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">0</h1>
                                                <div class="mb-0">
                                                    <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i>
                                                        5.25% </span>
                                                    <span class="text-muted">Hoje</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Vendas totais</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="dollar-sign"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">R$ 0,00</h1>
                                                <div class="mb-0">
                                                    <span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i>
                                                        6.65% </span>
                                                    <span class="text-muted">Hoje</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="mostrarSkeleton" class="skeleton-card mt-4"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Pesquisas</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="search"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">0</h1>
                                                <div class="mb-0">
                                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i>
                                                        -2.25% </span>
                                                    <span class="text-muted">Since last week</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-xxl-7">
                            <div v-if="mostrarSkeleton" class="skeleton-card-large"></div>
                            <div class="card flex-fill w-100" v-if="!mostrarSkeleton">
                                <div class="card-header">

                                    <h5 class="card-title mb-0">Comparativo de pesquisas</h5>
                                </div>
                                <div class="card-body py-3">
                                    <div class="chart chart-sm">
                                        <canvas id="chartjs-dashboard-bar"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-12 col-xxl-12 d-flex">

                            <div v-if="mostrarSkeleton" class="skeleton-card-table"></div>
                            <div class="card flex-fill" v-if="!mostrarSkeleton">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Clientes Trust <small class="text-success">Pagantes</small>
                                    </h5>
                                </div>
                                <table class="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th class="d-none d-xl-table-cell">E-mail</th>
                                            <th class="d-none d-xl-table-cell">Empresa</th>
                                            <th>Status</th>
                                            <th>Plano</th>
                                            <th>Pesquisas</th>
                                            <th class="d-none d-md-table-cell">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Willian Moura</td>
                                            <td class="d-none d-xl-table-cell">ragner@softwareprecisao.com.br</td>
                                            <td class="d-none d-xl-table-cell">Software Precisão LTDA</td>
                                            <td><span class="badge bg-success">Ativo</span></td>
                                            <td class="d-none d-md-table-cell">Trust Plus</td>
                                            <td class="d-none d-md-table-cell">
                                                <div class="progress" role="progressbar" aria-label="Example with label"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar" style="width: 25%">25%</div>
                                                </div>
                                            </td>
                                            <td class="d-none d-md-table-cell"><button type="button"
                                                    class="btn btn-danger btn-sm" style="margin-right: 3px;"><i
                                                        class="align-middle" data-feather="trash-2"></i></button>
                                                <button type="button" class="btn btn-warning btn-sm"><i class="align-middle"
                                                        data-feather="eye"></i></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </div>
</template>
<script>
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
export default {
    name: 'MainView',
    components: {
        Sidebar,
        Navbar
    }
}
</script>