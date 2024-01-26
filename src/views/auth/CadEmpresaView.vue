<template>
	<div class="container-fluid">
		<div class="row">

			<div class="roll col-6 d-flex flex-column justify-content-center align-items-center px-5">
				<img src="../../../assets/images/logo.svg" class="mb-5" alt="">
				<div class="area-login px-4 mt-2">

					<h1 class="title-login">Quase lá</h1>
					<p>Preencha os dados da sua empreasa</p>
					

					<form class="row g-3">
						<div class="col-md-12">
							<label for="inputEmail4" class="form-label">Nome da empresa</label>
							<input type="email" class="form-control" id="inputEmail4">
						</div>
						<div class="col-md-6">
							<label for="inputPassword4" class="form-label">Razão social</label>
							<input type="password" class="form-control" id="inputPassword4">
						</div>
						<div class="col-6">
							<label for="inputAddress" class="form-label">Campo sem nome</label>
							<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
						</div>
						<div class="col-6">
							<label for="inputAddress2" class="form-label">Data de abertura</label>
							<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
						</div>
						<div class="col-md-6">
							<label for="inputCity" class="form-label">Enviar CNPJ</label>
							<input type="text" class="form-control" id="inputCity">
						</div>
						<div class="col-md-4">
							<label for="inputZip" class="form-label">CEP</label>
							<input type="text" class="form-control" id="inputZip">
						</div>
						<div class="col-md-2">
							<label for="inputZip" class="form-label">Número</label>
							<input type="text" class="form-control" id="inputZip">
						</div>
						<div class="col-md-6">
							<label for="inputZip" class="form-label">Complemento</label>
							<input type="text" class="form-control" id="inputZip">
						</div>
						<div class="col-md-12">
							<label for="inputZip" class="form-label">Endereço</label>
							<input type="text" class="form-control" id="inputZip">
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-dark bot mt-4">Continuar</button>
						</div>
					</form>

					<div class="login-links d-flex justify-content-center mt-5">
						<a href="">Já tenho empresa cadastrada</a>
					</div>
				</div>
			</div>

			<div class="col-6 p-0 ">
				<div class="bg-login">
					<div class="gradientCad d-flex flex-column justify-content-center align-items-center px-5">
						<img src="../../../assets/images/logo-transparente2.png" class="img-fluid" alt="">
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	name: 'CadEmpresaView'
}
</script>