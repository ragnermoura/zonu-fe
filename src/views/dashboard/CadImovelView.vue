<template>
    <div class="wrapper">
        <Sidebar :defaultCollapsed="true" />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">


                    <h1 class="h3 mb-3"><strong>Cadastro |</strong> Novo Imóveis</h1>

                    <div class="row d-flex flex-row justify-content-between">

                        <div style="width: 19%; margin-right: 1%;">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">

                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="card-header">
                                                        <h3 class="card-title mb-0">Passo a passo</h3>
                                                    </div>
                                                    <div class="row align-items-center">
                                                        <div class="col-12">
                                                            <span v-if="!stepInfo"><i class="fa fa-circle"></i>
                                                                Informações</span>
                                                            <span v-if="stepInfo" class="text-success"><i
                                                                    class="fa fa-check text-success"></i>
                                                                Informações</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>


                                                        <div class="col-12">
                                                            <span v-if="!stepComodos"><i class="fa fa-circle"></i>
                                                                Cômodos</span>
                                                            <span class="text-success" v-if="stepComodos"> <i
                                                                    class="fa fa-check text-success"></i> Cômodos</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>

                                                        <div class="col-12">
                                                            <span v-if="!stepMedidas"> <i class="fa fa-circle"></i>
                                                                Medidas</span>
                                                            <span class="text-success" v-if="stepMedidas"> <i
                                                                    class="fa fa-check text-success"></i> Medidas</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>

                                                        <div class="col-12">
                                                            <span v-if="!stepPreco"> <i class="fa fa-circle"></i>
                                                                Preço</span>
                                                            <span class="text-success" v-if="stepPreco"> <i
                                                                    class="fa fa-check text-success"></i> Preço</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>

                                                        <div class="col-12">
                                                            <span v-if="!stepCaracteristica"> <i class="fa fa-circle"></i>
                                                                Características</span>
                                                            <span class="text-success" v-if="stepCaracteristica"> <i
                                                                    class="fa fa-check text-success"></i>
                                                                Características</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>
                                                        <div class="col-12">
                                                            <span v-if="!stepLocalizacao"> <i class="fa fa-circle"></i>
                                                                Localização</span>
                                                            <span class="text-success" v-if="stepLocalizacao"> <i
                                                                    class="fa fa-check text-success"></i> Localização</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>
                                                        <div class="col-12">
                                                            <span v-if="!stepProximidades"> <i class="fa fa-circle"></i>
                                                                Proximidades</span>
                                                            <span class="text-success" v-if="stepProximidades"> <i
                                                                    class="fa fa-check text-success"></i>
                                                                Proximidades</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>

                                                        <div class="col-12">
                                                            <span v-if="!stepDescricao"> <i class="fa fa-circle"></i>
                                                                Descrição</span>
                                                            <span class="text-success" v-if="stepDescricao"> <i
                                                                    class="fa fa-check text-success"></i> Descrição</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>

                                                        <div class="col-12">
                                                            <span v-if="!stepComplemento"> <i class="fa fa-circle"></i>
                                                                Complementos</span>
                                                            <span class="text-success" v-if="stepComplemento"> <i
                                                                    class="fa fa-check text-success"></i>
                                                                Complementos</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>
                                                        <div class="col-12">
                                                            <span v-if="!stepImagens"> <i class="fa fa-circle"></i>
                                                                Imagens</span>
                                                            <span class="text-success" v-if="stepImagens"> <i
                                                                    class="fa fa-check text-success"></i> Imagens</span>
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="vertical-hr"></div>
                                                        </div>


                                                        <div class="col-12">
                                                            <span v-if="!stepPublicacao"> <i class="fa fa-circle"></i>
                                                                Publicação</span>
                                                            <span class="text-success" v-if="stepPublicacao"> <i
                                                                    class="fa fa-check text-success"></i> Publicação</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Aqui começa as TABS. Copie e cole da INFOTAB -->
                        <div style="width: 79%; margin-left: 1%;">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="card" v-if="infoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Informações iniciais</h1>
                                                    <p>Defina as informações com precisão para os seus clientes.</p>
                                                </div>
                                                <div>

                                                    <div class="row mt-4">
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Código de referência <small
                                                                        class="text-danger">*</small>
                                                                </label>
                                                                <input type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control" v-model="codigoref"
                                                                    placeholder="Digite aqui...">
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Condomínio/empreendimento?
                                                                </label>

                                                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio"
                                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                                        v-model="selectCondominio">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Sim</label>

                                                                    <input type="radio" class="btn-check" value="Não"
                                                                        v-model="selectCondominio" name="btnradio"
                                                                        id="btnradio2" autocomplete="off">
                                                                    <label class="btn btn-outline-danger"
                                                                        for="btnradio2">Não</label>


                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-6">
                                                            <div class="mb-3" v-if="inputCondominio">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Condomínio/empreendimento? <small
                                                                        class="text-danger">* </small><button type="button"
                                                                        class="btn btn-success"
                                                                        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                                        <i class="fa fa-plus"></i> Adicionar condominio
                                                                    </button>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Proprietário <small
                                                                        class="text-danger">*
                                                                    </small><small>(Privado)</small> <button type="button"
                                                                        class="btn btn-success"
                                                                        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                                        <i class="fa fa-plus"></i> Adicionar
                                                                    </button>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-3 mt-2">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Corretor Responsável <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-3 mt-2">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Agenciador
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-2 mt-2">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Tipo/Subtipo <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Perfil do imóvel <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Situação <small class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Ano da construção <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <input type="number" required v-if="!mostrarSkeleton"
                                                                    class="form-control" placeholder="Ex.: 2015"
                                                                    v-model="codigoref" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Incorporação <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>

                                                                <input type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control" placeholder="Digite..."
                                                                    v-model="codigoref" />


                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Posição Solar <small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>
                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Terreno <small class="text-danger">*
                                                                    </small>
                                                                </label>
                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" id="btnTerreno1"
                                                                        autocomplete="off" value="Plano"
                                                                        v-model="selectTerreno">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Plano</label>

                                                                    <input type="radio" class="btn-check" id="btnTerreno2"
                                                                        autocomplete="off" value="Aclive"
                                                                        v-model="selectTerreno">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio2">Aclive</label>

                                                                    <input type="radio" class="btn-check" id="btnTerreno3"
                                                                        autocomplete="off" value="Declive"
                                                                        v-model="selectTerreno">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio3">Declive</label>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Próximo ao mar?<small
                                                                        class="text-danger">*
                                                                    </small>
                                                                </label>
                                                                <select type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control form-select" v-model="codigoref">

                                                                    <option selected disabled>Selecione</option>

                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Averbado
                                                                </label>

                                                                <br>

                                                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio"
                                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                                        v-model="selectCondominio">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Sim</label>

                                                                    <input type="radio" class="btn-check" value="Não"
                                                                        v-model="selectCondominio" name="btnradio"
                                                                        id="btnradio2" autocomplete="off">
                                                                    <label class="btn btn-outline-danger"
                                                                        for="btnradio2">Não</label>


                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Escriturado
                                                                </label>

                                                                <br>

                                                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio"
                                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                                        v-model="selectCondominio">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Sim</label>

                                                                    <input type="radio" class="btn-check" value="Não"
                                                                        v-model="selectCondominio" name="btnradio"
                                                                        id="btnradio2" autocomplete="off">
                                                                    <label class="btn btn-outline-danger"
                                                                        for="btnradio2">Não</label>


                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Esquina
                                                                </label>

                                                                <br>

                                                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio"
                                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                                        v-model="selectCondominio">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Sim</label>

                                                                    <input type="radio" class="btn-check" value="Não"
                                                                        v-model="selectCondominio" name="btnradio"
                                                                        id="btnradio2" autocomplete="off">
                                                                    <label class="btn btn-outline-danger"
                                                                        for="btnradio2">Não</label>


                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-3">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">Tem mobília
                                                                </label>

                                                                <br>

                                                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio"
                                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                                        v-model="selectCondominio">
                                                                    <label class="btn btn-outline-success"
                                                                        for="btnradio1">Sim</label>

                                                                    <input type="radio" class="btn-check" value="Não"
                                                                        v-model="selectCondominio" name="btnradio"
                                                                        id="btnradio2" autocomplete="off">
                                                                    <label class="btn btn-outline-danger"
                                                                        for="btnradio2">Não</label>


                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>





                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button class="btn btn-secondary"
                                                                    type="button">Cancelar</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoComodo()" type="button">Próximo <i
                                                                        class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="comodosTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Cômodos</h1>
                                                    <p>Defina as quantidades de cada cômodo deste imóvel.</p>
                                                </div>
                                                <div>


                                                     <!-- Insira o HTML form aqui de acordo com o TecImob -->

                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorInfo()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoMedida()" type="button">Próximo <i
                                                                        class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="medidaTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Medidas</h1>
                                                    <p>Defina as medidas deste imóvel.</p>
                                                </div>
                                                <div>

                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorComodos()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoPreco()" type="button">Próximo <i
                                                                        class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="precoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Preço</h1>
                                                    <p>Defina o preço deste imóvel e outras informações importantes para o
                                                        seu cliente.</p>
                                                </div>
                                                <div>

                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorPreco()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoCaracteristica()"
                                                                    type="button">Próximo
                                                                    <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="caracteristicaTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Características do Imóvel</h1>
                                                    <p>Defina todas as características deste imóvel.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorCaracteristica()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoLocalizacao()"
                                                                    type="button">Próximo <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="localizacaoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Localização</h1>
                                                    <p>Adicione a localização deste imóvel e defina o que será mostrado ou
                                                        não em seu site.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoProximidades()"
                                                                    type="button">Próximo
                                                                    <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="proximidadesTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Proximidades</h1>
                                                    <p>Defina os estabelecimentos próximos a este imóvel.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoDescricao()" type="button">Próximo
                                                                    <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="descricaoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Descrição</h1>
                                                    <p>Descreva o imóvel com as melhores informações possíveis para atrair o
                                                        seu cliente.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoComplemento()"
                                                                    type="button">Próximo <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="complementoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Complementos</h1>
                                                    <p>Configure dados complementares do seu imóvel.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoImagem()" type="button">Próximo <i
                                                                        class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="imagemTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Imagens</h1>
                                                    <p>Envie todas as imagens que mostrem as qualidades do imóvel.</p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success"
                                                                    @click="handleProximoPublicacao()" type="button">Próximo
                                                                    <i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="card" v-if="publicacaoTab">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Publicação</h1>
                                                    <p>Selecione abaixo para quais portais você deseja enviar este imóvel.
                                                    </p>
                                                </div>
                                                <div>


                                                    <hr>
                                                    <div class="row mt-3">
                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-block">
                                                                <button @click="handleAnteriorLocalizacao()"
                                                                    class="btn btn-secondary" type="button"><i
                                                                        class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                    Anterior</button>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button class="btn btn-success" @click="handleFinish()"
                                                                    type="button">Finalizar<i class="fa fa-arrow-right"
                                                                        aria-hidden="true"></i></button>
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
        </div>

    </div>
