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
															<span v-if="stepInfo" class="text-success"><i class="fa fa-check text-success"></i>
																Informações</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>


														<div class="col-12">
															<span v-if="!stepComodos"><i class="fa fa-circle"></i>
																Cômodos</span>
															<span class="text-success" v-if="stepComodos"> <i class="fa fa-check text-success"></i>
																Cômodos</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>

														<div class="col-12">
															<span v-if="!stepMedidas"> <i class="fa fa-circle"></i>
																Medidas</span>
															<span class="text-success" v-if="stepMedidas"> <i class="fa fa-check text-success"></i>
																Medidas</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>

														<div class="col-12">
															<span v-if="!stepPreco"> <i class="fa fa-circle"></i>
																Preço</span>
															<span class="text-success" v-if="stepPreco"> <i class="fa fa-check text-success"></i>
																Preço</span>
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
															<span class="text-success" v-if="stepLocalizacao"> <i class="fa fa-check text-success"></i>
																Localização</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>
														<div class="col-12">
															<span v-if="!stepProximidades"> <i class="fa fa-circle"></i>
																Proximidades</span>
															<span class="text-success" v-if="stepProximidades"> <i class="fa fa-check text-success"></i>
																Proximidades</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>

														<div class="col-12">
															<span v-if="!stepDescricao"> <i class="fa fa-circle"></i>
																Descrição</span>
															<span class="text-success" v-if="stepDescricao"> <i class="fa fa-check text-success"></i>
																Descrição</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>

														<div class="col-12">
															<span v-if="!stepComplemento"> <i class="fa fa-circle"></i>
																Complementos</span>
															<span class="text-success" v-if="stepComplemento"> <i class="fa fa-check text-success"></i>
																Complementos</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>
														<div class="col-12">
															<span v-if="!stepImagens"> <i class="fa fa-circle"></i>
																Imagens</span>
															<span class="text-success" v-if="stepImagens"> <i class="fa fa-check text-success"></i>
																Imagens</span>
														</div>

														<div class="col-auto">
															<div class="vertical-hr"></div>
														</div>


														<div class="col-12">
															<span v-if="!stepPublicacao"> <i class="fa fa-circle"></i>
																Publicação</span>
															<span class="text-success" v-if="stepPublicacao"> <i class="fa fa-check text-success"></i>
																Publicação</span>
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
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Código de
																	referência <small class="text-danger">*</small>
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="codigoref" placeholder="Digite aqui...">
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

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
																		value="Sim" v-model="selectCondominio">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
																		name="btnradio" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>


																</div>

															</div>
														</div>

														<div class="col-6">
															<div class="mb-3" v-if="inputCondominio">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1"
																	class="form-label">Condomínio/empreendimento? <small class="text-danger">*
																	</small><button type="button" class="btn btn-success"
																		style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
																		<i class="fa fa-plus"></i> Adicionar condominio
																	</button>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>

														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Proprietário
																	<small class="text-danger">*
																	</small><small>(Privado)</small> <button type="button" class="btn btn-success"
																		style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
																		<i class="fa fa-plus"></i> Adicionar
																	</button>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>
														<div class="col-3 mt-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Corretor
																	Responsável <small class="text-danger">*
																	</small>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>
														<div class="col-3 mt-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Agenciador
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>
														<div class="col-2 mt-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Tipo/Subtipo
																	<small class="text-danger">*
																	</small>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Perfil do
																	imóvel <small class="text-danger">*
																	</small>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Situação <small
																		class="text-danger">*
																	</small>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Ano da
																	construção <small class="text-danger">*
																	</small>
																</label>

																<input type="number" required v-if="!mostrarSkeleton" class="form-control"
																	placeholder="Ex.: 2015" v-model="codigoref" />
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Incorporação
																	<small class="text-danger">*
																	</small>
																</label>

																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	placeholder="Digite..." v-model="codigoref" />


															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Posição Solar
																	<small class="text-danger">*
																	</small>
																</label>
																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Terreno <small
																		class="text-danger">*
																	</small>
																</label>
																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" id="btnTerreno1" autocomplete="off" value="Plano"
																		v-model="selectTerreno">
																	<label class="btn btn-outline-success" for="btnradio1">Plano</label>

																	<input type="radio" class="btn-check" id="btnTerreno2" autocomplete="off" value="Aclive"
																		v-model="selectTerreno">
																	<label class="btn btn-outline-success" for="btnradio2">Aclive</label>

																	<input type="radio" class="btn-check" id="btnTerreno3" autocomplete="off"
																		value="Declive" v-model="selectTerreno">
																	<label class="btn btn-outline-success" for="btnradio3">Declive</label>
																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Próximo ao
																	mar?<small class="text-danger">*
																	</small>
																</label>
																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Averbado
																</label>

																<br>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
																		value="Sim" v-model="selectCondominio">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
																		name="btnradio" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>


																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Escriturado
																</label>

																<br>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
																		value="Sim" v-model="selectCondominio">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
																		name="btnradio" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>


																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Esquina
																</label>

																<br>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
																		value="Sim" v-model="selectCondominio">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
																		name="btnradio" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>


																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Tem mobília
																</label>

																<br>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
																		value="Sim" v-model="selectCondominio">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
																		name="btnradio" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>


																</div>

															</div>
														</div>

													</div>





													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button class="btn btn-secondary" type="button">Cancelar</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoComodo()" type="button">Próximo <i
																		class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
													<div class="row mt-4">
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Dormitório
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="dormitorio" placeholder="Digite aqui...">
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Sendo suíte
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="suite"
																	placeholder="Digite aqui...">
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Banheiro
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="banheiro" placeholder="Digite aqui...">
															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Garagem
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="garagem"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Garagem
																	coberta?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="garagemCoberta" id="btnradio1"
																		autocomplete="off" value="Sim" v-model="selectGaragemCobertura">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectGaragemCobertura"
																		name="garagemCoberta" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Possui box na
																	garagem?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="boxGaragem" id="boxGaragemY"
																		autocomplete="off" value="Sim" v-model="selectBoxGaragem">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="selectBoxGaragem"
																		name="boxGaragem" id="boxGaragemN" autocomplete="off">
																	<label class="btn btn-outline-danger" for="boxGaragem">Não</label>


																</div>

															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Sala de TV
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="salaTv"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Sala de jantar
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="salaJantar" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Sala de estar
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="salaEstar" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Lavabo
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="lavabo"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Área de serviço
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="areaServico" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Cozinha
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="cozinha"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Closet
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="closet"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Escritório
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="escritorio" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Dependência para empregada
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="depEmpregada" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Copa
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="salaJantar" placeholder="Digite aqui...">
															</div>
														</div>


													</div>


													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorInfo()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoMedida()" type="button">Próximo <i
																		class="fa fa-arrow-right" aria-hidden="true"></i></button>
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

													<div class="row mt-4">

														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Área Construída
																</label>
																<div class="input-group">
																	<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																		v-model="areaConstruida" placeholder="Digite aqui...">
																	<span class="input-group-text">m²</span>
																</div>
															</div>
														</div>

														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Área Privativa
																</label>
																<div class="input-group">
																	<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																		v-model="areaPrivativa" placeholder="Digite aqui...">
																	<span class="input-group-text">m²</span>
																</div>
															</div>
														</div>

														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Área Total
																</label>
																<div class="input-group">
																	<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																		v-model="areaTotal" placeholder="Digite aqui...">
																	<span class="input-group-text">m²</span>
																</div>
															</div>
														</div>

													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorComodos()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoPreco()" type="button">Próximo <i
																		class="fa fa-arrow-right" aria-hidden="true"></i></button>
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

													<div class="row mt-4">

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Proprietário
																	<small class="text-danger">*
																	</small><small>(Privado)</small>
																</label>

																<select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
																	v-model="codigoref">

																	<option selected disabled>Selecione</option>

																</select>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Área Construída
																</label>
																<div class="input-group">
																	<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																		v-model="areaConstruida" placeholder="Digite aqui...">
																	<span class="input-group-text">R$</span>
																</div>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar preço no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="precoNoSite" id="btnradio1"
																		autocomplete="off" value="Sim" v-model="precoNoSite">
																	<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="precoNoSite"
																		name="precoNoSite" id="btnradio2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																</div>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar no lugar do preço:
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="precoNoSite" placeholder="Consulte...">
															</div>
														</div>



														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Preço do IPTU
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="precoIptu" placeholder="Consulte...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Período
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="periodo" id="periodo1" autocomplete="off"
																		value="Anual" v-model="periodoIptu">
																	<label class="btn btn-outline-success" for="periodo1">Anual</label>

																	<input type="radio" class="btn-check" value="Mensal" v-model="periodoIptu"
																		name="periodo" id="periodo2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="periodo2">Mensal</label>
																</div>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Preço Condomínio
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="precoCondominio" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Está financiado?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="estaFinanciado" id="estaFinanciado1"
																		autocomplete="off" value="Sim" v-model="estaFinanciado">
																	<label class="btn btn-outline-success" for="estaFinanciado1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="estaFinanciado"
																		name="estaFinanciado" id="estaFinanciado2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="estaFinanciado2">Não</label>
																</div>
															</div>
														</div>



														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Aceita financiamento?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="aceitaFinanciamento"
																		id="aceitaFinanciamento1" autocomplete="off" value="Sim"
																		v-model="aceitaFinanciamento">
																	<label class="btn btn-outline-success" for="aceitaFinanciamento1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="aceitaFinanciamento"
																		name="aceitaFinanciamento" id="aceitaFinanciamento2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="aceitaFinanciamento2">Não</label>
																</div>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Minha Casa Minha Vida?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mCasaMVida" id="mCasaMVida1"
																		autocomplete="off" value="Sim" v-model="mCasaMVida">
																	<label class="btn btn-outline-success" for="mCasaMVida1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mCasaMVida" name="mCasaMVida"
																		id="mCasaMVida2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mCasaMVida2">Não</label>
																</div>
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Total mensal em taxas (se houver)
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="taxasTotal" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Descrição das Taxas
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="taxasDescricao" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Aceita permuta?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="aceitaPermuta" id="aceitaPermuta1"
																		autocomplete="off" value="Sim" v-model="aceitaPermuta">
																	<label class="btn btn-outline-success" for="aceitaPermuta1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="aceitaPermuta"
																		name="aceitaPermuta" id="aceitaPermuta2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="aceitaPermuta2">Não</label>
																</div>
															</div>
														</div>

														<div class="col-9">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Descrição das Permutas
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="permutaDescricao" placeholder="Digite aqui...">
															</div>
														</div>
													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorPreco()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoCaracteristica()"
																	type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
																	<input class="form-check-input" v-model="caracteristicaImovel" type="checkbox" value=""
																		id="flexCheckDefault">
																	<label class="form-check-label" for="flexCheckDefault">
																		Default checkbox
																	</label>
																</div>

															</div>
														</div>

													</div>


													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorCaracteristica()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoLocalizacao()" type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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

													<div class="row mt-4">

														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	CEP
																</label>
																<div class="input-group">
																	<input type="text" class="form-control" placeholder="Digite aqui..." v-model="buscarCEP"
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
														<div class="col-5">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Complemento
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="complemento" placeholder="Consulte...">
															</div>
														</div>



														<div class="col-4">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Nº ou identificação da Unidade
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="idUnidade" placeholder="Consulte...">
															</div>
														</div>
														<div class="col-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Andar
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="selectAndar" placeholder="Consulte...">
															</div>
														</div>
														<div class="col-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Unidades por andar
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="undPorAndar" placeholder="Consulte...">
															</div>
														</div>
														<div class="col-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Total de andares
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="totalAndares" placeholder="Consulte...">
															</div>
														</div>
														<div class="col-2">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Total de torres
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="totalTorres" placeholder="Consulte...">
															</div>
														</div>



														<hr>

														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar andar do apartamento
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarAndar" id="mostrarAndar1"
																		autocomplete="off" value="Sim" v-model="mostrarAndar">
																	<label class="btn btn-outline-success" for="mostrarAndar1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarAndar"
																		name="mostrarAndar" id="mostrarAndar2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarAndar2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar o número da unidade
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarNUnidade" id="mostrarNUnidade1"
																		autocomplete="off" value="Sim" v-model="mostrarNUnidade">
																	<label class="btn btn-outline-success" for="mostrarNUnidade1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarNUnidade"
																		name="mostrarNUnidade" id="mostrarNUnidade2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarNUnidade2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar Logradouro no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarLogradouro" id="mostrarLogradouro1"
																		autocomplete="off" value="Sim" v-model="mostrarLogradouro">
																	<label class="btn btn-outline-success" for="mostrarLogradouro1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarLogradouro"
																		name="mostrarLogradouro" id="mostrarLogradouro2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarLogradouro2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar Bairro no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarBairro" id="mostrarBairro1"
																		autocomplete="off" value="Sim" v-model="mostrarBairro">
																	<label class="btn btn-outline-success" for="mostrarBairro1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarBairro"
																		name="mostrarBairro" id="mostrarBairro2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarBairro2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar complemento no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarComplemento" id="mostrarComplemento1"
																		autocomplete="off" value="Sim" v-model="mostrarComplemento">
																	<label class="btn btn-outline-success" for="mostrarComplemento1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarComplemento"
																		name="mostrarComplemento" id="mostrarComplemento2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarComplemento2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar número no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarNumero" id="mostrarNumero1"
																		autocomplete="off" value="Sim" v-model="mostrarNumero">
																	<label class="btn btn-outline-success" for="mostrarNumero1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarNumero"
																		name="mostrarNumero" id="mostrarNumero2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarNumero2">Não</label>
																</div>

															</div>
														</div>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Mostrar nome do Condomínio no site?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mostrarNCondo" id="mostrarNCondo1"
																		autocomplete="off" value="Sim" v-model="mostrarNCondo">
																	<label class="btn btn-outline-success" for="mostrarNCondo1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mostrarNCondo"
																		name="mostrarNCondo" id="mostrarNCondo2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mostrarNCondo2">Não</label>
																</div>

															</div>
														</div>


														<hr>
														<div class="col-3">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Localizar imóvel no mapa?
																</label>

																<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" class="btn-check" name="mapaCondo" id="mapaCondo1"
																		autocomplete="off" value="Sim" v-model="mapaCondo">
																	<label class="btn btn-outline-success" for="mapaCondo1">Sim</label>

																	<input type="radio" class="btn-check" value="Não" v-model="mapaCondo"
																		name="mapaCondo" id="mapaCondo2" autocomplete="off">
																	<label class="btn btn-outline-danger" for="mapaCondo2">Não</label>
																</div>

															</div>
														</div>

														<div class="col-12">
															<iframe
																src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14725.435606724364!2d-43.2618207!3d-22.6776796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1707888543130!5m2!1spt-BR!2sbr"
																width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" class="my-3"
																referrerpolicy="no-referrer-when-downgrade"></iframe>

															<div class="row">
																<div class="col-3">
																	<div class="mb-3">
																		<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																		<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																		<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																			Mostrar mapa no site?
																		</label>

																		<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																			<input type="radio" class="btn-check" name="garagemCoberta" id="btnradio1"
																				autocomplete="off" value="Sim" v-model="selectGaragemCobertura">
																			<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																			<input type="radio" class="btn-check" value="Não" v-model="selectGaragemCobertura"
																				name="garagemCoberta" id="btnradio2" autocomplete="off">
																			<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																		</div>

																	</div>
																</div>
																<div class="col-3">
																	<div class="mb-3">
																		<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																		<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																		<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																			Mostrar localização exata?
																		</label>

																		<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																			<input type="radio" class="btn-check" name="garagemCoberta" id="btnradio1"
																				autocomplete="off" value="Sim" v-model="selectGaragemCobertura">
																			<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																			<input type="radio" class="btn-check" value="Não" v-model="selectGaragemCobertura"
																				name="garagemCoberta" id="btnradio2" autocomplete="off">
																			<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																		</div>

																	</div>
																</div>
																<div class="col-3">
																	<div class="mb-3">
																		<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																		<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																		<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																			Ativar StreetView?
																		</label>

																		<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																			<input type="radio" class="btn-check" name="garagemCoberta" id="btnradio1"
																				autocomplete="off" value="Sim" v-model="selectGaragemCobertura">
																			<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																			<input type="radio" class="btn-check" value="Não" v-model="selectGaragemCobertura"
																				name="garagemCoberta" id="btnradio2" autocomplete="off">
																			<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																		</div>

																	</div>
																</div>

																<div class="col-12">
																	<iframe class="my-3"
																		src="https://www.google.com/maps/embed?pb=!4v1707889331429!6m8!1m7!1sa0-XByQp0pchr1GOj9xQ8A!2m2!1d-22.92151936264778!2d-43.23568712578175!3f238.24871274054573!4f-29.797796874639346!5f0.7820865974627469"
																		width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
																		referrerpolicy="no-referrer-when-downgrade"></iframe>

																	<div class="col-3">
																		<div class="mb-3">
																			<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																			<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																			<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																				Mostrar StreetView no site?
																			</label>

																			<!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

																			<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
																				<input type="radio" class="btn-check" name="garagemCoberta" id="btnradio1"
																					autocomplete="off" value="Sim" v-model="selectGaragemCobertura">
																				<label class="btn btn-outline-success" for="btnradio1">Sim</label>

																				<input type="radio" class="btn-check" value="Não" v-model="selectGaragemCobertura"
																					name="garagemCoberta" id="btnradio2" autocomplete="off">
																				<label class="btn btn-outline-danger" for="btnradio2">Não</label>
																			</div>

																		</div>
																	</div>



																</div>

															</div>

														</div>


													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoProximidades()" type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
																	<input class="form-check-input" v-model="proximidades" type="checkbox" value=""
																		id="flexCheckDefault">
																	<label class="form-check-label" for="flexCheckDefault">
																		Default checkbox
																	</label>
																</div>

															</div>
														</div>

													</div>
													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoDescricao()" type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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

													<div class="row mt-4">

														<div class="col-12">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Titulo da página de detalhamento do imóvel
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control"
																	v-model="titleImovel" placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-12">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Texto de apresentação do imóvel
																</label>

																<textarea class="form-control" v-if="!mostrarSkeleton" v-model="apresentacaoImovel"
																	style="height:100px" placeholder="Digite aqui..."></textarea>
															</div>
														</div>


													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoComplemento()" type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Vídeo do Imóvel: Insira a URL do seu vídeo no Youtube
																	<button type="button" class="btn btn-danger ms-2"
																		style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
																		<i class="fa fa-trash me-2"></i> Remover Vídeo
																	</button>
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="urlYT"
																	placeholder="Digite aqui...">
															</div>
														</div>

														<div class="col-12">
															<div class="mb-3">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Apresentação 360°: Insira a URL 360° do seu imóvel
																	<button type="button" class="btn btn-danger ms-2"
																		style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
																		<i class="fa fa-trash me-2"></i> Remover 360°
																	</button>
																</label>
																<input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="url360"
																	placeholder="Digite aqui...">
															</div>
														</div>


													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoImagem()" type="button">Próximo <i
																		class="fa fa-arrow-right" aria-hidden="true"></i></button>
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

													<div class="row mt-4">

														<ul class="nav nav-underline d-flex justify-content-center mb-5">
															<li class="nav-item">
																<a class="btn btn-outline-dark" aria-current="page" href="#">FOTOS DO IMÓVEL</a>
															</li>
															<li class="nav-item">
																<a class="btn btn-outline-dark"  aria-current="page" href="#">PLANTAS DO IMÓVEL</a>
															</li>
															<li class="nav-item">
																<a class="btn btn-outline-dark" href="#">FOTOS PRIVADAS</a>
															</li>
														</ul>


														<div class="col-12 text-center">
															<i class="far fa-images mb-4" style="font-size: 7rem;"></i>
															<h4>Você ainda não enviou nenhuma foto.</h4>

															<div class="mb-3 d-flex flex-column align-items-center mt-4">
																<div v-if="mostrarSkeleton" class="skeleton-label"></div>
																<div v-if="mostrarSkeleton" class="skeleton-input"></div>
																<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
																	Que tal enviar agora?
																</label>
																	<!-- <input type="text" required v-if="!mostrarSkeleton" class="form-control"
																		v-model="areaConstruida" placeholder="Digite aqui...">
																	<span class="input-group-text">m²</span> -->

																	<label for="formFile" class="form-label bg-warning"><i class="fa fa-plus me-2"></i> Enviar fotos </label>
																	<input  v-if="!mostrarSkeleton"  class="form-control d-none" type="file" id="formFile" multiple>

															</div>
														</div>


													</div>

													<hr>
													<div class="row mt-3">
														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-block">
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleProximoPublicacao()" type="button">Próximo
																	<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
																<button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button"><i
																		class="fa fa-arrow-left" aria-hidden="true"></i>
																	Anterior</button>
															</div>
														</div>

														<div class="col-md-6">
															<div class="d-grid gap-2 d-md-flex justify-content-md-end">
																<button class="btn btn-success" @click="handleFinish()" type="button">Finalizar<i
																		class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'
export default {
	name: 'CadImoveisView',
	components: {
		Sidebar,
		Navbar,
		Footer
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