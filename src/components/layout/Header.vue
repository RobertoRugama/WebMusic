<template>
	<section class="hero is-success">
		<div class="hero-head">
			<header class="nav">
				<div class="container">
					<div class="nav-left">
						<div class="nav-right nav-menu">
							<router-link class="nav-item" to="/">| Buscar |</router-link>
							<router-link class="nav-item" to="about">Nosotros |</router-link>
						</div>

					</div>
				</div>
			</header><!-- /header -->
		</div>
		<div class="hero-body">
			<div class="container">
				<div class="has-text-centered">
					<h1 class="title">Music Spotyfi</h1>
					<h2 class="subtitle">Cansiones API Spotify</h2>
					<PmPlayer></PmPlayer>
				</div>	
			</div>
		</div>
	</section>
</template>
<script>
import PmPlayer from '@/components/Player.vue'
export default {
	components: { PmPlayer }
}
</script>
<style lang="scss" scoped>
h1,h2 {
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
</style>
