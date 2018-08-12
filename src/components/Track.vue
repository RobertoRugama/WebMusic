<template>
	<div class="card" v-if="track && track.album">
		<div class="card-image">
			<figure class="image is-1by1">
				<img :src="track.album.images[0].url">	
				
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img :src="track.album.images[0].url">
					</figure>			
				</div>
				<div class="media-content">
					<p class="title is-6">
						<strong>{{ track.name }}</strong>
					</p>
					<p class="subtitle is-9">
					{{ track.artists[0].name }}</p>		
				</div>
			</div>
			<div class="content">
				<small>
				 {{ track.duration_ms }}
				</small>
				<nav class="level">
					<div class="level-left">
						<a class="level-item">
							<span v-on:click="selectTrack"> Reproducir</span>
						</a>
						<a class="level-item">
							<span v-on:click="goToTrack(track.id)"> Detalle </span>
						</a>
					</div>		
				</nav>
			</div>
		</div>	
	</div>
</template>

<script>
	export default {
		props: {
			track: { type: Object, required: true }
		
		},
		methods: {
			selectTrack(){
				this.$emit('select', this.track.id )
				this.$bus.$emit('set-track', this.track)
			},
			goToTrack (id) {
				this.$router.push({ name: 'track', params: { id } })
			}
		}
	}
</script>

<style lang="scss">
	
</style>