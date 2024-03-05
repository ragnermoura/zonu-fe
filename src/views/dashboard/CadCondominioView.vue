<template>
  <div class="wrapper">
    <Sidebar :defaultCollapsed="true"/>
    <div class="main">
      <Navbar/>
      <main class="content">
        <div class="container-fluid p-0">


          <h1 class="h3 mb-3"><strong>Cadastro |</strong> Novo Condomínio</h1>

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
                              <span v-if="stepInfo" class="text-success"><i class="fa fa-check text-success"></i>
																Informações</span>
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
            <div style="width: 79%; margin-left: 1%;">
              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">

                    <div class="card">
                      <div class="card-body">
                      
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Cadastro de condomínio/empreendimento</h1>
                          <p>
                            Ao cadastrar um imóvel, será possível selecionar um condomínio/empreendimento para reaproveitamento de dados e fotos
                          </p>
                        </div>

                        <div>

                          <div class="row mt-4">

                            <div class="col-6">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Nome do condomínio/empreendimento
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                       v-model="condNome" placeholder="Consulte...">
                              </div>
                            </div>


                          </div>

                          <hr>

                        </div>


                        <!-- Localização -->
                        <div class="col mt-4">
                          <h1 class="title-login mt-2">Localização</h1>
                          <p>Adicione a localização deste imóvel e defina o que será mostrado ou
                            não em seu site.</p>
                        </div>

                        <div>

                          <div class="row mt-4">

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  CEP
                                </label>
                                <div class="input-group">
                                  <input type="text" class="form-control" placeholder="Digite aqui..."
                                         v-model="buscarCEP"
                                         required v-if="!mostrarSkeleton" aria-label="Example text with button addon"
                                         aria-describedby="button-addon1">
                                  <button class="btn btn-success px-3" type="button" id="button-addon1">Buscar</button>
                                </div>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">País
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                        v-model="selectPais">

                                  <option selected disabled>Selecione</option>

                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Estado
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                        v-model="selectEstado">

                                  <option selected disabled>Selecione</option>

                                </select>
                              </div>
                            </div>


                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Cidade
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                        v-model="selectCidade">

                                  <option selected disabled>Selecione</option>

                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Bairro
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                        v-model="selectBairro">

                                  <option selected disabled>Selecione</option>

                                </select>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Zona
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                        v-model="selectZona">

                                  <option selected disabled>Selecione</option>

                                </select>
                              </div>
                            </div>


                            <div class="col-5">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Logradouro
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                       v-model="logradouro" placeholder="Consulte...">
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Número
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                       v-model="nLogradouro" placeholder="Consulte...">
                              </div>
                            </div>



                          </div>

                          <hr>

                        </div>

                                              
                        <div class="col mt-4">
                          <h1 class="title-login mt-2">Características do condomínio/empreendimento</h1>
                          <p>
                            Defina as características deste condomínio/empreendimento
                          </p>
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
                                  <input class="form-check-input" v-model="caracteristicaCond" type="checkbox"
                                         value=""
                                         id="flexCheckDefault">
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                  </label>
                                </div>

                              </div>
                            </div>

                          </div>

                          <hr>

                        </div>


                        <div class="col mt-4">
                          <h1 class="title-login mt-2">Proximidades</h1>
                          <p>
                            Defina os estabelecimentos próximos a este condomínio/empreendimento
                          </p>
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
                                  <input class="form-check-input" v-model="proximidadeCond" type="checkbox"
                                         value=""
                                         id="flexCheckDefault">
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                  </label>
                                </div>

                              </div>
                            </div>

                          </div>

                          <hr>

                        </div>


                        <div class="col mt-4">
                          <h1 class="title-login mt-2">Descrição</h1>
                          <p>
                            Descreva os pontos fortes do condomínio/empreendimento
                          </p>
                        </div>

                        <div>

                          <div class="row mt-4">

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Texto sobre o condomínio/empreendimento
                                </label>

                                <textarea class="form-control" v-if="!mostrarSkeleton" v-model="apresentacaoCond"
                                          style="height:100px" placeholder="Digite aqui..."></textarea>
                              </div>
                            </div>

                          </div>

                          <hr>

                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button  class="btn btn-secondary" type="button"><i
                                    class="fa fa-caret-square-right me-2" aria-hidden="true"></i>
                                  Salvar e continuar
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-success"  type="button">
                                  <i class="fa fa-save me-2" aria-hidden="true"></i>
                                  Salvar e finalizar
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
      <Footer/>
    </div>
  </div>



</template>
<script>
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'

export default {
  name: 'CadCondominioView',
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      mostrarSkeleton: true,

      // NOVO CONDOMINIO
      condNome : '',
      buscarCEP : '',
      selectPais : 'não',
      selectEstado : 'não',
      selectCidade : 'não',
      selectBairro : 'não',
      selectZona : 'não',
      logradouro : '',
      nLogradouro : '',
      caracteristicaCond : '',
      proximidadeCond : '',
      apresentacaoCond : '',



    }
  },


  //Aqui está o MOSTRA e ESCONDE dos INPUTS do dashboard
  watch: {
  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000)
  },

  methods: {
  }


}
</script>