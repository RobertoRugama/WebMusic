<template lang="pug">
 
    <div id="app">
      <img src="./assets/logo.png" alt="">
      <h1>{{msg}}</h1>
      <h2>Esentianl Links</h2>
      <p v-show="showValue">{{value}}</p>
      <p v-if="showValue">{{value}}</p>
      <p v-else-if="false">{{ 'algo mas' }}</p>
      <p v-else> {{ 'Lo ultimo' }}</p>

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
      items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
