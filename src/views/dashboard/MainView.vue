<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <Navbar />

            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Administrador</h1>

                    <div class="col-xl-12 mt-2">
                        <div class="w-100">
                            <div class="row">

                                <div v-if="progressView" class="row"
                                    style="margin-left: 2%; margin-top: 2%; margin-bottom: 3%;">

                                    <div class="col-xl-2">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Perfil</small></h6>
                                                    <img class="iconProgress"
                                                        src="../../../../assets/images/icons/iconPerfil.png" alt="">
                                                    <div v-if="perfil === 0">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckInActive.png"
                                                            alt="">
                                                    </div>
                                                    <div v-if="perfil === 1">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckActive.png"
                                                            alt="">
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-2">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Logo</small></h6>
                                                    <img class="iconProgress"
                                                        src="../../../../assets/images/icons/iconLogo.png" alt="">
                                                    <div v-if="capa === 0">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckInActive.png"
                                                            alt="">
                                                    </div>
                                                    <div v-if="capa === 1">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckActive.png"
                                                            alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>


                                    <div class="col-xl-2">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Imóvel</small> </h6>
                                                    <img class="iconProgress"
                                                        src="../../../../assets/images/icons/iconImovel.png" alt="">

                                                    <div v-if="imovel === 0">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckInActive.png"
                                                            alt="">
                                                    </div>
                                                    <div v-if="imovel === 1">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckActive.png"
                                                            alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-1 mt-5">
                                        <hr class="linhacomplete">
                                    </div>

                                    <div class="col-xl-2">
                                        <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                                        <div class="card" v-if="!mostrarSkeleton">
                                            <div class="card-body">
                                                <div class="row">
                                                    <h6 class="text-center"><small>Publicação</small> </h6>
                                                    <img class="iconProgress"
                                                        src="../../../../assets/images/icons/iconPublish.png" alt="">
                                                    <div v-if="publicacao === 0">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckInActive.png"
                                                            alt="">
                                                    </div>
                                                    <div v-if="publicacao === 1">
                                                        <img class="mt-3 iconCheck img-fluid"
                                                            src="../../../../assets/images/icons/iconCheckActive.png"
                                                            alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-xl-12 mt-5">
                        <div class="w-100">
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col mt-0">
                                                    <h5 class="card-title">Imoveis cadastrados</h5>
                                                </div>

                                                <div class="col-auto">
                                                    <div class="stat text-primary">
                                                        <i class="align-middle" data-feather="home"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 class="mt-1 mb-3">0</h1>
                                            <div class="mb-0">
                                                <span class="text-danger">
                                                    <i class="mdi mdi-arrow-bottom-right"></i> -3.65%
                                                </span>
                                                <span class="text-muted">Última semana</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-md-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col mt-0">
                                                    <h5 class="card-title">Condomínios cadastrados</h5>
                                                </div>

                                                <div class="col-auto">
                                                    <div class="stat text-primary">
                                                        <i class="align-middle" data-feather="building"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 class="mt-1 mb-3">0</h1>
                                            <div class="mb-0">
                                                <span class="text-danger">
                                                    <i class="mdi mdi-arrow-bottom-right"></i> -3.65%
                                                </span>
                                                <span class="text-muted">Última semana</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="thumb-wrapper">
                            <img class="thumb" src="../../../../assets/images/exempleThumb.jpg" alt="">
                        </div>

                        <div class="thumb-wrapper">
                            <img class="thumb" src="../../../../assets/images/exempleThumb.jpg" alt="">
                        </div>

                    </div>

                    <div class="col-xl-12 mt-5">
                        <div class="w-100">
                            <div class="row">


                                <div class="col-xl-5 col-xxl-5">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0"><i class="fa fa-plus"></i> Ultimos imóveis
                                                cadastrados</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">
                                                <a class="row" style="text-decoration: none;" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    <div class="col-3">
                                                        <img class="thumbImovel"
                                                            src="../../../../assets/images/exempleThumb.jpg" alt="">
                                                    </div>

                                                    <div class="col-9" style="margin-left: -10px;">
                                                        <h5><i class="fa fa-building"></i> <strong>teste</strong> <span
                                                                style="float: inline-end;" class="text-danger"><i
                                                                    class="fa fa-trash"></i></span>

                                                        </h5>
                                                        <h5 class="text-info"><strong>R$ 0,000</strong><span
                                                                style="float: inline-end;" class="text-warning"><i
                                                                    class="fa fa-edit"></i></span></h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                                                Rua das flores, 55 - Jardim Paulista</small> </h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                                                Atualizado: 00-00-0000</small> <span
                                                                class="text-success"
                                                                style="float: inline-end; font-weight: 900;">
                                                                9/10</span></h5>

                                                    </div>

                                                    <hr class="mt-3">
                                                </a>

                                                <a class="row" style="text-decoration: none;">
                                                    <div class="col-3">
                                                        <img class="thumbImovel"
                                                            src="../../../../assets/images/exempleThumb.jpg" alt="">
                                                    </div>

                                                    <div class="col-9" style="margin-left: -10px;">
                                                        <h5><i class="fa fa-building"></i> <strong>teste</strong> <span
                                                                style="float: inline-end;" class="text-danger"><i
                                                                    class="fa fa-trash"></i></span>

                                                        </h5>
                                                        <h5 class="text-info"><strong>R$ 0,000</strong><span
                                                                style="float: inline-end;" class="text-warning"><i
                                                                    class="fa fa-edit"></i></span></h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                                                Rua das flores, 55 - Jardim Paulista</small> </h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                                                Atualizado: 00-00-0000</small> <span
                                                                class="text-success"
                                                                style="float: inline-end; font-weight: 900;">
                                                                9/10</span></h5>

                                                    </div>

                                                    <hr class="mt-3">
                                                </a>

                                                <a class="row" style="text-decoration: none;">
                                                    <div class="col-3">
                                                        <img class="thumbImovel"
                                                            src="../../../../assets/images/exempleThumb.jpg" alt="">
                                                    </div>

                                                    <div class="col-9" style="margin-left: -10px;">
                                                        <h5><i class="fa fa-building"></i> <strong>teste</strong> <span
                                                                style="float: inline-end;" class="text-danger"><i
                                                                    class="fa fa-trash"></i></span>

                                                        </h5>
                                                        <h5 class="text-info"><strong>R$ 0,000</strong><span
                                                                style="float: inline-end;" class="text-warning"><i
                                                                    class="fa fa-edit"></i></span></h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                                                Rua das flores, 55 - Jardim Paulista</small> </h5>
                                                        <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                                                Atualizado: 00-00-0000</small> <span
                                                                class="text-success"
                                                                style="float: inline-end; font-weight: 900;">
                                                                9/10</span></h5>

                                                    </div>

                                                    <hr class="mt-3">
                                                </a>

                                                <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                    <button class="btn btn-dark btn-sm">
                                                        Anterior
                                                    </button>
                                                    <button class=" btn btn-dark btn-sm"
                                                        style="margin-right: 3% !important;">
                                                        Proximo
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-7 col-xxl-7">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Média do m2</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">

                                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="pills-home-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-home"
                                                            type="button" role="tab" aria-controls="pills-home"
                                                            aria-selected="true">Bairro</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-profile-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-profile"
                                                            type="button" role="tab" aria-controls="pills-profile"
                                                            aria-selected="false">Tipo de Imóvel</button>
                                                    </li>


                                                </ul>
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="pills-home"
                                                        role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                                        ...</div>
                                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                                        aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                                        aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                                                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel"
                                                        aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-xl-6 col-xxl-6">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Imoveis publicados X Imóveis aguardando</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-6 col-xxl-6">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Aluguél x Venda</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div class="col-xl-12 col-xxl-12">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Meus imóveis</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">

                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel"><i
                                                    class="fa fa-building"></i> Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button class="nav-link active" id="nav-home-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
                                                        role="tab" aria-controls="nav-home" aria-selected="true">
                                                        Informações do imóvel </button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Radar <small><i
                                                                class="fa fa-lock"></i></small></button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false" disabled>CRM
                                                        <small><i class="fa fa-lock"></i></small></button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Anotações <small><i
                                                                class="fa fa-lock"></i></small></button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Documentos <small><i
                                                                class="fa fa-lock"></i></small></button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Envios <small><i class="fa fa-lock"></i></small>
                                                    </button>
                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Históricos <small><i
                                                                class="fa fa-lock"></i></small></button>

                                                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-disabled" type="button" role="tab"
                                                        aria-controls="nav-disabled" aria-selected="false"
                                                        disabled>Estatísticas <small><i
                                                                class="fa fa-lock"></i></small></button>



                                                </div>
                                            </nav>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                                    aria-labelledby="nav-home-tab" tabindex="0">
                                                    <div class="container mt-5">
                                                        <div class="row">
                                                            <div class="col-md-2 m-2">
                                                                <img width="200"
                                                                    src="../../../../assets/images/exempleThumb.jpg"
                                                                    class="rounded" alt="...">
                                                            </div>
                                                            <div class="col-md-2 m-2">
                                                                <img width="200"
                                                                    src="../../../../assets/images/exempleThumb.jpg"
                                                                    class="rounded" alt="...">
                                                            </div>
                                                            <div class="col-md-2 m-2">
                                                                <img width="200"
                                                                    src="../../../../assets/images/exempleThumb.jpg"
                                                                    class="rounded" alt="...">
                                                            </div>
                                                            <div class="col-md-2 m-2">
                                                                <img width="200"
                                                                    src="../../../../assets/images/exempleThumb.jpg"
                                                                    class="rounded" alt="...">
                                                            </div>
                                                            <div class="col-md-2 m-2">
                                                                <img width="200"
                                                                    src="../../../../assets/images/exempleThumb.jpg"
                                                                    class="rounded" alt="...">
                                                            </div>

                                                        </div>

                                                        <div class="row mt-3">
                                                            <div class="col-md-2">
                                                                <h5><strong>Preço <small style="font-size: 10px;"
                                                                            class="text-secondary">(Venda)</small></strong>
                                                                </h5>
                                                                <h4 class="text-success"><strong>R$ 00,000 </strong>
                                                                </h4>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <h5><strong>Condomínio</strong></h5>
                                                                <h4 class="text-success"><strong>-</strong>
                                                                </h4>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <h5><strong>Taxas <small style="font-size: 10px;"
                                                                            class="text-secondary">(Mensal)</small></strong>
                                                                </h5>
                                                                <h4 class="text-success"><strong>R$ 00,000</strong>
                                                                </h4>
                                                            </div>

                                                            <hr class="mt-3">

                                                        </div>

                                                        <div class="row mt-3">
                                                            <div class="col-md-7">
                                                                <h6 style="font-size: 12px;"><strong>Cômodos</strong>
                                                                </h6>
                                                                <div class="row mt-3 ml-2">
                                                                    <div class="col-md-3">
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Dormitórios: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Sendo Suites: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Banheiros: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Garagens: -</strong>
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Dormitórios: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Sendo Suites: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Banheiros: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Garagens: -</strong>
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Dormitórios: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Sendo Suites: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Banheiros: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Garagens: -</strong>
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Dormitórios: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Sendo Suites: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Banheiros: 1</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px; text-align: right;">
                                                                            <strong>Garagens: -</strong>
                                                                        </h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-md-1 mt-3">
                                                                <div
                                                                    style="border-left: 1px solid black; height: 100px; ">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <h6 style="font-size: 12px; "><strong>Medida das
                                                                        áreas</strong>
                                                                </h6>
                                                                <div class="row mt-2">
                                                                    <div class="col-md-12">
                                                                        <h6 style="font-size: 12px;">
                                                                            <strong>Total: 18,36m'</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px;">
                                                                            <strong>Construida: -</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px;">
                                                                            <strong>Privativa: -</strong>
                                                                        </h6>
                                                                        <h6 style="font-size: 12px;">
                                                                            <strong>Preço m': R$ 12.500,00</strong>
                                                                        </h6>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-md-2">
                                                                <h5><strong>Taxas <small style="font-size: 10px;"
                                                                            class="text-secondary">(Mensal)</small></strong>
                                                                </h5>
                                                                <h4 class="text-success"><strong>R$ 00,000</strong>
                                                                </h4>
                                                            </div>

                                                            <hr class="mt-3">

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Fechar</button>

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
import api from '../../../service/api/index'
import { jwtDecode } from "jwt-decode";

export default {
    name: 'MainView',
    data() {
        return {
            token: localStorage.getItem('token'),
            perfil: 0,
            capa: 0,
            imovel: 0,
            publicacao: 0,
            progressView: true

        }
    },
    components: {
        Sidebar,
        Navbar,
        Footer
    },

    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;

        api.progress(id_user).then(res => {

            this.perfil = res.data.perfil;
            this.capa = res.data.logo_capa;
            this.imovel = res.data.imovel;
            this.publicacao = res.data.publicacao;

            if (this.perfil == 1 && this.capa == 1 && this.imovel == 1 && this.publicacao == 1) {
                this.progressView = false;
            } else {
                this.progressView = true;
            }


        })
    }


}
</script>