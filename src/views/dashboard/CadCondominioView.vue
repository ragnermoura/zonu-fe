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

                    <div class="card" v-if="infoTab">
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
                                       v-model="logradouro" placeholder="Consulte...">
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
                                  <input class="form-check-input" v-model="caracteristicaImovel" type="checkbox"
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
                                  <input class="form-check-input" v-model="caracteristicaImovel" type="checkbox"
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

                                <textarea class="form-control" v-if="!mostrarSkeleton" v-model="apresentacaoImovel"
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
      home: '',
      comodos: '',
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
      codigoref: '',
      selectCondominio: 'Não',
      condominioEmpreendimento: '',
      selectProprietario: '',
      selectCorretor: '',
      selectAgenciador: '',
      tipoImovel: '',
      perfilImovel: '',
      situacaoImovel: '',
      anoImovel: '',
      incorporacao: '',
      posicaoSolar: '',
      selectTerreno: '',
      proximoMar: '',
      selectAverbado: 'Não',
      selectEscritura: 'Não',
      selectEsquina: 'Não',
      selectMobilia: 'Não',


      // TAB COMODOS
      dormitorio: '',
      suite: '',
      banheiro: '',
      garagem: '',
      selectGaragemCobertura: '',
      selectBoxGaragem: '',
      salaTv: '',
      salaJantar: '',
      salaEstar: '',
      lavabo: '',
      areaServico: '',
      cozinha: '',
      closet: '',
      escritorio: '',
      depEmpregada: '',


      // TAB MEDIDAS
      areaConstruida: '',
      areaPrivativa: '',
      areaTotal: '',


      // TAB PREÇOS
      tipoNegocio: '',
      precoImovel: '',
      precoNoSite: 'Sim',
      precoIptu: '',
      periodoIptu: 'Anual',
      precoCondominio: '',
      estaFinanciado: 'Não',
      aceitaFinanciamento: 'Não',
      mCasaMVida: '',
      taxasTotal: '',
      taxasDescricao: '',
      aceitaPermuta: 'Não',
      permutaDescricao: '',


      //TAB CARACTERISTICA
      caracteristicaImovel: false,


      // TAB LOCALIZAÇÃO
      buscarCEP: '',
      selectPais: '',
      selectEstado: '',
      selectCidade: '',
      selectBairro: '',
      selectZona: '',
      logradouro: '',
      nLogradouro: '',
      complemento: '',
      idUnidade: '',
      selectAndar: '',
      undPorAndar: '',
      totalAndares: '',
      totalTorres: '',
      mostrarAndar: 'Não',
      mostrarNUnidade: 'Não',
      mostrarLogradouro: 'Não',
      mostrarBairro: 'Não',
      mostrarComplemento: 'Não',
      mostrarNumero: 'Não',
      mostrarNCondo: 'Não',
      mapaCondo: 'Não',
      selectMapSite: 'Não',
      selectLocalSite: 'Não',
      mapaStreetV: 'Não',
      selectStreetVSite: 'Não',


      // TAB PROXIMIDADES
      proximidades: false,


      // TAB DESCRIÇÃO
      titleImovel: '', 
      apresentacaoImovel: '',


      // TAB COMPLEMENTOS
      urlYT: '',
      url360: '',


      // TAB IMAGEM


      // TAB PUBLICAÇÃO
      selectImovelSite: 'Sim',
      selectPageInit: 'Sim',
      textoTarja: 'Em construção',
      corTarja: '#563d7c',
      enviarLinkProprietario: 'Não',
      emailProprietario: '',
      periodoEnvio: '+30',
      revisarCadastro: 'Não',
      proximaDataRevisao: '',
      periodoRevisao: '+30'



    }
  },


  //Aqui está o MOSTRA e ESCONDE dos INPUTS do dashboard
  watch: {
    selectCondominio(newValue) {
      if (newValue == 'Sim') {
        this.inputCondominio = true
      } else {
        this.inputCondominio = false
      }
    },

    mapaCondo(newValue){
      if(newValue == 'Sim'){
        this.mostrarMapa = true       
      }else{ this.mostrarMapa = false}
    },

    mapaStreetV(newValue){
      if(newValue == 'Sim'){
        this.mostrarStreetV = true
      }else{
        this.mostrarStreetV = false
      }
    },


    // INFO
    selectAverbado(y){
      this.selectAverbado = y
      console.log(this.selectAverbado)
    },
    selectEscritura(y){
      this.selectEscritura = y
      console.log(this.selectEscritura)
    },
    selectEsquina(y){
      this.selectEsquina = y
      console.log(this.selectEsquina)
    },
    selectMobilia(y){
      this.selectMobilia = y
      console.log(this.selectMobilia)
    },
    selectTerreno(y){
      this.selectTerreno = y
      console.log(this.selectTerreno)
    },

    // COMODOS
    selectGaragemCobertura(y){
      this.selectGaragemCobertura = y
      console.log(this.selectGaragemCobertura)
    },
    selectBoxGaragem(y){
      this.selectBoxGaragem = y
      console.log(this.selectBoxGaragem)
    },


    // PREÇOS
    precoNoSite(y){
      this.precoNoSite = y
      console.log(this.precoNoSite)
    },
    periodoIptu(y){
      this.periodoIptu = y
      console.log(this.periodoIptu)
    },
    estaFinanciado(y){
      this.estaFinanciado = y
      console.log(this.estaFinanciado)
    },
    aceitaFinanciamento(y){
      this.aceitaFinanciamento = y
      console.log(this.aceitaFinanciamento)
    },
    mCasaMVida(y){
      this.mCasaMVida = y
      console.log(this.mCasaMVida)
    },
    aceitaPermuta(y){
      this.aceitaPermuta = y
      console.log(this.aceitaPermuta)
    },


    // LOCALIZAÇÃO
    mostrarAndar(y){
      this.mostrarAndar = y
      console.log(this.mostrarAndar)
    },
    mostrarNUnidade(y){
      this.mostrarNUnidade = y
      console.log(this.mostrarNUnidade)
    },
    mostrarLogradouro(y){
      this.mostrarLogradouro = y
      console.log(this.mostrarLogradouro)
    },
    mostrarBairro(y){
      this.mostrarBairro = y
      console.log(this.mostrarBairro)
    },
    mostrarComplemento(y){
      this.mostrarComplemento = y
      console.log(this.mostrarComplemento)
    },
    mostrarNumero(y){
      this.mostrarNumero = y
      console.log(this.mostrarNumero)
    },
    mostrarNCondo(y){
      this.mostrarNCondo = y
      console.log(this.mostrarNCondo)
    },
    selectMapSite(y){
      this.selectMapSite = y
      console.log(this.selectMapSite)
    },
    selectLocalSite(y){
      this.selectLocalSite = y
      console.log(this.selectLocalSite)
    },
    selectStreetVSite(y){
      this.selectStreetVSite = y
      console.log(this.selectStreetVSite)
    },

  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000)
  },

  methods: {

    handleprop(){
      this.addProp = true
      this.infoTab = false
    },
    
    handlepropclose(){
      this.addProp = false
      this.infoTab = true
    },

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