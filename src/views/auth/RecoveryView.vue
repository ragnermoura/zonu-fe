<template>
	<div class="container-fluid">
		<div class="row">

			<div class="col-6 d-flex flex-column justify-content-center align-items-center px-5">
				<img src="../../../assets/images/logo.svg" class="mb-5" alt="">
				<div class="area-login px-4 mt-2">

					<h1 class="title-login">Recuperação de senha</h1>
					<p>Insira seu email para enviarmos as informações necessárias para recuperar a sua senha</p>

					<form>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">Email </label>
							<input type="email" class="form-control" name="email" placeholder="">
						</div>
						<button type="submit" class="btn btn-dark bot mt-4">Recuperar senha</button>
					</form>
					<div class="login-links d-flex justify-content-center mt-5">
						<a href="">Já tenho uma conta</a>
					</div>
				</div>
			</div>

			<div class="col-6 p-0">
				<div class="bg-login">
					<div class="gradient d-flex flex-column justify-content-center align-items-center px-5">
						<img src="../../../assets/images/logo-transparente2.png" class="img-fluid" alt="">
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	name: 'RecoveryView'
}
</script>