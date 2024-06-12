<template>
  <div class="wrapper">

    <Sidebar />
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">

          <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
          <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Construtora</h1>

          <div class="col-xl-12 mt-2" v-if="progressView">
            <div class="w-100">
              <div class="row">
                <div class="row" style="margin-left: 2%; margin-top: 2%; margin-bottom: 3%;">
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Perfil</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconPerfil.png" alt="">
                          <div v-if="perfil === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="perfil === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
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
                          <h6 class="text-center"><small>Qualidade 9/10</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconStar.png" alt="">
                          <div v-if="capa === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="capa === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
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
                          <img class="iconProgress" src="../../../assets/images/icons/iconImovel.png" alt="">

                          <div v-if="imovel === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="imovel === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
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
                          <img class="iconProgress" src="../../../assets/images/icons/iconPublish.png" alt="">
                          <div v-if="publicacao === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="publicacao === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
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
                      <h1 class="mt-1 mb-3">{{ totalImovel }}</h1>
                      <div class="mb-0">
                        <span class="text-danger">
                          <i class="mdi mdi-arrow-bottom-right"></i>
                        </span>
                        <span class="text-muted">Estimativa Geral</span>
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
                            <i class="align-middle" data-feather="grid"></i>
                          </div>
                        </div>
                      </div>
                      <h1 class="mt-1 mb-3">{{ totalCondominios }}</h1>
                      <div class="mb-0">
                        <span class="text-danger">
                          <i class="mdi mdi-arrow-bottom-right"></i>
                        </span>
                        <span class="text-muted">Estimativa Geral</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          </div>
          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-xl-5 col-xxl-5">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0"><i class="fa fa-clock"></i> Seus ultimos imóveis
                        cadastrados</h5>
                    </div>
                    <div class="card-body py-3">
                      <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                        aria-describedby="passwordHelpBlock" v-model="searchImovel" />
                      <div class="mt-5" v-for="item in imoveisOnCurrentPage" :key="item.id_imovel">

                        <a class="row" style="text-decoration: none;">
                          <div class="col-3">
                            <img class="thumbImovel" :src="`https://zonu.com.br/api${item.fotos[0].foto}`" alt="">
                          </div>

                          <div class="col-9" style="margin-left: -10px;">
                            <h5><i class="fa fa-building"></i> <a href="#" style="text-decoration: none; color: #000;"
                                data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`"><strong>{{
                                  item.descricao.titulo }}</strong></a> <span class="badge text-bg-success">{{
                                    item.preco.tipo_negocio }}</span><a data-bs-toggle="modal"
                                :data-bs-target="`#exampleModal${item.id_imovel}`" style="float: inline-end;"
                                class="text-danger"><i class="fa fa-trash"></i></a>
                            </h5>
                            <h5 class="text-info"><strong>{{ formatCurrency(item.preco.preco_imovel) }}</strong><a
                                data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`"
                                style="float: inline-end;" class="text-info"><i class="fa fa-eye"></i></a></h5>
                            <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                {{ item.localizacao.logradouro }}, {{ item.localizacao.numero }} | {{
                                  item.localizacao.bairro }}, {{ item.localizacao.cidade }}</small> <a
                                data-bs-toggle="modal" :data-bs-target="`#modalEditImovel${item.id_imovel}`"
                                style="float: inline-end;" class="text-warning"><i class="fa fa-edit"></i></a></h5>
                            <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                Atualizado: {{ formatarData(item.updatedAt) }}</small> <i v-for="star in estrelas"
                                :key="star" class="text-warning fa fa-star"></i> <span class="text-success"
                                style="float: inline-end; font-weight: 900;">
                                {{ qualidade }}</span></h5>
                          </div>
                        </a>

                        <div class="modal fade" :id="`exampleModal${item.id_imovel}`" tabindex="-1"
                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-trash"></i> Apagar
                                  imóvel</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h3 class="text-center">Você tem certeza que deseja apagar este imóvel?</h3>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button @click="handledDelete(item.id_imovel)" type="button" class="btn btn-success"><i
                                    class="fa fa-trash"></i> Sim, apagar</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr class="mt-3">
                        <!-- Modal -->
                        <div class="modal fade" :id="`modalImovel${item.id_imovel}`" tabindex="-1"
                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-building"></i> {{
                                  item.descricao.titulo }}
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <nav>
                                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                      aria-selected="true"><i class="fa fa-bell" aria-hidden="true"></i>

                                      Informações do imóvel </button>

                                    <button class="nav-link" id="nav-comentario-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-comentario" type="button" role="tab"
                                      aria-controls="nav-comentario" aria-selected="false">Anotações <small><i
                                          class="fa fa-file"></i></small></button>

                                    <button class="nav-link" id="nav-documentos-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-documentos" type="button" role="tab"
                                      aria-controls="nav-documentos" aria-selected="false">Documentos <small><i
                                          class="fa fa-folder"></i></small></button>

                                  </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab" tabindex="0">
                                    <div class="container">
                                      <div class="row">
                                        <div class="col-md-2 mt-4" v-for="foto in item.fotos" :key="foto.id_imagem">
                                          <img :src="`https://zonu.com.br/api${foto.foto}`"
                                            :alt="`Foto ${foto.id_imagem} do Imóvel ${item.id_imovel}`"
                                            class="thumbnail-modal">
                                        </div>
                                      </div>

                                      <div class="row mt-4">
                                        <div class="col-md-2">
                                          <h5><strong><i class="fa fa-money" aria-hidden="true"></i> Preço <small
                                                style="font-size: 10px;" class="text-secondary">({{
                                                  item.preco.tipo_negocio }})</small></strong>
                                          </h5>
                                          <h4 class="text-success"><strong>{{ item.preco.preco_imovel }} </strong>
                                          </h4>
                                        </div>
                                        <div class="col-md-2">
                                          <h5><strong><i class="fa fa-money" aria-hidden="true"></i> Condomínio</strong>
                                          </h5>
                                          <h4 class="text-success"><strong>{{ item.preco.preco_condominio }}</strong>
                                          </h4>
                                        </div>
                                        <div class="col-md-2">
                                          <h5><strong><i class="fa fa-tag" aria-hidden="true"></i>
                                              Taxas <small style="font-size: 10px;"
                                                class="text-secondary">(Mensal)</small></strong>
                                          </h5>
                                          <h4 class="text-success"><strong>{{ item.preco.total_mensal_taxas }}</strong>
                                          </h4>
                                        </div>
                                        <hr class="mt-3">
                                      </div>

                                      <div class="row mt-3">
                                        <div class="col-md-8">
                                          <h6 style="font-size: 12px;"><strong><i class="fa fa-building-o"
                                                aria-hidden="true"></i>
                                              Cômodos</strong>
                                          </h6>
                                          <div class="row mt-3 ml-2">
                                            <div class="col-md-3">
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Dormitórios: {{ item.comodos.dormitorio }}</strong>
                                              </h6>
                                              <h6 v-if="item.comodos.suite !== 0"
                                                style="font-size: 12px; text-align: right;">
                                                <strong>Sendo Suites: {{ item.comodos.suite }}</strong>
                                              </h6>
                                              <h6 v-if="item.comodos.suite == 0"
                                                style="font-size: 12px; text-align: right;">
                                                <strong>Sendo Suites: Não</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Banheiros: {{ item.comodos.banheiro }}</strong>
                                              </h6>
                                              <h6 v-if="item.comodos.garagem == 0"
                                                style="font-size: 12px; text-align: right;">
                                                <strong>Garagens: Não</strong>
                                              </h6>
                                              <h6 v-if="item.comodos.garagem !== 0"
                                                style="font-size: 12px; text-align: right;">
                                                <strong>Garagens: {{ item.comodos.garagem }}</strong>
                                              </h6>
                                            </div>
                                            <div class="col-md-3">
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Área de Serviço: {{ item.comodos.area_servico }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Banheiros: {{ item.comodos.banheiro }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Dep. empregada: {{ item.comodos.casa_empregada }}</strong>
                                              </h6>

                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Box Garagem: {{ item.comodos.garagem_box }}</strong>
                                              </h6>
                                            </div>
                                            <div class="col-md-2">
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Copa: {{ item.comodos.copa }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Cozinha: {{ item.comodos.cozinha }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Escritório: {{ item.comodos.escritorio }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Garagem coberta: {{ item.comodos.garagem_coberta }}</strong>
                                              </h6>

                                            </div>
                                            <div class="col-md-2">
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Closet: {{ item.comodos.closet }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Lavabo: {{ item.comodos.lavabo }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Sl de estar: {{ item.comodos.sala_estar }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Sl de jantar: {{ item.comodos.sala_jantar }}</strong>
                                              </h6>
                                            </div>

                                            <div class="col-md-2">
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Sala de TV: {{ item.comodos.sala_tv }}</strong>
                                              </h6>
                                              <h6 style="font-size: 12px; text-align: right;">
                                                <strong>Dormitórios com suites: {{ item.comodos.suite }}</strong>
                                              </h6>
                                            </div>
                                          </div>

                                        </div>
                                        <div class="col-md-1 mt-3">
                                          <div style="border-left: 1px solid #0001; height: 100px; ">
                                          </div>
                                        </div>
                                        <div class="col-md-2">
                                          <h6 style="font-size: 12px; margin-left: -70px; ">
                                            <strong><i class="fa fa-ruler" aria-hidden="true"></i> Medida das
                                              áreas</strong>
                                          </h6>
                                          <div class="row mt-3" style="margin-left: -50px;">
                                            <div class="col-md-12">
                                              <h6 style="font-size: 12px;">
                                                <strong>Total: {{ item.medidas.area_total }} m²</strong>
                                              </h6>
                                              <h6 style="font-size: 12px;">
                                                <strong>Construida: {{ item.medidas.area_contruida }} m²</strong>
                                              </h6>
                                              <h6 style="font-size: 12px;">
                                                <strong>Privativa: {{ item.medidas.area_privativa }} m²</strong>
                                              </h6>
                                              <h6 style="font-size: 12px;">
                                                <strong>Preço m²: R$ {{ item.medidas.media_metro_quadrado }}</strong>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>

                                        <hr class="mt-3">

                                        <div class="col-md-7">
                                          <h6 style="font-size: 12px;"><strong><i class="fa fa-check-square"
                                                aria-hidden="true"></i> Caracteística do
                                              imóvel</strong>
                                          </h6>
                                          <div class="row mt-3">
                                            <div class="col-md-2" v-for="dado in item.caracteristicas">
                                              <h6>
                                                <span><i class="fa fa-check"></i> <small>{{
                                                  dado.detalhesCaracteristica.nome_caracteristica }}</small></span>
                                              </h6>
                                            </div>
                                          </div>
                                          <hr>
                                        </div>

                                        <div class="col-md-5">
                                          <h6 style="font-size: 12px;"><strong><i class="fa fa-edit"
                                                aria-hidden="true"></i>
                                              Detalhes do
                                              imóvel</strong>
                                          </h6>
                                          <div class="row mt-3">
                                            <div class="col-md-2">
                                              <div class="avatar-null img-fluid rounded me-1" alt="Avatar">{{ iniciais
                                                }}</div>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                              <h6 style="font-size: 12px;">
                                                <strong>Responsável</strong>
                                              </h6>
                                              <h6 style="font-size: 12px;">
                                                {{ nome }} {{ sobrenome }}
                                              </h6>
                                            </div>
                                            <div class="col-md-1">
                                              <div style="border-left: 1px solid #0001; height: 40px; ">
                                              </div>
                                            </div>
                                            <div class="col-md-3" style="margin-top: -10px;">
                                              <img :src="item.qrcode[0].qrcode" width="50" alt="">
                                            </div>
                                          </div>

                                        </div>

                                        <div class="col-md-7" style="margin-top: 4%;">
                                          <h6 style="font-size: 12px;">
                                            <strong><i class="fa fa-check-square" aria-hidden="true"></i>
                                              Proximidades</strong>
                                          </h6>
                                          <div class="row mt-3">
                                            <div class="col-md-2" v-for="dado in item.proximidades">
                                              <h6>
                                                <span><i class="fa fa-check"></i><small>
                                                    {{ dado.detalhesProximidade.nome_proximidade }}</small> </span>
                                              </h6>
                                            </div>
                                          </div>
                                          <hr>
                                        </div>

                                        <div class="col-md-7" style="margin-top: 2%;">
                                          <h6 style="font-size: 12px;">
                                            <strong><i class="fa fa-edit" aria-hidden="true"></i> Descrição do
                                              Imóvel</strong>
                                          </h6>
                                          <div class="row mt-3">
                                            {{ item.descricao.apresentacao }}
                                          </div>
                                        </div>

                                        <div class="col-md-5" style="margin-top: -150px;">

                                          <table class="table">
                                            <tbody>
                                              <tr>
                                                <td style="background-color: #0001;">
                                                  <strong><small>Ano da
                                                      construção:</small></strong>
                                                </td>
                                                <td style="background-color: #0001;">
                                                  <small>{{ item.info.ano_construcao }}</small>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td><strong><small>Incorporação:</small></strong></td>
                                                <td><small>{{ item.info.incorporacao }}</small></td>
                                              </tr>
                                              <tr>
                                                <td style="background-color: #0001;">
                                                  <strong><small>Situação do Imóvel:</small></strong>
                                                </td>
                                                <td style="background-color: #0001;">
                                                  <small>{{ item.info.situacao_imovel }}</small>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td><strong><small>Esquina:</small></strong>
                                                </td>
                                                <td><small>{{ item.info.esquina }}</small></td>
                                              </tr>
                                              <tr>
                                                <td style="background-color: #0001;">
                                                  <strong><small>Tem
                                                      Financiamento:</small></strong>
                                                </td>
                                                <td style="background-color: #0001;">
                                                  <small>{{ item.preco.financiado }}</small>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td><strong><small>Aceita
                                                      financiamento:</small></strong>
                                                </td>
                                                <td><small>{{ item.preco.aceita_financiamento }}</small></td>
                                              </tr>
                                              <tr>
                                                <td style="background-color: #0001;">
                                                  <strong><small>Minha Casa Minha
                                                      Vida:</small></strong>
                                                </td>
                                                <td style="background-color: #0001;">
                                                  <small>{{ item.preco.minhacasa_minhavida }}</small>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td><strong><small>Aceita
                                                      permuta:</small></strong></td>
                                                <td><small>{{ item.preco.aceita_permuta }}</small></td>
                                              </tr>

                                              <div class="col-md-12 mt-3">

                                              </div>

                                            </tbody>
                                          </table>

                                          <div class="mt-3">
                                            <h6 style="font-size: 12px;">
                                              <strong>Qualidade do anúncio <span class="badge text-bg-success">{{
                                                qualidadeProgress }}% </span>
                                                &nbsp;</strong>
                                              <small> {{ msgQualidade }} <i v-for="star in estrelas" :key="star"
                                                  class="text-warning fa fa-star"></i></small>
                                            </h6>
                                            <div class="progress" role="progressbar" aria-label="Success example"
                                              :aria-valuenow="qualidadeProgress" aria-valuemin="0" aria-valuemax="100">
                                              <div class="progress-bar bg-success"
                                                :style="{ width: qualidadeProgress + '%' }"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="tab-pane fade show" id="nav-documentos" role="tabpanel"
                                    aria-labelledby="nav-documentos-tab" tabindex="0">
                                    <div class="container">
                                      <div class="row mt-3">
                                        <div class="col-md-8">
                                          <h6 style="font-size: 15px;"><strong><i class="fa fa-link"
                                                aria-hidden="true"></i> Links </strong>
                                          </h6>
                                          <div class="row mt-3">
                                            <div class="col-md-3">
                                              <h6 style="font-size: 12px;">
                                                <strong>Drive: <a :href="item.complemento.link_drive" target="_blank">{{
                                                  item.complemento.link_drive }}</a></strong>
                                              </h6>

                                              <h6 style="font-size: 12px;">
                                                <strong>YouTube: <a :href="item.complemento.link_youtube"
                                                    target="_blank">{{ item.complemento.link_youtube }}</a></strong>
                                              </h6>

                                              <h6 style="font-size: 12px;">
                                                <strong>Apresentação: <a :href="item.complemento.link_apresentacao"
                                                    target="_blank">{{ item.complemento.link_apresentacao
                                                    }}</a></strong>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="tab-pane fade show" id="nav-comentario" role="tabpanel"
                                    aria-labelledby="nav-comentario-tab" tabindex="0">
                                    <div class="container">
                                      <div class="row mt-3">
                                        <div class="col-md-12">
                                          <h6 style="font-size: 15px;"><strong><i class="fa fa-list"
                                                aria-hidden="true"></i> Faça aqui as anotações sobre este imóvel
                                            </strong>
                                          </h6>
                                          <div class="row mt-3">
                                            <div class="col-md-12">
                                              <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2" style="height: 300px"></textarea>
                                                <label for="floatingTextarea2"></label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                          <button class="btn btn-success me-md-2"
                                            @click="handledComentario(item.id_imovel)" type="button">Salvar
                                            anotação</button>
                                        </div>

                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- fazer esse modal funcionar -->
                        <div class="modal fade" :id="`modalEditImovel${item.id_imovel}`" tabindex="-1"
                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                          {{ console.log(item) }}
                          <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-file"></i>
                                          Resumo</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">

                                        <div v-if="msgError" class="alert alert-danger mt-4 mb-4"
                                          style="margin-top: -20px; margin-bottom: 10px;" role="alert">
                                          <strong><i class="fa fa-ban"></i> Desculpa, houve um erro para processar o
                                            seu
                                            pedido. Tente novamente
                                            mais tarde</strong>
                                        </div>

                                        <div v-if="msgSucesso" class="alert alert-success mt-4 mb-4"
                                          style="margin-top: -20px; margin-bottom: 10px;" role="alert">
                                          <strong><i class="fa fa-check"></i> Sucesso! Imóvel cadastrado com
                                            sucesso!</strong>
                                        </div>


                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                              data-bs-target="#info-tab-pane" type="button" role="tab"
                                              aria-controls="info-tab-pane" aria-selected="true"><small>Info</small>
                                            </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="comodos-tab" data-bs-toggle="tab"
                                              data-bs-target="#comodos-tab-pane" type="button" role="tab"
                                              aria-controls="comodos-tab-pane"
                                              aria-selected="false"><small>Cômodos</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="comodos-tab" data-bs-toggle="tab"
                                              data-bs-target="#medidas-tab-pane" type="button" role="tab"
                                              aria-controls="medidas-tab-pane" aria-selected="false"><small>Medidas &
                                                Preço</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="caracteristica-tab" data-bs-toggle="tab"
                                              data-bs-target="#caracteristica-tab-pane" type="button" role="tab"
                                              aria-controls="caracteristica-tab-pane"
                                              aria-selected="false"><small>Características</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="localizacao-tab" data-bs-toggle="tab"
                                              data-bs-target="#localizacao-tab-pane" type="button" role="tab"
                                              aria-controls="localizacao-tab-pane"
                                              aria-selected="false"><small>Localização</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="proximidades-tab" data-bs-toggle="tab"
                                              data-bs-target="#proximidades-tab-pane" type="button" role="tab"
                                              aria-controls="proximidades-tab-pane"
                                              aria-selected="false"><small>Proximidades</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="descricao-tab" data-bs-toggle="tab"
                                              data-bs-target="#descricao-tab-pane" type="button" role="tab"
                                              aria-controls="descricao-tab-pane"
                                              aria-selected="false"><small>Descrição</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="complementos-tab" data-bs-toggle="tab"
                                              data-bs-target="#complementos-tab-pane" type="button" role="tab"
                                              aria-controls="complementos-tab-pane"
                                              aria-selected="false"><small>Complementos</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="images-tab" data-bs-toggle="tab"
                                              data-bs-target="#images-tab-pane" type="button" role="tab"
                                              aria-controls="images-tab-pane"
                                              aria-selected="false"><small>Imagens</small> </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="publicar-tab" data-bs-toggle="tab"
                                              data-bs-target="#publicar-tab-pane" type="button" role="tab"
                                              aria-controls="publicar-tab-pane"
                                              aria-selected="false"><small>Publicação</small> </button>
                                          </li>

                                        </ul>



                                        <div class="tab-content" id="myTabContent">
                                          <div class="tab-pane fade show active" id="info-tab-pane" role="tabpanel"
                                            aria-labelledby="info-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Código de
                                                      referência
                                                      <small class="text-danger">*</small>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="item.info.cod_referencia"
                                                      placeholder="Digite aqui..." />

                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
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

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectCondominio"
                                                        id="selectCondominio1" autocomplete="off" value="Sim"
                                                        v-model="selectCondominio" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectCondominio1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectCondominio" name="selectCondominio"
                                                        id="selectCondominio2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectCondominio2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Condomínio/empreendimento?
                                                      <small class="text-danger">* </small>
                                                      <a href="/novo-condominio" type="button" class="ms-2 text-success"
                                                        style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-plus"></i> Adicionar condominio
                                                      </a>
                                                    </label>

                                                    <select required v-if="!mostrarSkeleton"
                                                      class="form-control form-select"
                                                      v-model="condominioEmpreendimento">
                                                      <option selected disabled>Selecione</option>

                                                      <option v-for="condominio in condominios"
                                                        :value="condominio.id_condominio">{{
                                                          condominio.nome_condominio }}</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Tipo/Subtipo
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="tipoImovel">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Casa">Casa</option>
                                                      <option value="Apartamento">Apartamento</option>
                                                      <option value="Flat">Flat</option>
                                                      <option value="Terreno">Terreno</option>
                                                      <option value="Sítio">Sítio</option>
                                                      <option value="Haras">Haras</option>
                                                      <option value="Kitnet">Kitnet</option>
                                                      <option value="Fazenda">Fazenda</option>
                                                      <option value="Galpão">Galpão</option>
                                                      <option value="Sala Comercial">Sala Comercial</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Perfil do
                                                      imóvel
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="perfilImovel">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Residêncial">Residêncial</option>
                                                      <option value="Comercial">Comercial</option>
                                                      <option value="Industrial">Industrial</option>
                                                      <option value="Rural">Rural</option>
                                                      <option value="Temporada">Temporada</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Situação
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="situacaoImovel">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Pronto pra morar">Pronto pra morar</option>
                                                      <option value="Em construção">Em construção</option>
                                                      <option value="Lançamento">Lançamento</option>
                                                      <option value="Novo">Novo</option>
                                                      <option value="Usado">Usado</option>

                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Ano da
                                                      construção
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" placeholder="Ex.: 2015"
                                                      v-model="anoImovel" />

                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Incorporação</label>
                                                    <input type="number" v-if="!mostrarSkeleton" class="form-control"
                                                      placeholder="Digite..." v-model="incorporacao" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Posição Solar
                                                      <small class="text-danger">* </small>
                                                    </label>
                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="posicaoSolar">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Norte">Norte</option>
                                                      <option value="Sul">Sul</option>
                                                      <option value="Leste">Leste</option>
                                                      <option value="Oeste">Oeste</option>
                                                      <option value="Sudeste">Sudeste</option>
                                                      <option value="Nordeste">Nordeste</option>
                                                      <option value="Sudoeste">Sudoeste</option>
                                                      <option value="Noroeste">Noroeste</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Terreno
                                                      <small class="text-danger">* </small>
                                                    </label>
                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" id="btnTerreno1"
                                                        autocomplete="off" value="Plano" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno1">Plano</label>

                                                      <input type="radio" class="btn-check" id="btnTerreno2"
                                                        autocomplete="off" value="Aclive" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno2">Aclive</label>

                                                      <input type="radio" class="btn-check" id="btnTerreno3"
                                                        autocomplete="off" value="Declive" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno3">Declive</label>
                                                    </div>
                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Próximo ao
                                                      mar?<small class="text-danger">* </small>
                                                    </label>
                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="proximoMar">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Vista para o mar">Vista para o mar</option>
                                                      <option value="Frente para o mar">Frente para o mar</option>
                                                      <option value="Quadra do mar">Quadra do mar</option>
                                                      <option value="Proximo ao mar">Proximo ao mar</option>
                                                      <option value="Não">Não</option>

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

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectAverbado"
                                                        id="selectAverbado1" autocomplete="off" value="Sim"
                                                        v-model="selectAverbado" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectAverbado1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectAverbado" name="selectAverbado"
                                                        id="selectAverbado2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectAverbado2">Não</label>
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

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectEscritura"
                                                        id="selectEscritura1" autocomplete="off" value="Sim"
                                                        v-model="selectEscritura" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectEscritura1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectEscritura" name="selectEscritura"
                                                        id="selectEscritura2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectEscritura2">Não</label>
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

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectEsquina"
                                                        id="selectEsquina1" autocomplete="off" value="Sim"
                                                        v-model="selectEsquina" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectEsquina1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectEsquina" name="selectEsquina" id="selectEsquina2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectEsquina2">Não</label>
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

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectMobilia"
                                                        id="selectMobilia1" autocomplete="off" value="Sim"
                                                        v-model="selectMobilia" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectMobilia1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectMobilia" name="selectMobilia" id="selectMobilia2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectMobilia2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="comodos-tab-pane" role="tabpanel"
                                            aria-labelledby="comodos-tab" tabindex="0">
                                            <div>
                                              <!-- Insira o HTML form aqui de acordo com o TecImob -->
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Dormitório
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="dormitorio"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Suíte
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="suite"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Banheiro
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="banheiro"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Garagem
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="garagem"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Garagem
                                                      coberta?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        name="garagemCoberta" id="selectGaragemCobertura1"
                                                        autocomplete="off" value="Sim"
                                                        v-model="selectGaragemCobertura" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                                        for="selectGaragemCobertura1">Sim</label>

                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        value="Não" v-model="selectGaragemCobertura"
                                                        name="garagemCoberta" id="selectGaragemCobertura2"
                                                        autocomplete="off" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                                        for="selectGaragemCobertura2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Possui box na
                                                      garagem?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        name="boxGaragem" id="boxGaragemY" autocomplete="off"
                                                        value="Sim" v-model="selectBoxGaragem" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                                        for="boxGaragemY">Sim</label>

                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        value="Não" v-model="selectBoxGaragem" name="boxGaragem"
                                                        id="boxGaragemN" autocomplete="off" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                                        for="boxGaragemN">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de TV
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaTv"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de jantar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaJantar"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de estar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaEstar"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Lavabo
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="lavabo"
                                                      placeholder="Digite a quantidade" />
                                                  </div>

                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Área de serviço
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="areaServico"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Cozinha
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="cozinha"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Closet
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="closet"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Escritório
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="escritorio"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Dependência para empregada
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="depEmpregada"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Copa
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaCopa"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="medidas-tab-pane" role="tabpanel"
                                            aria-labelledby="medidas-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaConstruida"
                                                      class="form-label">
                                                      Área Construída
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaConstruida"
                                                        placeholder="Digite aqui..."
                                                        @input="aplicaMascaraMedida('areaConstruida')" />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaPrivativa"
                                                      class="form-label">
                                                      Área Privativa
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaPrivativa"
                                                        placeholder="Digite aqui..."
                                                        @input="aplicaMascaraMedida('areaPrivativa')" />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaTotal" class="form-label">
                                                      Área Total
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaTotal" disabled
                                                        placeholder="Aguardando..." />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                              </div>


                                            </div>

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Tipo do negócio
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="tipoNegocio">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Aluguel">Aluguel</option>
                                                      <option value="Venda">Venda</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço Imóvel
                                                    </label>
                                                    <div class="input-group">
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">R$</span>
                                                      <input type="text" @input="aplicaMascaraDinheiroPrecoImovel"
                                                        @blur="aplicaMascaraDinheiroPrecoImovel" required
                                                        v-if="!mostrarSkeleton" class="form-control"
                                                        v-model="precoImovel" placeholder="R$ 0,00" />

                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar preço no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="precoNoSite"
                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                        v-model="precoNoSite" />
                                                      <label class="btn btn-outline-success" for="btnradio1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="precoNoSite" name="precoNoSite" id="btnradio2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger" for="btnradio2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div v-if="textoLugarPrecoView" class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar no lugar do preço:
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="textoLugarPreco"
                                                      placeholder="Texto exemplo: Consulte" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço do IPTU
                                                    </label>
                                                    <input type="text" @input="aplicaMascaraDinheiroPrecoIptu"
                                                      @blur="aplicaMascaraDinheiroPrecoIptu" required
                                                      v-if="!mostrarSkeleton" class="form-control" v-model="precoIptu"
                                                      placeholder="R$ 0,00" />
                                                  </div>
                                                </div>

                                                <div class="col-3" v-if="tipoNegocio === 'Aluguel'">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Período
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="periodo" id="periodo1"
                                                        autocomplete="off" value="Anual" v-model="periodoIptu" />
                                                      <label class="btn btn-outline-success"
                                                        for="periodo1">Anual</label>

                                                      <input type="radio" class="btn-check" value="Mensal"
                                                        v-model="periodoIptu" name="periodo" id="periodo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="periodo2">Mensal</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço Condomínio
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="precoCondominio"
                                                      @input="aplicaMascaraDinheiroPrecoCondominio"
                                                      @blur="aplicaMascaraDinheiroPrecoCondominio"
                                                      placeholder="R$ 0,00" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Está financiado?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="estaFinanciado"
                                                        id="estaFinanciado1" autocomplete="off" value="Sim"
                                                        v-model="estaFinanciado" />
                                                      <label class="btn btn-outline-success"
                                                        for="estaFinanciado1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="estaFinanciado" name="estaFinanciado"
                                                        id="estaFinanciado2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="estaFinanciado2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Aceita financiamento?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="aceitaFinanciamento"
                                                        id="aceitaFinanciamento1" autocomplete="off" value="Sim"
                                                        v-model="aceitaFinanciamento" />
                                                      <label class="btn btn-outline-success"
                                                        for="aceitaFinanciamento1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="aceitaFinanciamento" name="aceitaFinanciamento"
                                                        id="aceitaFinanciamento2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="aceitaFinanciamento2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Minha Casa Minha Vida?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mCasaMVida"
                                                        id="mCasaMVida1" autocomplete="off" value="Sim"
                                                        v-model="mCasaMVida" />
                                                      <label class="btn btn-outline-success"
                                                        for="mCasaMVida1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mCasaMVida" name="mCasaMVida" id="mCasaMVida2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mCasaMVida2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total mensal em taxas (se houver)
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="taxasTotal" placeholder="R$ 0,00"
                                                      @input="aplicaMascaraDinheiroTotalTaxas"
                                                      @blur="aplicaMascaraDinheiroTotalTaxas" />
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Descrição das Taxas
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="taxasDescricao"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Aceita permuta?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="aceitaPermuta"
                                                        id="aceitaPermuta1" autocomplete="off" value="Sim"
                                                        v-model="aceitaPermuta" />
                                                      <label class="btn btn-outline-success"
                                                        for="aceitaPermuta1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="aceitaPermuta" name="aceitaPermuta" id="aceitaPermuta2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="aceitaPermuta2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-9">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Descrição das Permutas
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="permutaDescricao"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>
                                              </div>


                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="caracteristica-tab-pane" role="tabpanel"
                                            aria-labelledby="caracteristica-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-3">

                                                <div class="col-md-6">
                                                  <div class="form-check"
                                                    v-for="caracteristica in minhasCaracteristicas"
                                                    :key="caracteristica.id_caracteristica">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="caracteristicaImovel[caracteristica.id_caracteristica]"
                                                      type="checkbox"
                                                      :id="'flexCheck' + caracteristica.id_caracteristica" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + caracteristica.id_caracteristica">
                                                      {{ caracteristica.nome_caracteristica }}
                                                    </label>

                                                    <a style="margin-left: 2%;" href="#"
                                                      @click="handleDeleteCaracacteristicas(caracteristica.id_caracteristica)"><small><i
                                                          class="text-danger fa fa-trash"></i></small></a>
                                                  </div>

                                                </div>

                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="item in listcaracteristicas"
                                                    :key="item.id_caracteristica">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="caracteristicaAllImovel[item.id_caracteristica]"
                                                      type="checkbox" :id="'flexCheck' + item.id_caracteristica" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + item.id_caracteristica">
                                                      {{ item.nome_caracteristica }}
                                                    </label>
                                                  </div>
                                                </div>

                                              </div>


                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="localizacao-tab-pane" role="tabpanel"
                                            aria-labelledby="localizacao-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      CEP
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" @input="aplicaMascaraCEP" class="form-control"
                                                        placeholder="00000-00" v-model="buscarCEP" required
                                                        v-if="!mostrarSkeleton"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">País
                                                    </label>

                                                    <input type="text" placeholder="Brasil" required
                                                      v-if="!mostrarSkeleton" disabled class="form-control"
                                                      v-model="selectPais" />

                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Estado
                                                    </label>

                                                    <input type="text" placeholder="SP" required v-if="!mostrarSkeleton"
                                                      disabled class="form-control" v-model="selectEstado" />

                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Cidade
                                                    </label>

                                                    <input type="text" placeholder="Ex.: Baurú" required
                                                      v-if="!mostrarSkeleton" class="form-control" disabled
                                                      v-model="selectCidade" />

                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Bairro
                                                    </label>

                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="selectBairro" disabled
                                                      placeholder="Ex.: Jardim Olímpia">

                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Logradouro
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" disabled v-model="logradouro"
                                                      placeholder="Ex.: Rua das flores" />
                                                  </div>
                                                </div>
                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Número
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="nLogradouro" placeholder="00" />
                                                  </div>
                                                </div>
                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Complemento
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="complemento"
                                                      placeholder="Digite aqui o complemento, se houver." />
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Nº ou identificação da Unidade
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="idUnidade"
                                                      placeholder="Insira aqui" />
                                                  </div>
                                                </div>
                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Andar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="selectAndar"
                                                      placeholder="Insira aqui" />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Unidades por andar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="undPorAndar"
                                                      placeholder="Informe a quantidade..." />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total de andares
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="totalAndares"
                                                      placeholder="Insira o total" />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total de torres
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="totalTorres"
                                                      placeholder="Se houver, insira aqui" />
                                                  </div>
                                                </div>

                                                <hr />

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar andar do apartamento
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarAndar"
                                                        id="mostrarAndar1" autocomplete="off" value="Sim"
                                                        v-model="mostrarAndar" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarAndar1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarAndar" name="mostrarAndar" id="mostrarAndar2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarAndar2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar o número da unidade
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNUnidade"
                                                        id="mostrarNUnidade1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNUnidade" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNUnidade1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNUnidade" name="mostrarNUnidade"
                                                        id="mostrarNUnidade2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNUnidade2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar Logradouro no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarLogradouro"
                                                        id="mostrarLogradouro1" autocomplete="off" value="Sim"
                                                        v-model="mostrarLogradouro" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarLogradouro1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarLogradouro" name="mostrarLogradouro"
                                                        id="mostrarLogradouro2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarLogradouro2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar Bairro no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarBairro"
                                                        id="mostrarBairro1" autocomplete="off" value="Sim"
                                                        v-model="mostrarBairro" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarBairro1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarBairro" name="mostrarBairro" id="mostrarBairro2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarBairro2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar complemento no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarComplemento"
                                                        id="mostrarComplemento1" autocomplete="off" value="Sim"
                                                        v-model="mostrarComplemento" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarComplemento1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarComplemento" name="mostrarComplemento"
                                                        id="mostrarComplemento2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarComplemento2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar número no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNumero"
                                                        id="mostrarNumero1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNumero" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNumero1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNumero" name="mostrarNumero" id="mostrarNumero2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNumero2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar nome no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNCondo"
                                                        id="mostrarNCondo1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNCondo" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNCondo1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNCondo" name="mostrarNCondo" id="mostrarNCondo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNCondo2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>



                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Localizar imóvel no mapa?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mapaCondo"
                                                        id="mapaCondo1" autocomplete="off" value="Sim"
                                                        v-model="mapaCondo" />
                                                      <label class="btn btn-outline-success"
                                                        for="mapaCondo1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mapaCondo" name="mapaCondo" id="mapaCondo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger" for="mapaCondo2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <hr />

                                                <div class="col-12">

                                                  <iframe :src="mapUrl" width="100%" height="350" style="border: 0"
                                                    allowfullscreen="" loading="lazy" class="my-3"
                                                    referrerpolicy="no-referrer-when-downgrade">
                                                  </iframe>

                                                  <div class="row">

                                                    <div class="col-4">
                                                      <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                          class="form-label">
                                                          Mostrar mapa no site?
                                                        </label>

                                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                        <div class="btn-group" role="group"
                                                          aria-label="Basic radio toggle button group">
                                                          <input type="radio" class="btn-check" name="selectMapSite"
                                                            id="selectMapSite1" autocomplete="off" value="Sim"
                                                            v-model="selectMapSite" />
                                                          <label class="btn btn-outline-success"
                                                            for="selectMapSite1">Sim</label>

                                                          <input type="radio" class="btn-check" value="Não"
                                                            v-model="selectMapSite" name="selectMapSite"
                                                            id="selectMapSite2" autocomplete="off" />
                                                          <label class="btn btn-outline-danger"
                                                            for="selectMapSite2">Não</label>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="col-4">
                                                      <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                          class="form-label">
                                                          Ativar StreetView?
                                                        </label>

                                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                        <div class="btn-group" role="group"
                                                          aria-label="Basic radio toggle button group">
                                                          <input type="radio" class="btn-check" name="mapaStreetV"
                                                            id="mapaStreetV1" autocomplete="off" value="Sim"
                                                            v-model="mapaStreetV" />
                                                          <label class="btn btn-outline-success"
                                                            for="mapaStreetV1">Sim</label>

                                                          <input type="radio" class="btn-check" value="Não"
                                                            v-model="mapaStreetV" name="mapaStreetV" id="mapaStreetV2"
                                                            autocomplete="off" />
                                                          <label class="btn btn-outline-danger"
                                                            for="mapaStreetV2">Não</label>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="col-12" v-if="mostrarStreetV">


                                                      <div class="col-12 mb-3">
                                                        <small>* As imagens são extraídas do google e podem estar
                                                          desatualizadas</small>
                                                      </div>

                                                      <div class="col-4">
                                                        <div class="mb-3">
                                                          <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                          <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                          <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                            class="form-label">
                                                            Mostrar StreetView no site?
                                                          </label>

                                                          <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                          <div class="btn-group" role="group"
                                                            aria-label="Basic radio toggle button group">
                                                            <input type="radio" class="btn-check"
                                                              name="selectStreetVSite" id="selectStreetVSite1"
                                                              autocomplete="off" value="Sim"
                                                              v-model="selectStreetVSite" />
                                                            <label class="btn btn-outline-success"
                                                              for="selectStreetVSite1">Sim</label>

                                                            <input type="radio" class="btn-check" value="Não"
                                                              v-model="selectStreetVSite" name="selectStreetVSite"
                                                              id="selectStreetVSite2" autocomplete="off" />
                                                            <label class="btn btn-outline-danger"
                                                              for="selectStreetVSite2">Não</label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>


                                              </div>




                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="proximidades-tab-pane" role="tabpanel"
                                            aria-labelledby="proximidades-tab" tabindex="0">

                                            <div>

                                              <div class="row">
                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="proximidade in minhasProximidades"
                                                    :key="proximidade.id_proximidade">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="proximidadesImovel[proximidade.id_proximidade]"
                                                      type="checkbox" :id="'flexCheck' + proximidade.id_proximidade" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + proximidade.id_proximidade">
                                                      {{ proximidade.nome_proximidade }}

                                                    </label>
                                                    <a style="margin-left: 2%;" href="#"
                                                      @click="handleDeleteProximidades(proximidade.id_proximidade)"><small><i
                                                          class="text-danger fa fa-trash"></i></small></a>
                                                  </div>
                                                </div>
                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="item in listProximidades"
                                                    :key="item.id_proximidade">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="proximidadesAllImovel[item.id_proximidade]"
                                                      type="checkbox" :id="'flexCheck' + item.id_proximidade" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + item.id_proximidade">
                                                      {{ item.nome_proximidade }}

                                                    </label>
                                                  </div>
                                                </div>

                                              </div>



                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="descricao-tab-pane" role="tabpanel"
                                            aria-labelledby="decricao-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Titulo da página de detalhamento do imóvel
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="titleImovel"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Texto de apresentação do imóvel
                                                    </label>

                                                    <textarea class="form-control" v-if="!mostrarSkeleton"
                                                      v-model="descricaoImovel" style="height: 100px"
                                                      placeholder="Digite aqui..."></textarea>
                                                  </div>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="complementos-tab-pane" role="tabpanel"
                                            aria-labelledby="complementos-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Vídeo do Imóvel: Insira a URL do seu vídeo no Youtube
                                                      <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-trash me-2"></i> Remover Vídeo
                                                      </button>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="urlYT"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Apresentação 360°: Insira a URL 360° do seu imóvel
                                                      <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-trash me-2"></i> Remover 360°
                                                      </button>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="url360"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Insira o link do Google Drive, Dropbox, Onedrive ou outro

                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="link_drive"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="images-tab-pane" role="tabpanel"
                                            aria-labelledby="images-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <li class="text-danger"><small> Envie até 10 imagens . </small></li>
                                                <li class="text-danger"><small> Formatos aceitos .PNG .JPG ou
                                                    .JPEG</small></li>
                                                <li class="text-danger"><small> Tamanho máx. permitido é de até 3 mb
                                                    por
                                                    imagem.</small>
                                                </li>
                                                <li class="text-danger"><small> A resolução ideal de w: 1342
                                                    h:768.</small>
                                                </li>

                                                <div class="row g-3">
                                                  <div class="col-12">
                                                    <div class="row row-cols-1 row-cols-md-5 g-4">
                                                      <div class="col" v-for="(image, index) in images" :key="index">
                                                        <div class="card bg-transparent border-0">
                                                          <div class="preview-photo-prato area-photo-prato">
                                                            <img :src="image.src" class="img-photo-prato" />

                                                            <!-- Barra de Progresso -->
                                                            <div class="progress">
                                                              <div class="progress-bar"
                                                                :style="{ width: image.progress + '%' }"></div>
                                                            </div>

                                                            <button @click="removerImagem(index)"
                                                              class="btn btn-danger btn-remover">
                                                              <i class="fa fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <!-- Botão para adicionar mais imagens -->
                                                      <div class="col" v-if="images.length < maxImages">
                                                        <div class="card bg-transparent border-0">
                                                          <div class="preview-photo-prato area-photo-prato">
                                                            <label for="inputGroupFile03"
                                                              class="btn btn-primary btn-photo my-4 rounded-2 py-2">
                                                              <i class="fa fa-plus"></i>
                                                            </label>
                                                            <input hidden type="file" class="form-control"
                                                              id="inputGroupFile03" @change="previewImage"
                                                              aria-describedby="inputGroupFileAddon03"
                                                              aria-label="Upload" multiple />

                                                            <div v-if="success"><i class="fa fa-check"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>


                                                </div>


                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="publicar-tab-pane" role="tabpanel"
                                            aria-labelledby="publicar-tab" tabindex="0">

                                            <div class="row mt-4">
                                              <div class="col-3">
                                                <div class="mb-3">
                                                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                    class="form-label">
                                                    Mostrar imóvel no site?
                                                    <p>
                                                      <small>Determine se o imóvel será publicado em seu
                                                        site.</small>
                                                    </p>
                                                  </label>

                                                  <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                  <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="selectImovelSite"
                                                      id="selectImovelSite1" autocomplete="off" value="Sim"
                                                      v-model="selectImovelSite" />
                                                    <label class="btn btn-outline-success"
                                                      for="selectImovelSite1">Sim</label>

                                                    <input type="radio" class="btn-check" value="Não"
                                                      v-model="selectImovelSite" name="selectImovelSite"
                                                      id="selectImovelSite2" autocomplete="off" />
                                                    <label class="btn btn-outline-danger"
                                                      for="selectImovelSite2">Não</label>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="col-6">
                                                <label class="form-label mb-3" for="btnradio2">
                                                  Tarja do imóvel para o site <br />
                                                  <small>Escolha a cor e a frase que aparecerão na miniatura do
                                                    imóvel.
                                                  </small>
                                                </label>
                                                <div class="row">
                                                  <div class="col-8">
                                                    <div class="mb-3">
                                                      <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                      <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                      <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                        class="form-label">
                                                        Texto da tarja
                                                      </label>
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="textoTarja"
                                                        placeholder="Em construção" />
                                                    </div>
                                                  </div>
                                                  <div class="col-4">
                                                    <div class="mb-3">
                                                      <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                      <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                      <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                        class="form-label">
                                                        Cor da tarja
                                                      </label>
                                                      <input type="color" v-if="!mostrarSkeleton" v-model="corTarja"
                                                        class="form-control" id="exampleColorInput" value="#563d7c"
                                                        title="Escolha a cor" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Fechar</button>
                                        <button type="button" class="btn btn-success" :disabled="autenticando"
                                          @click="handleFinish()">Salvar &nbsp;<i class="fa fa-arrow-right"
                                            aria-hidden="true"></i></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                      </div>

                      <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-dark btn-sm" @click="previousPageImovel()"
                          :disabled="currentPageImovel <= 1"> Anterior
                        </button>
                        <button class=" btn btn-dark btn-sm" style="margin-right: 3% !important;"
                          @click="nextPageImovel()" :disabled="currentPageImovel >= totalPagesImoveis">
                          Proximo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-7 col-xxl-7">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0"><i class="fa fa-map-marker"></i> Localize seus imóveis</h5>
                    </div>
                    <div class="card-body py-3">
                      <div id="mapImoveis" ref="mapElement"
                                style="height: 438px; width:100%; border: 0; position: sticky; bottom: 0;"></div>
                    </div>
                  </div>
                </div>


                <div class="col-xl-12 col-xxl-12">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0"><i class="fa fa-ruler"></i> Média do m2 <button
                          style="float: inline-end;" type="button" class="btn btn-warning btn-sm"><i
                            class="fa fa-filter"></i> Reiniciar filtros</button></h5>
                    </div>
                    <div class="card-body py-3">
                      <div class="chart chart-sm">

                        <div class="row">
                          <div class="col-1 mb-3">
                            <label for="tipoNegocio" class="form-label">UF <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedUf" @change="filtrarImoveis">
                              <option value="">Escolha</option>
                              <option v-for="uf in ufs" :key="uf" :value="uf">{{ uf }}</option>
                            </select>
                          </div>
                          <div class="col-1">
                            <label for="cidade" class="form-label">Cidade <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedCidade" @change="filtrarImoveis">
                              <option value="">Escolha</option>
                              <option v-for="cidade in cidades" :key="cidade" :value="cidade">{{ cidade }}</option>
                            </select>
                          </div>
                          <div class="col-1">
                            <label for="bairro" class="form-label">Bairro <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedBairro" @change="filtrarImoveis">
                              <option value="">Selecione</option>
                              <option v-for="bairro in bairros" :key="bairro" :value="bairro">{{ bairro }}</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <label for="tipoNegocio" class="form-label">Tipo de negócio <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedTipoNegocio" @change="filtrarImoveis">
                              <option value="">Escolha</option>
                              <option value="Venda">Venda</option>
                              <option value="Aluguel">Aluguel</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <label for="status" class="form-label">Status <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedStatus" @change="filtrarImoveis">
                              <option value="">Escolha</option>
                              <option value="Sim">Publicado</option>
                              <option value="Não">Não publicado</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <label for="tipoImovel" class="form-label">Tipo do imóvel <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedTipoImovel" @change="filtrarImoveis">
                              <option value="">Selecione</option>
                              <option value="Casa">Casa</option>
                              <option value="Apartamento">Apartamento</option>
                              <option value="Flat">Flat</option>
                              <option value="Terreno">Terreno</option>
                              <option value="Sítio">Sítio</option>
                              <option value="Haras">Haras</option>
                              <option value="Kitnet">Kitnet</option>
                              <option value="Fazenda">Fazenda</option>
                              <option value="Galpão">Galpão</option>
                              <option value="Sala Comercial">Sala Comercial</option>
                            </select>
                          </div>
                          <div class="col-2">
                            <label for="proximoMar" class="form-label">Proximo do Mar? <small><i
                                  class="fa fa-filter"></i></small></label>
                            <select class="form-select" v-model="selectedProximoMar" @change="filtrarImoveis">
                              <option value="">Selecione</option>
                              <option value="Vista para o mar">Vista para o mar</option>
                              <option value="Frente para o mar">Frente para o mar</option>
                              <option value="Quadra do mar">Quadra do mar</option>
                              <option value="Proximo ao mar">Proximo ao mar</option>
                              <option value="Não">Não</option>
                            </select>
                          </div>
                          <div class="col-1">
                            <label for="quartos" class="form-label">Quartos <small><i
                                  class="fa fa-filter"></i></small></label>
                            <input style="height: 34px;" type="number" class="form-control" v-model="selectedQuartos"
                              @input="filtrarImoveis" placeholder="00">
                          </div>
                          <canvas id="myMetroQuadrado" v-if="filteredImoveis.length"></canvas>
                          <div v-if="!filteredImoveis.length">
                            <div class="alert alert-primary mt-3" role="alert">
                              😔 Desculpe, não achamos nenhum imóvel com essas características.
                            </div>
                            <div>
                              <img style="margin-left: auto; margin-right: auto; display: block;"
                                src="../../../assets/images/filterImage.svg" alt="">
                            </div>
                          </div>


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
                        <canvas id="myChartPublicado"></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-xxl-6">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0">Aluguel x Venda</h5>
                    </div>
                    <div class="card-body py-3">
                      <div class="chart chart-sm">
                        <canvas id="myChartTipo"></canvas>
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
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'
import api from '../../../service/api/index'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import 'https://cdn.jsdelivr.net/npm/chart.js'
import L from 'leaflet';

export default {
  name: 'MainView',
  props: {
    cep: String,
  },
  data() {
    return {
      token: localStorage.getItem('token'),
      perfil: 0,
      capa: 0,
      imovel: 0,
      publicacao: 0,
      progressView: false,
      iniciais: '',
      nome: '',
      sobrenome: '',
      id_user: '',
      myImoveis: [],
      allImoveis: [],
      qualidade: '',
      aluguel: 0,
      venda: 0,
      aguardando: 0,
      publicado: 0,
      qualidadeProgress: 0,
      msgQualidade: '',
      estrelas: 0,
      porcentagemQualidade: 0,
      totalImovel: '',


      filteredImoveis: [],
      ufs: [],
      cidades: [],
      bairros: [],
      selectedUf: '',
      selectedCidade: '',
      selectedBairro: '',
      selectedTipoNegocio: '',
      selectedStatus: '',
      selectedTipoImovel: '',
      selectedProximoMar: '',
      selectedQuartos: '',
      chart: null,


      mediaValorMetroQuadrado: 0,
      chartInstance: null,

      currentPageImovel: 1,
      perPageImovel: 2,
      searchImovel: '',

      totalCondominios: 0,

      // caso nao marque todos os pins transformar a latitude e longitude me array e o que mais precisar tambem 
      latitudeImoveis: '-15.7934',
      longitudeImoveis: '-47.8823',
      mapImoveis: null,
      markerIMoveis: null,
      mostrarResumo: false,

      // editar imovel
      // TAB IMAGEM
      images: [],
      imageSrc: null,
      maxImages: 10,
    }
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
  },

  watch: {
    selectedUf(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selectedCidade = "";
        this.selectedBairro = "";
        this.atualizarOpcoesFiltro();
      }
    }
  },

  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.nome = decode.nome
    this.sobrenome = decode.sobrenome
    this.id_user = id_user
    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais

    this.ferchProgress();
    this.fetchMyImoveis();
    this.fetchAllImoveis();
    this.fetchMyCondominios();
  },

  methods: {

    mostrarTeste(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      this.mostrarResumo = true;    
    },

    formatCurrency(value) {
      if (typeof value !== "number") {
        value = parseFloat(value);
      }
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    formatarData(dataString) {
      if (!dataString) return '';
      const data = new Date(dataString);
      return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    fetchMyImoveis() {
      let id_user = this.id_user;

      api.listmyImoveis(id_user).then(res => {
        this.myImoveis = res.data;
        this.totalImovel = this.myImoveis.length;
        //this.renderChart(res.data);

        // console.log('Aqui estão os imóveis do Usuário ====> ', res.data)

        this.mapImoveis = L.map(this.$refs.mapElement).setView([this.latitudeImoveis, this.longitudeImoveis], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.mapImoveis);

        res.data.map( async (imovel) => {
          // console.log(imovel)
          await this.buscarCoordenadas(imovel.localizacao.cep, imovel.localizacao.rua).then((res) => {
            if(res) {
              // addMarker()
              this.updateMap()
            }
          })

        })

        this.avaliarQualidadeCadastro(this.myImoveis);

        const imovelVenda = res.data.filter(
          (item) => item.preco.tipo_negocio === 'Venda'
        );
        this.venda = imovelVenda.length;

        const imovelAluguel = res.data.filter(
          (dados) => dados.preco.tipo_negocio === 'Aluguel'
        );
        this.aluguel = imovelAluguel.length;

        const ctx = document.getElementById("myChartTipo");
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Aluguel", "Venda"],
            datasets: [
              {
                label: "My First Dataset",
                data: [this.aluguel, this.venda],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                hoverOffset: 4,
              },
            ],
          },
        });

        const imovelPublicado = res.data.filter(
          (item) => item.publicacao.mostrar_imovel_publi === 'Sim'
        );
        this.publicado = imovelPublicado.length;

        const imovelAguardando = res.data.filter(
          (dados) => dados.publicacao.mostrar_imovel_publi === 'Não'
        );
        this.aguardando = imovelAguardando.length;

        const ctxx = document.getElementById("myChartPublicado");
        new Chart(ctxx, {
          type: "pie",
          data: {
            labels: ["Publicado", "Aguardando"],
            datasets: [
              {
                label: "My First Dataset",
                data: [this.publicado, this.aguardando],
                backgroundColor: ["#41A9CD  ", "#A7AEAC"],
                hoverOffset: 4,
              },
            ],
          },
        });

        let latitude
        let longitude

        const map = L.map('map').setView([latitude, longitude], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        res.data.forEach(imovel => {
          let cep = imovel.localizacao.cep;
          const apiKey = '1f64d822c44341f38692b2b37ec70e64';

          axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${cep}+Brazil&key=${apiKey}`)
            .then(response => {
              const data = response.data;
              if (data && data.results && data.results.length > 0) {
                const location = data.results[0].geometry;

                latitude = location.lat;
                longitude = location.lng;


                L.marker([latitude, longitude]).addTo(map)
                  .bindPopup(`Latitude: ${location.lat} Longitude: ${location.lng}`).openPopup();

              }
            })
            .catch(error => console.error('Erro ao buscar coordenadas do CEP:', error));
        });

      })
    },

    async buscarCoordenadas(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = 'AIzaSyAASYgAApUrIKnyEc9ykVzP7-s_-g2ldRU';

      try {
        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: `${cep}, ${rua}`,
            key: apiKey
          }
        });
        // console.log(res)

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;
          this.latitudeImoveis = latitude;
          this.longitudeImoveis = longitude;

          // console.log("Latitude e Longitude encontradas:", latitude, longitude);
          return { latitude, longitude };
        } else {
          console.error("Coordenadas não encontradas para o CEP informado.");
          return null;
        }
      } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        return null;
      }
    },

    updateMap() {
      this.mapImoveis.setView([this.latitudeImoveis, this.longitudeImoveis], 4);
      this.addMarker();
    },

    addMarker() {
      const lat = this.latitudeImoveis;
      const lng = this.longitudeImoveis;

      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(this.mapImoveis)
          // .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();
      } else {
        console.error('Coordenadas inválidas');
      }
    },

    atualizarGrafico() {
      const ctx = document.getElementById('myMetroQuadrado');
      if (ctx) {
        if (this.chart) this.chart.destroy();

        if (!this.filteredImoveis.length) {
          // Mostrar mensagem e imagem aqui
          return;
        }

        const labels = this.filteredImoveis.map(imovel => imovel.localizacao.bairro);
        const data = this.filteredImoveis.map(imovel => parseFloat(imovel.medidas.media_metro_quadrado));

        this.chart = new Chart(ctx.getContext('2d'), {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Média do m²',
              data: data,
              borderWidth: 1,
              backgroundColor: "rgba(81, 229, 255, 0.2)",
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    },
    ferchProgress() {
      let id_user = this.id_user;

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
    },
    avaliarQualidadeCadastro(imoveis) {
      imoveis.forEach(imovel => {
        let totalCampos = 0;
        let camposNulos = 0;

        const analisarObjeto = (obj) => {
          Object.values(obj).forEach(val => {
            if (val && typeof val === 'object' && !Array.isArray(val)) {
              analisarObjeto(val);
            } else {
              totalCampos++;
              if (val === null || val === '') {
                camposNulos++;
              }
            }
          });
        };

        analisarObjeto(imovel);

        const pontuacaoMaxima = 10;
        const pontuacao = Math.round((totalCampos - camposNulos) / totalCampos * pontuacaoMaxima);
        const porcentagem = Math.round((totalCampos - camposNulos) / totalCampos * 100); // Calcula a porcentagem

        imovel.pontuacaoQualidade = `${pontuacao}/10`;
        imovel.porcentagemQualidade = porcentagem;
        this.qualidade = imovel.pontuacaoQualidade;


        if (porcentagem == 100) {
          this.estrelas = 5;
          this.msgQualidade = 'Excelente';
        } else if (porcentagem >= 80) {
          this.estrelas = 4;
          this.msgQualidade = 'Muito Bom';
        } else if (porcentagem >= 60) {
          this.estrelas = 3;
          this.msgQualidade = 'Bom';
        } else if (porcentagem >= 40) {
          this.estrelas = 2;
          this.msgQualidade = 'Regular';
        } else if (porcentagem >= 20) {
          this.estrelas = 1;
          this.msgQualidade = 'Ruim';
        } else {
          this.estrelas = 0;
          this.msgQualidade = 'Péssimo';
        }

        this.qualidadeProgress = porcentagem;


      });

      return imoveis;
    },
    handledComentario(id) {
      let id_imovel = id;

      api.comentarioImovel(id_imovel).then(res => {
        this.comentario = res.data;
      })
    },
    handledDelete(id) {

      let id_imovel = id;

      api.deleteImovel(id_imovel).then(res => {
        this.fetchMyImoveis();
      })

    },
    fetchMyCondominios() {
      let id_user = this.id_user
      api.listcondominio(id_user).then((res) => {
        this.totalCondominios = res.data.response.length;
      })
    },
    fetchAllImoveis() {
      api.listallImoveis().then(res => {
        this.allImoveis = res.data;
        this.ufs = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.estado))];
        this.atualizarOpcoesFiltro();
        this.filtrarImoveis();
      })
    },
    atualizarOpcoesFiltro() {
      if (this.selectedUf) {
        const imoveisFiltrados = this.allImoveis.filter(imovel => imovel.localizacao.estado === this.selectedUf);
        this.cidades = [...new Set(imoveisFiltrados.map(imovel => imovel.localizacao.cidade))];
        this.bairros = [...new Set(imoveisFiltrados.map(imovel => imovel.localizacao.bairro))];
      } else {
        this.cidades = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.cidade))];
        this.bairros = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.bairro))];
      }
    },

    filtrarImoveis() {
      this.filteredImoveis = this.allImoveis.filter(imovel => {
        return (
          (!this.selectedUf || imovel.localizacao.estado === this.selectedUf) &&
          (!this.selectedCidade || imovel.localizacao.cidade === this.selectedCidade) &&
          (!this.selectedBairro || imovel.localizacao.bairro === this.selectedBairro) &&
          (!this.selectedTipoNegocio || imovel.preco.tipo_negocio === this.selectedTipoNegocio) &&
          (!this.selectedStatus || imovel.publicacao.mostrar_imovel_publi === this.selectedStatus) &&
          (!this.selectedTipoImovel || imovel.info.tipo === this.selectedTipoImovel) &&
          (!this.selectedProximoMar || imovel.info.proximo_mar === this.selectedProximoMar) &&
          (!this.selectedQuartos || imovel.comodos.dormitorio == this.selectedQuartos)
        );
      });

      this.atualizarOpcoesFiltro();
      this.atualizarGrafico();
    },

    previousPageImovel() {
      if (this.currentPageImovel > 1) {
        this.currentPageImovel -= 1
      }
    },
    nextPageImovel() {
      if (this.currentPageImovel < this.totalPagesImoveis) {
        this.currentPageImovel += 1
      }
    },


  },

  computed: {
    imoveisOnCurrentPage() {
      const startIndex = (this.currentPageImovel - 1) * this.perPageImovel
      const endIndex = startIndex + this.perPageImovel
      return this.myImoveis
        .filter((imovel) => {
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase())
        })
        .slice(startIndex, endIndex)
    },
    totalPagesImoveis() {
      return Math.ceil(
        this.myImoveis.filter((imovel) => {
          this.currentPageConcept = 1
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase())
        }).length / this.perPageImovel,
      )
    },
  }

}
</script>