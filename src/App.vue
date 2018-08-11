<template>
  <div id="app">
    <PmHeader></PmHeader>
    <PmNotification v-show="showNotification">
      <p slot="body">No se Encontraron Resultados...</p>
    </PmNotification>
    <PmLoader v-show="isLoading"></PmLoader>
    <section class="section" v-show="!isLoading">
      <nav class="nav has-shadow">
        <div class="container">
          <input class="input is-large" type="text" v-model="searchQuery" placeholder="Buscar Musicas">
            <a class="button is-info is-large" v-on:click="search">Buscar</a>
            <a class="button is-danger is-large">&times;</a>
        </div>
          <p>
            <small>{{ searchMessage }}</small>
          </p>
          <div class="container result">
          <div class="columns is-multiline">
             <div class="column is-one-quarter" v-for="d in dataMusicArtist">
              <PmTrack v-bind:class="{ 'is-active': d.id===selectedTrack }" v-bind:track="d" v-on:select="setSelectedTrack"></PmTrack> 
             </div>
          </div> 
          </div>
      </nav>
    </section>
    <PmFooter></PmFooter>
  </div>
</template>
<script>
 import trackServices from '@/services/track.js'
 import PmFooter from '@/components/layout/Footer.vue'
 import PmHeader from '@/components/layout/Header.vue'
 import PmTrack from '@/components/Track.vue'
 import PmNotification from '@/components/shared/Notification.vue'
 import PmLoader from '@/components/shared/Loader.vue'

 
 export default {
  name: 'app',
    data () {
    return {
     searchQuery: '',
     dataMusicArtist: [],
     isLoading:false,
     selectedTrack: '',
     showNotification: false

    }
  },
  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification},
  computed: {
    searchMessage(){
      return `Cansiones Encontradas ${this.dataMusicArtist.length}`
    }
  },

  watch:{
    showNotification(){
      if (this.showNotification) {
        setTimeout(()=> {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search(){
    if (!this.searchQuery){
       alert('Ingrese un valor para realizar la busqueda')
     } else {
     this.isLoading = true
       
        trackServices.search(this.searchQuery)
        .then(res => {
          
          this.showNotification = res.tracks.total === 0
          this.dataMusicArtist = res.tracks.items
          this.isLoading = false
          })
        }
        },
        setSelectedTrack (id){
          this.selectedTrack=id

      }
} 
}
</script>

<style lang="scss">
@import './scss/main.scss';
.result{
  margin-top: 50px
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
