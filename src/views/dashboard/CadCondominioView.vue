<template>
  <div class="wrapper">
    <Sidebar :defaultCollapsed="true" />
    <div class="main">
      <Navbar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro |</strong> Novo Imóveis</h1>

          <div class="row d-flex flex-row justify-content-between">
            <div style="width: 19%; margin-right: 1%">
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
                              <span v-if="!stepInfo"
                                ><i class="fa fa-circle"></i> Informações</span
                              >
                              <span v-if="stepInfo" class="text-success"
                                ><i class="fa fa-check text-success"></i>
                                Informações</span
                              >
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
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
            <div style="width: 79%; margin-left: 1%">
              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">
                    <div class="card" v-if="infoTab2">
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
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Código de referência
                                  <small class="text-danger">*</small>
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="codigoref"
                                  placeholder="Digite aqui..."
                                />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Condomínio/empreendimento?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectCondominio"
                                    id="selectCondominio1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectCondominio"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectCondominio1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectCondominio"
                                    name="selectCondominio"
                                    id="selectCondominio2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectCondominio2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3" v-if="inputCondominio">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Condomínio/empreendimento?
                                  <small class="text-danger">* </small>
                                  <button
                                    type="button"
                                    class="btn btn-success"
                                    style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    "
                                  >
                                    <i class="fa fa-plus"></i> Adicionar condominio
                                  </button>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="condominioEmpreendimento"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Proprietário <small class="text-danger">* </small
                                  ><small>(Privado)</small>
                                  <button
                                    type="button"
                                    class="btn btn-success"
                                    @click="handleprop()"
                                    style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    "
                                  >
                                    <i class="fa fa-plus"></i> Adicionar
                                  </button>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectProprietario"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-3 mt-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Corretor Responsável
                                  <small class="text-danger">* </small>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectCorretor"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-3 mt-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Agenciador
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectAgenciador"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-2 mt-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Tipo/Subtipo
                                  <small class="text-danger">* </small>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="tipoImovel"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Perfil do imóvel
                                  <small class="text-danger">* </small>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="perfilImovel"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Situação
                                  <small class="text-danger">* </small>
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="situacaoImovel"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Ano da construção
                                  <small class="text-danger">* </small>
                                </label>

                                <input
                                  type="number"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  placeholder="Ex.: 2015"
                                  v-model="anoImovel"
                                />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Incorporação
                                  <small class="text-danger">* </small>
                                </label>

                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  placeholder="Digite..."
                                  v-model="incorporacao"
                                />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Posição Solar
                                  <small class="text-danger">* </small>
                                </label>
                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="posicaoSolar"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Terreno
                                  <small class="text-danger">* </small>
                                </label>
                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    id="btnTerreno1"
                                    autocomplete="off"
                                    value="Plano"
                                    name="selectTerreno"
                                    v-model="selectTerreno"
                                  />
                                  <label class="btn btn-outline-success" for="btnTerreno1"
                                    >Plano</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    id="btnTerreno2"
                                    autocomplete="off"
                                    value="Aclive"
                                    name="selectTerreno"
                                    v-model="selectTerreno"
                                  />
                                  <label class="btn btn-outline-success" for="btnTerreno2"
                                    >Aclive</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    id="btnTerreno3"
                                    autocomplete="off"
                                    value="Declive"
                                    name="selectTerreno"
                                    v-model="selectTerreno"
                                  />
                                  <label class="btn btn-outline-success" for="btnTerreno3"
                                    >Declive</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Próximo ao mar?<small class="text-danger">* </small>
                                </label>
                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="proximoMar"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Averbado
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectAverbado"
                                    id="selectAverbado1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectAverbado"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectAverbado1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectAverbado"
                                    name="selectAverbado"
                                    id="selectAverbado2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectAverbado2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Escriturado
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectEscritura"
                                    id="selectEscritura1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectEscritura"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectEscritura1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectEscritura"
                                    name="selectEscritura"
                                    id="selectEscritura2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectEscritura2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Esquina
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectEsquina"
                                    id="selectEsquina1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectEsquina"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectEsquina1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectEsquina"
                                    name="selectEsquina"
                                    id="selectEsquina2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectEsquina2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Tem mobília
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectMobilia"
                                    id="selectMobilia1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectMobilia"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectMobilia1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectMobilia"
                                    name="selectMobilia"
                                    id="selectMobilia2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectMobilia2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-secondary" type="button">
                                  Cancelar
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoComodo()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <!-- <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar preço no site?
                                </label> -->

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    v-model="caracteristicaImovel"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorCaracteristica()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoLocalizacao()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="infoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Localização</h1>
                          <p>
                            Adicione a localização deste imóvel e defina o que será
                            mostrado ou não em seu site.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  CEP
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Digite aqui..."
                                    v-model="buscarCEP"
                                    required
                                    v-if="!mostrarSkeleton"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                  />
                                  <button
                                    class="btn btn-success px-3"
                                    type="button"
                                    id="button-addon1"
                                  >
                                    Buscar
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >País
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectPais"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Estado
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectEstado"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Cidade
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectCidade"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Bairro
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectBairro"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Zona
                                </label>

                                <select
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control form-select"
                                  v-model="selectZona"
                                >
                                  <option selected disabled>Selecione</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-5">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Logradouro
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="logradouro"
                                  placeholder="Consulte..."
                                />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Número
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="nLogradouro"
                                  placeholder="Consulte..."
                                />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Texto de apresentação do imóvel
                                </label>

                                <textarea
                                  class="form-control"
                                  v-if="!mostrarSkeleton"
                                  v-model="apresentacaoImovel"
                                  style="height: 100px"
                                  placeholder="Digite aqui..."
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoProximidades()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <!-- <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar preço no site?
                                </label> -->

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    v-model="proximidades"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoDescricao()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <p>
                            Descreva o imóvel com as melhores informações possíveis para
                            atrair o seu cliente.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Titulo da página de detalhamento do imóvel
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="titleImovel"
                                  placeholder="Digite aqui..."
                                />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Texto de apresentação do imóvel
                                </label>

                                <textarea
                                  class="form-control"
                                  v-if="!mostrarSkeleton"
                                  v-model="apresentacaoImovel"
                                  style="height: 100px"
                                  placeholder="Digite aqui..."
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoComplemento()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Vídeo do Imóvel: Insira a URL do seu vídeo no Youtube
                                  <button
                                    type="button"
                                    class="btn btn-danger ms-2"
                                    style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    "
                                  >
                                    <i class="fa fa-trash me-2"></i> Remover Vídeo
                                  </button>
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="urlYT"
                                  placeholder="Digite aqui..."
                                />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Apresentação 360°: Insira a URL 360° do seu imóvel
                                  <button
                                    type="button"
                                    class="btn btn-danger ms-2"
                                    style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    "
                                  >
                                    <i class="fa fa-trash me-2"></i> Remover 360°
                                  </button>
                                </label>
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="url360"
                                  placeholder="Digite aqui..."
                                />
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoImagem()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <p>
                            Envie todas as imagens que mostrem as qualidades do imóvel.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <ul
                              class="nav nav-underline d-flex justify-content-center mb-5"
                            >
                              <li class="nav-item">
                                <a
                                  class="btn btn-outline-dark"
                                  aria-current="page"
                                  href="#"
                                  >FOTOS DO IMÓVEL</a
                                >
                              </li>
                              <li class="nav-item">
                                <a
                                  class="btn btn-outline-dark"
                                  aria-current="page"
                                  href="#"
                                  >PLANTAS DO IMÓVEL</a
                                >
                              </li>
                              <li class="nav-item">
                                <a class="btn btn-outline-dark" href="#"
                                  >FOTOS PRIVADAS</a
                                >
                              </li>
                            </ul>

                            <div class="col-12 text-center">
                              <i class="far fa-images mb-4" style="font-size: 7rem"></i>
                              <h4>Você ainda não enviou nenhuma foto.</h4>

                              <div
                                class="mb-3 d-flex flex-column align-items-center mt-4"
                              >
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Que tal enviar agora?
                                </label>
                                <!-- <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="areaConstruida" placeholder="Digite aqui...">
                                  <span class="input-group-text">m²</span> -->

                                <label for="formFile" class="form-label bg-warning"
                                  ><i class="fa fa-plus me-2"></i> Enviar fotos
                                </label>
                                <input
                                  v-if="!mostrarSkeleton"
                                  class="form-control d-none"
                                  type="file"
                                  id="formFile"
                                  multiple
                                />
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleProximoPublicacao()"
                                  type="button"
                                >
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
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
                          <p>
                            Selecione abaixo para quais portais você deseja enviar este
                            imóvel.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Mostrar imóvel no site?
                                  <p>
                                    <small
                                      >Determine se o imóvel será publicado em seu
                                      site.</small
                                    >
                                  </p>
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectImovelSite"
                                    id="selectImovelSite1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectImovelSite"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectImovelSite1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectImovelSite"
                                    name="selectImovelSite"
                                    id="selectImovelSite2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectImovelSite2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Mostrar na Página Inicial?
                                  <p>
                                    <small
                                      >Defina se aparecerá na sessão de “imóveis em
                                      destaque”.</small
                                    >
                                  </p>
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectPageInit"
                                    id="selectPageInit1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectPageInit"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectPageInit1"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectPageInit"
                                    name="selectPageInit"
                                    id="selectPageInit2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectPageInit2"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="col-6">
                              <label class="form-label mb-3" for="btnradio2">
                                Tarja do imóvel para o site <br />
                                <small
                                  >Escolha a cor e a frase que aparecerão na miniatura do
                                  imóvel.
                                </small>
                              </label>
                              <div class="row">
                                <div class="col-8">
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
                                      Texto da tarja
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      v-if="!mostrarSkeleton"
                                      class="form-control"
                                      v-model="textoTarja"
                                      placeholder="Em construção"
                                    />
                                  </div>
                                </div>
                                <div class="col-4">
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
                                      Cor da tarja
                                    </label>
                                    <input
                                      type="color"
                                      v-if="!mostrarSkeleton"
                                      v-model="corTarja"
                                      class="form-control"
                                      id="exampleColorInput"
                                      value="#563d7c"
                                      title="Escolha a cor"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div class="col-12">
                              <label
                                v-if="!mostrarSkeleton"
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Enviar link da publicação do imóvel para o proprietário?
                              </label>

                              <div class="row">
                                <div class="col-3">
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
                                    </label>

                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                    <div
                                      class="btn-group"
                                      role="group"
                                      aria-label="Basic radio toggle button group"
                                    >
                                      <input
                                        type="radio"
                                        class="btn-check"
                                        name="enviarLinkProprietario"
                                        id="enviarLinkProprietario1"
                                        autocomplete="off"
                                        value="Sim"
                                        v-model="enviarLinkProprietario"
                                      />
                                      <label
                                        class="btn btn-outline-success"
                                        for="enviarLinkProprietario1"
                                        >Sim</label
                                      >

                                      <input
                                        type="radio"
                                        class="btn-check"
                                        value="Não"
                                        v-model="enviarLinkProprietario"
                                        name="enviarLinkProprietario"
                                        id="enviarLinkProprietario2"
                                        autocomplete="off"
                                      />
                                      <label
                                        class="btn btn-outline-danger"
                                        for="enviarLinkProprietario2"
                                        >Não</label
                                      >
                                    </div>
                                  </div>
                                </div>

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
                                      Texto que acompanhará o link do imóvel
                                    </label>

                                    <textarea
                                      class="form-control"
                                      v-if="!mostrarSkeleton"
                                      v-model="apresentacaoImovel"
                                      style="height: 100px"
                                      placeholder="Seu imóvel foi cadastrado em nosso site, e contamos com a sua ajuda para revisar todos os dados de cadastro"
                                    ></textarea>

                                    <div class="row mx-1 mt-3">
                                      <a href="#" class="col-2 py-2 btn btn-success me-2">
                                        <i class="fab fa-whatsapp me-2"></i>Enviar
                                      </a>
                                      <a href="#" class="col-2 py-2 btn btn-dark">
                                        <i class="far fa-envelope me-2"></i>Enviar
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div class="col-12">
                              <label
                                v-if="!mostrarSkeleton"
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Enviar e-mail recorrente para o proprietário?
                              </label>

                              <div class="row">
                                <div class="col-3">
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
                                    </label>

                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                    <div
                                      class="btn-group"
                                      role="group"
                                      aria-label="Basic radio toggle button group"
                                    >
                                      <input
                                        type="radio"
                                        class="btn-check"
                                        name="enviarEmailProprietario"
                                        id="enviarEmailProprietario1"
                                        autocomplete="off"
                                        value="Sim"
                                        v-model="enviarEmailProprietario"
                                      />
                                      <label
                                        class="btn btn-outline-success"
                                        for="enviarEmailProprietario1"
                                        >Sim</label
                                      >

                                      <input
                                        type="radio"
                                        class="btn-check"
                                        value="Não"
                                        v-model="enviarEmailProprietario"
                                        name="enviarEmailProprietario"
                                        id="enviarEmailProprietario2"
                                        autocomplete="off"
                                      />
                                      <label
                                        class="btn btn-outline-danger"
                                        for="enviarEmailProprietario2"
                                        >Não</label
                                      >
                                    </div>
                                  </div>
                                </div>

                                <div class="col-12">
                                  <div class="row">
                                    <div class="col-6">
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
                                          Qual e-mail para envio recorrente?
                                        </label>
                                        <input
                                          type="text"
                                          required
                                          v-if="!mostrarSkeleton"
                                          class="form-control"
                                          v-model="emailProprietario"
                                          placeholder="email@doproprietário"
                                        />
                                      </div>
                                    </div>

                                    <div class="col-6">
                                      <div class="">
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
                                          Qual o período (dias) de envio desejado?
                                        </label>

                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                        <div
                                          class="btn-group"
                                          role="group"
                                          aria-label="Basic radio toggle button group"
                                        >
                                          <input
                                            type="radio"
                                            class="btn-check"
                                            name="periodoEnvio"
                                            id="periodoEnvio1"
                                            autocomplete="off"
                                            value="Sim"
                                            v-model="periodoEnvioperiodoEnvio"
                                          />
                                          <label
                                            class="btn btn-outline-success me-1"
                                            for="periodoEnvio1"
                                            >+30</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoEnvio"
                                            name="periodoEnvio"
                                            id="periodoEnvio2"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDayMiddle me-1"
                                            for="periodoEnvio2"
                                            >+60</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoEnvio"
                                            name="periodoEnvio"
                                            id="periodoEnvio3"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDayMiddle me-1"
                                            for="periodoEnvio3"
                                            >+90</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoEnvio"
                                            name="periodoEnvio"
                                            id="periodoEnvio4"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDayMiddle me-1"
                                            for="periodoEnvio4"
                                            >+120</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoEnvio"
                                            name="periodoEnvio"
                                            id="periodoEnvio5"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDayMiddle me-1"
                                            for="periodoEnvio5"
                                            >+150</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoEnvio"
                                            name="periodoEnvio"
                                            id="periodoEnvio6"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDaySuccess"
                                            for="periodoEnvio6"
                                            >+180</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div class="col-12">
                              <label
                                v-if="!mostrarSkeleton"
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Gostaria de ser notificado para revisar este cadastro?
                              </label>

                              <div class="row">
                                <div class="col-3">
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
                                    </label>

                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                    <div
                                      class="btn-group"
                                      role="group"
                                      aria-label="Basic radio toggle button group"
                                    >
                                      <input
                                        type="radio"
                                        class="btn-check"
                                        name="revisarCadastro"
                                        id="revisarCadastro1"
                                        autocomplete="off"
                                        value="Sim"
                                        v-model="revisarCadastro"
                                      />
                                      <label
                                        class="btn btn-outline-success"
                                        for="revisarCadastro1"
                                        >Sim</label
                                      >

                                      <input
                                        type="radio"
                                        class="btn-check"
                                        value="Não"
                                        v-model="revisarCadastro"
                                        name="revisarCadastro"
                                        id="revisarCadastro2"
                                        autocomplete="off"
                                      />
                                      <label
                                        class="btn btn-outline-danger"
                                        for="revisarCadastro2"
                                        >Não</label
                                      >
                                    </div>
                                  </div>
                                </div>

                                <div class="col-12">
                                  <div class="row">
                                    <div class="col-6">
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
                                          Próxima data de revisão
                                        </label>
                                        <input
                                          type="date"
                                          required
                                          v-if="!mostrarSkeleton"
                                          class="form-control"
                                          v-model="textoTarja"
                                          placeholder=""
                                        />
                                      </div>
                                    </div>

                                    <div class="col-6">
                                      <div class="">
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
                                          Qual o período (dias) de envio desejado?
                                        </label>

                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                        <div
                                          class="btn-group"
                                          role="group"
                                          aria-label="Basic radio toggle button group"
                                        >
                                          <input
                                            type="radio"
                                            class="btn-check"
                                            name="periodoRevisao"
                                            id="periodoRevisao1"
                                            autocomplete="off"
                                            value="Sim"
                                            v-model="periodoRevisao"
                                          />
                                          <label
                                            class="btn btn-outline-success me-1"
                                            for="periodoRevisao1"
                                            >+30</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoRevisao"
                                            name="periodoRevisao"
                                            id="periodoRevisao2"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDayMiddle me-1"
                                            for="periodoRevisao2"
                                            >+60</label
                                          >

                                          <input
                                            type="radio"
                                            class="btn-check"
                                            value="Não"
                                            v-model="periodoRevisao"
                                            name="periodoRevisao"
                                            id="periodoRevisao3"
                                            autocomplete="off"
                                          />
                                          <label
                                            class="btn btn-outline-success selectDaySuccess"
                                            for="periodoRevisao3"
                                            >+90</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  @click="handleAnteriorLocalizacao()"
                                  class="btn btn-secondary"
                                  type="button"
                                >
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                  class="btn btn-success"
                                  @click="handleFinish()"
                                  type="button"
                                >
                                  Finalizar<i
                                    class="fa fa-arrow-right"
                                    aria-hidden="true"
                                  ></i>
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

