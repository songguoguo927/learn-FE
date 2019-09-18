<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{totalPrice}}
    <transition name="fade">
      <keep-alive><router-view/></keep-alive>
    </transition>
    <!-- <Apple/> -->
    <!-- <Banana/> -->
    <router-link :to="{path:'apple'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
  </div>
</template>

<script>
import Apple from './components/Apple'
import Banana from './components/Banana'
export default {
  // components:{Apple,Banana},
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
    }
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
