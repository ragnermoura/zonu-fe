<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-6 d-flex flex-column justify-content-center align-items-center px-5">
				<div v-if="mostrarSkeleton" class=" mb-5 skeleton-logo"></div>
				<img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="">

				<div class="area-login px-4">

					<div v-if="mostrarSkeleton" class="skeleton-title"></div>
					<h1 v-if="!mostrarSkeleton" class="title-login mt-5">Bem-vindo(a) de volta</h1>

					<div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
					<p v-if="!mostrarSkeleton">Preencha seus dados para acessar a sua conta</p>

					<div class="mt-4">
						<div class="mb-3">
							<div v-if="mostrarSkeleton" class="skeleton-label"></div>
							<div v-if="mostrarSkeleton" class="skeleton-input"></div>
							<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">E-mail </label>
							<input type="email" v-if="!mostrarSkeleton" class="form-control" name="email"
								placeholder="Digite aqui o seu e-mail">
						</div>
						<div class="mb-3">
							<div v-if="mostrarSkeleton" class="skeleton-label"></div>
							<div v-if="mostrarSkeleton" class="skeleton-input"></div>
							<label v-if="!mostrarSkeleton" for="exampleInputPassword1" class="form-label">Senha</label>
							<input placeholder="Digite aqui o sua senha" v-if="!mostrarSkeleton" type="password"
								class="form-control" name="senha">
						</div>

						<div class="row mt-2">
							<div class="col-8">
								<div v-if="mostrarSkeleton" class="skeleton-esqueci"></div>
								<a v-if="!mostrarSkeleton" href="/recovery" style="text-decoration: none;">Esqueci a senha | </a>
								<a v-if="!mostrarSkeleton" href="/cadastro" style="color: #C66976; text-decoration: none;">Ainda não
									tenho cadastro</a>
							</div>
						</div>
						<div v-if="mostrarSkeleton" class="skeleton-button mt-4"></div>
						<button v-if="!mostrarSkeleton" type="submit" class="btn btn-dark bot mt-4">Acessar sua
							conta</button>

						<div v-if="mostrarSkeleton" class="skeleton-text-line mt-3"></div>
						<p v-if="!mostrarSkeleton" class="text-center mt-3">Ou use</p>

						<div class="row d-flex justify-content-center align-items-center">
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button v-if="!mostrarSkeleton" type="button" class="btn btn-google bot"><i class="fa fa-google fa-2x"
										aria-hidden="true"></i> </button>
							</div>
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button v-if="!mostrarSkeleton" type="button" class="btn btn-instagram bot"><i class="fa fa-instagram fa-2x"
										aria-hidden="true"></i></button>
							</div>
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button v-if="!mostrarSkeleton" type="button" class="btn btn-facebook bot"><i class="fa fa-facebook fa-2x"
										aria-hidden="true"></i></button>
							</div>
						</div>
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
	name: 'LoginView',
	data() {
		return {
			mostrarSkeleton: true,
		}
	},
	mounted() {
		setTimeout(() => {
			this.mostrarSkeleton = false;
		}, 2000)
	}
}
</script>