<template lang="pug">
 
    #app
      img(src="./assets/logo.png")
      h1 {{ msg}}
      h2 Essential Links

      p {{1+1}}
      p {{'Hola'+'Mundo'}}

      p {{ person.name }}

      p {{ person.name.toUpperCase() }}

      p {{ JSON.stringify(person) }}
      p {{true? 'true':'false' }}
  
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

      person: {
        name:'Roberto'
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