</template>
<script>
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
export default {
    name: 'CadImoveisView',
    components: {
        Sidebar,
        Navbar
    },
    data() {
        return {
            home: '',
            comodos: '',
            inputCondominio: false,
            selectCondominio: null,

            mostrarSkeleton: true,

            //Tabs - para ativar, mude de FALSE para TRUE
            infoTab: true,
            comodosTab: false,
            medidaTab: false,
            precoTab: false,
            caracteristicaTab: false,
            localizacaoTab: false,
            proximidadesTab: false,
            complementoTab: false,
            imagemTab: false,
            publicacaoTab: false,

            //Icons Lateriais de Progressão
            stepInfo: false,
            stepComodos: false,
            stepMedidas: false,
            stepPreco: false,
            stepCaracteristica: false,
            stepLocalizacao: false,
            stepProximidades: false,
            stepDescricao: false,
            stepComplemento: false,
            stepImagens: false,
            stepPublicacao: false,

        }
    },


    //Aqui está o MOSTRA e ESCONDE do INPUT de Condomínio da primeira Fileira
    watch: {
        selectCondominio(newValue) {
            if (newValue == 'Sim') {
                this.inputCondominio = true
            } else {
                this.inputCondominio = false
            }
        },
    },
    mounted() {
        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000)
    },

    methods: {

        //Ação do botão Proximo de cada tab
        handleProximoComodo() {
            this.infoTab = false
            this.comodosTab = true
            this.stepInfo = true
        },
        handleProximoMedida() {

            this.comodosTab = false
            this.medidaTab = true

            this.stepInfo = true
            this.stepComodos = true
        },
        handleProximoPreco() {

            this.medidaTab = false
            this.precoTab = true
            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
        },
        handleProximoCaracteristica() {
            this.precoTab = false
            this.caracteristicaTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
        },
        handleProximoLocalizacao() {
            this.caracteristicaTab = false
            this.localizacaoTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
        },
        handleProximoProximidades() {
            this.localizacaoTab = false
            this.proximidadesTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
        },
        handleProximoDescricao() {
            this.proximidadesTab = false
            this.descricaoTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
            this.stepProximidades = true
        },
        handleProximoComplemento() {
            this.descricaoTab = false
            this.complementoTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
            this.stepProximidades = true
            this.stepDescricao = true
        },
        handleProximoImagem() {
            this.complementoTab = false
            this.imagemTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
            this.stepProximidades = true
            this.stepDescricao = true
            this.stepComplemento = true
        },
        handleProximoPublicacao() {
            this.imagemTab = false
            this.publicacaoTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
            this.stepProximidades = true
            this.stepDescricao = true
            this.stepComplemento = true
            this.stepImagens = true
        },

        //Evento de enviar para a API
        handleProximoFinish() {
            this.imagemTab = false
            this.publicacaoTab = true

            this.stepInfo = true
            this.stepComodos = true
            this.stepMedidas = true
            this.stepPreco = true
            this.stepCaracteristica = true
            this.stepLocalizacao = true
            this.stepProximidades = true
            this.stepDescricao = true
            this.stepComplemento = true
            this.stepImagens = true
            this.stepPublicacao = true
        },



        //Evento do botão Voltar (Imcompleto)
        handleAnteriorInfo() {
            this.infoTab = true
            this.comodosTab = false
        },
        handleAnteriorComodos() {
            this.comodosTab = true
            this.medidaTab = false
        },
        handleAnteriorPreco() {
            this.precoTab = false
            this.medidaTab = true
        }
    }


}
</script>