<template lang="pug">
 
    <div id="app">
      <img src="./assets/logo.png" alt="">
      <h1>{{msg}}</h1>
      <h2>Esentianl Links</h2>
      <p v-show="showValue">{{value}}</p>
      <p v-if="showValue">{{value}}</p>
      <p v-else-if="false">{{ 'algo mas' }}</p>
      <p v-else> {{ 'Lo ultimo' }}</p>

      <input v-model="name">
      <input v-model="lasName">
      <input type="date" v-model="date">
      <input type="date" v-model="date2">
      <p>{{cumpleanos}}</p>
      <p>{{ fullName }}</p>
      <button v-on:click="format">Formatear</button>

      <p> {{ formattedName }}</p>

      <a v-bind:href="url">Mi Correo</a>

      <ul >
        <li v-for="i in items">{{ i }}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showValue :false,
      value:  'algo',
      items: [1,2,3,4,5],
      name: '',
      lasName: '',
      date:'',
      date2:'',
      formattedName: '',
      
      url: 'https://mail.google.com/mail/u/0/#inbox'
    } 
  },
    computed: {
      fullName (){
        return this.name +' '+ this.lasName
      },

      cumpleanos (){
        
      return this.date - this.date2;
      }
    }
    ,
    methods: {
      format(){
        this.formattedName = this.name.split(' ').join('/').toUpperCase()
      }
    }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
