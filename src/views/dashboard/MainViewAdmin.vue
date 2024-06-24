<template>
  <div class="wrapper">

    <Sidebar />
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">

          <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
          <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Administrador</h1>

          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-md-4">
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
                          <i class="mdi mdi-arrow-bottom-right"></i> 0
                        </span>
                        <span class="text-muted">Última semana</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col mt-0">
                          <h5 class="card-title">Clientes <small class="text-success">Em uso</small></h5>
                        </div>
                        <div class="col-auto">
                          <div class="stat text-primary">
                            <i class="align-middle" data-feather="users"></i>
                          </div>
                        </div>
                      </div>
                      <h1 class="mt-1 mb-3">{{ totalImovel }}</h1>
                      <div class="mb-0">
                        <span class="text-danger">
                          <i class="mdi mdi-arrow-bottom-right"></i> 0
                        </span>
                        <span class="text-muted">Última semana</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
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
                          <i class="mdi mdi-arrow-bottom-right"></i> 0
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
          </div>
          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-xl-5 col-xxl-5">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0"><i class="fa fa-plus"></i> Ultimos imóveis
                        cadastrados <a style="float: inline-end;" type="button" class="btn btn-info btn-sm"
                         ><i class="fa fa-list"></i></a></h5>
                    </div>
                    <div class="card-body py-3">
                      <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                        aria-describedby="passwordHelpBlock" v-model="searchCaracteristica" />
                      <div class="mt-5" v-for="item in myImoveis" :key="item.id_imovel">

                        <a class="row" style="text-decoration: none;">
                          <div class="col-3">
                            <img class="thumbImovel" :src="`https://zonu.com.br/api${item.fotos[0].foto}`" alt="">
                            <span style="width: 100%; margin-left: 5%; color: #FFF !important;" class="badge text-bg-success">{{
                              item.preco.tipo_negocio }}</span>
                          </div>

                          <div class="col-9" style="margin-left: -10px;">
                            <h5><i class="fa fa-building"></i> <strong>{{ item.descricao.titulo }}</strong> <a
                                @click="handledDelete(item.id_imovel)" style="float: inline-end;" class="text-danger"><i
                                  class="fa fa-trash"></i></a>
                            </h5>
                            <h5 class="text-info"><strong>{{ formatCurrency(item.preco.preco_imovel) }}</strong><a
                                data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`"
                                style="float: inline-end;" class="text-warning"><i class="fa fa-eye"></i></a></h5>
                            <h5><small><i class="fa fa-user"></i> {{ item.usuario.nome }} {{ item.usuario.sobrenome
                                }}</small></h5>
                            <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                {{ item.localizacao.logradouro }}, {{ item.localizacao.numero }} | {{
                                  item.localizacao.bairro }}, {{ item.localizacao.cidade }}</small> </h5>
                            <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                Atualizado: {{ formatarData(item.updatedAt) }}</small> <i v-for="star in estrelas"
                                :key="star" class="text-warning fa fa-star"></i> <span class="text-success"
                                style="float: inline-end; font-weight: 900;">
                                {{ qualidade }}</span></h5>
                          </div>
                        </a>

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
                      </div>

                      <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-dark btn-sm">
                          Anterior
                        </button>
                        <button class=" btn btn-dark btn-sm" style="margin-right: 3% !important;">
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
                  <FilterGraph />
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
                      <h5 class="card-title mb-0">Aluguél x Venda</h5>
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
import FilterGraph from '../../components/graph/index.vue'
import api from '../../../service/api/index'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import 'https://cdn.jsdelivr.net/npm/chart.js'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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
    FilterGraph,
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
    this.fetchMyCondominios();

  },
  methods: {

    mostrarTeste(event) {
      event.preventDefault();
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



        this.mapImoveis = L.map(this.$refs.mapElement).setView([this.latitudeImoveis, this.longitudeImoveis], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.mapImoveis);

        res.data.map(async (imovel) => {
          // console.log(imovel)
          await this.buscarCoordenadas(imovel.localizacao.cep, imovel.localizacao.rua).then((res) => {
            if (res) {
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
    ferchProgress() {
      let id_user = this.id_user;

      api.progress(id_user).then(res => {

        this.perfil = res.data.perfil;
        this.capa = res.data.logo_capa;
        this.imovel = res.data.imovel;
        this.publicacao = res.data.publicacao;

        console.log('Aqui é a progressão da Main ===> ', res.data);

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