export default {
  name: "CadImoveisView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      home: "",
      comodos: "",
      inputCondominio: false,
      mostrarMapa: false,
      mostrarStreetV: false,

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
      addProp: false,

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

      // TABINFO
      codigoref: "",
      selectCondominio: "Não",
      condominioEmpreendimento: "",
      selectProprietario: "",
      selectCorretor: "",
      selectAgenciador: "",
      tipoImovel: "",
      perfilImovel: "",
      situacaoImovel: "",
      anoImovel: "",
      incorporacao: "",
      posicaoSolar: "",
      selectTerreno: "",
      proximoMar: "",
      selectAverbado: "Não",
      selectEscritura: "Não",
      selectEsquina: "Não",
      selectMobilia: "Não",

      // TAB COMODOS
      dormitorio: "",
      suite: "",
      banheiro: "",
      garagem: "",
      selectGaragemCobertura: "",
      selectBoxGaragem: "",
      salaTv: "",
      salaJantar: "",
      salaEstar: "",
      lavabo: "",
      areaServico: "",
      cozinha: "",
      closet: "",
      escritorio: "",
      depEmpregada: "",

      // TAB MEDIDAS
      areaConstruida: "",
      areaPrivativa: "",
      areaTotal: "",

      // TAB PREÇOS
      tipoNegocio: "",
      precoImovel: "",
      precoNoSite: "Sim",
      precoIptu: "",
      periodoIptu: "Anual",
      precoCondominio: "",
      estaFinanciado: "Não",
      aceitaFinanciamento: "Não",
      mCasaMVida: "",
      taxasTotal: "",
      taxasDescricao: "",
      aceitaPermuta: "Não",
      permutaDescricao: "",

      //TAB CARACTERISTICA
      caracteristicaImovel: false,

      // TAB LOCALIZAÇÃO
      buscarCEP: "",
      selectPais: "",
      selectEstado: "",
      selectCidade: "",
      selectBairro: "",
      selectZona: "",
      logradouro: "",
      nLogradouro: "",
      complemento: "",
      idUnidade: "",
      selectAndar: "",
      undPorAndar: "",
      totalAndares: "",
      totalTorres: "",
      mostrarAndar: "Não",
      mostrarNUnidade: "Não",
      mostrarLogradouro: "Não",
      mostrarBairro: "Não",
      mostrarComplemento: "Não",
      mostrarNumero: "Não",
      mostrarNCondo: "Não",
      mapaCondo: "Não",
      selectMapSite: "Não",
      selectLocalSite: "Não",
      mapaStreetV: "Não",
      selectStreetVSite: "Não",

      // TAB PROXIMIDADES
      proximidades: false,

      // TAB DESCRIÇÃO
      titleImovel: "",
      apresentacaoImovel: "",

      // TAB COMPLEMENTOS
      urlYT: "",
      url360: "",

      // TAB IMAGEM

      // TAB PUBLICAÇÃO
      selectImovelSite: "Sim",
      selectPageInit: "Sim",
      textoTarja: "Em construção",
      corTarja: "#563d7c",
      enviarLinkProprietario: "Não",
      emailProprietario: "",
      periodoEnvio: "+30",
      revisarCadastro: "Não",
      proximaDataRevisao: "",
      periodoRevisao: "+30",
    };
  },

  //Aqui está o MOSTRA e ESCONDE dos INPUTS do dashboard
  watch: {
    selectCondominio(newValue) {
      if (newValue == "Sim") {
        this.inputCondominio = true;
      } else {
        this.inputCondominio = false;
      }
    },

    mapaCondo(newValue) {
      if (newValue == "Sim") {
        this.mostrarMapa = true;
      } else {
        this.mostrarMapa = false;
      }
    },

    mapaStreetV(newValue) {
      if (newValue == "Sim") {
        this.mostrarStreetV = true;
      } else {
        this.mostrarStreetV = false;
      }
    },

    // INFO
    selectAverbado(y) {
      this.selectAverbado = y;
      console.log(this.selectAverbado);
    },
    selectEscritura(y) {
      this.selectEscritura = y;
      console.log(this.selectEscritura);
    },
    selectEsquina(y) {
      this.selectEsquina = y;
      console.log(this.selectEsquina);
    },
    selectMobilia(y) {
      this.selectMobilia = y;
      console.log(this.selectMobilia);
    },
    selectTerreno(y) {
      this.selectTerreno = y;
      console.log(this.selectTerreno);
    },

    // COMODOS
    selectGaragemCobertura(y) {
      this.selectGaragemCobertura = y;
      console.log(this.selectGaragemCobertura);
    },
    selectBoxGaragem(y) {
      this.selectBoxGaragem = y;
      console.log(this.selectBoxGaragem);
    },

    // PREÇOS
    precoNoSite(y) {
      this.precoNoSite = y;
      console.log(this.precoNoSite);
    },
    periodoIptu(y) {
      this.periodoIptu = y;
      console.log(this.periodoIptu);
    },
    estaFinanciado(y) {
      this.estaFinanciado = y;
      console.log(this.estaFinanciado);
    },
    aceitaFinanciamento(y) {
      this.aceitaFinanciamento = y;
      console.log(this.aceitaFinanciamento);
    },
    mCasaMVida(y) {
      this.mCasaMVida = y;
      console.log(this.mCasaMVida);
    },
    aceitaPermuta(y) {
      this.aceitaPermuta = y;
      console.log(this.aceitaPermuta);
    },

    // LOCALIZAÇÃO
    mostrarAndar(y) {
      this.mostrarAndar = y;
      console.log(this.mostrarAndar);
    },
    mostrarNUnidade(y) {
      this.mostrarNUnidade = y;
      console.log(this.mostrarNUnidade);
    },
    mostrarLogradouro(y) {
      this.mostrarLogradouro = y;
      console.log(this.mostrarLogradouro);
    },
    mostrarBairro(y) {
      this.mostrarBairro = y;
      console.log(this.mostrarBairro);
    },
    mostrarComplemento(y) {
      this.mostrarComplemento = y;
      console.log(this.mostrarComplemento);
    },
    mostrarNumero(y) {
      this.mostrarNumero = y;
      console.log(this.mostrarNumero);
    },
    mostrarNCondo(y) {
      this.mostrarNCondo = y;
      console.log(this.mostrarNCondo);
    },
    selectMapSite(y) {
      this.selectMapSite = y;
      console.log(this.selectMapSite);
    },
    selectLocalSite(y) {
      this.selectLocalSite = y;
      console.log(this.selectLocalSite);
    },
    selectStreetVSite(y) {
      this.selectStreetVSite = y;
      console.log(this.selectStreetVSite);
    },
  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);
  },

  methods: {
    handleprop() {
      this.addProp = true;
      this.infoTab = false;
    },

    handlepropclose() {
      this.addProp = false;
      this.infoTab = true;
    },

    //Ação do botão Proximo de cada tab
    handleProximoComodo() {
      this.infoTab = false;
      this.comodosTab = true;
      this.stepInfo = true;
    },
    handleProximoMedida() {
      this.comodosTab = false;
      this.medidaTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
    },
    handleProximoPreco() {
      this.medidaTab = false;
      this.precoTab = true;
      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
    },
    handleProximoCaracteristica() {
      this.precoTab = false;
      this.caracteristicaTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
    },
    handleProximoLocalizacao() {
      this.caracteristicaTab = false;
      this.localizacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
    },
    handleProximoProximidades() {
      this.localizacaoTab = false;
      this.proximidadesTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
    },
    handleProximoDescricao() {
      this.proximidadesTab = false;
      this.descricaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
    },
    handleProximoComplemento() {
      this.descricaoTab = false;
      this.complementoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
    },
    handleProximoImagem() {
      this.complementoTab = false;
      this.imagemTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
    },
    handleProximoPublicacao() {
      this.imagemTab = false;
      this.publicacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
      this.stepImagens = true;
    },

    //Evento de enviar para a API
    handleProximoFinish() {
      this.imagemTab = false;
      this.publicacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
      this.stepImagens = true;
      this.stepPublicacao = true;
    },

    //Evento do botão Voltar (Imcompleto)
    handleAnteriorInfo() {
      this.infoTab = true;
      this.comodosTab = false;
    },
    handleAnteriorComodos() {
      this.comodosTab = true;
      this.medidaTab = false;
    },
    handleAnteriorPreco() {
      this.precoTab = false;
      this.medidaTab = true;
    },
  },
};
</script>
