<template>
    <div id="app">
      <section class="section">
       <nav class="nav has-shadow">
        <div class="container">
          <input class="input is-large" type="text", placeholder="Buscar Musicas", v-model="searchQuery">
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-danger is-large">&times;</a>
        </div>
        <div class="container columns colum">
          
        </div>
      </nav>
      
    </section>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search(){
      console.log(this.searchQuery)
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
