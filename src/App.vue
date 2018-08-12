<template>
  <div id="app">
    <PmHeader></PmHeader>
    
    <router-view></router-view>
    <PmFooter></PmFooter>
  </div>
</template>
<script>
 import PmHeader from '@/components/layout/Header.vue'
 import PmFooter from '@/components/layout/Footer.vue'
 export default {
  name: 'app',
  components: { PmHeader, PmFooter }
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
body{
  background: linear-gradient(90deg, #53bbbf 10%, #0f1939 90%);

}
</style>
