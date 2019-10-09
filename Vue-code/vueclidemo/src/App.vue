<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div v-red="color">{{totalPrice}}</div>
    <transition name="fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Apple />
    <Banana />
    <button onclick="unbind()">解绑</button>
    <!-- <router-link :to="{path:'apple'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>-->
  </div>
</template>

<script>
function unbind(){
  
}
import Apple from "./components/Apple";
import Banana from "./components/Banana";
// import MyTransfer from './components/MyTransfer'
import Vue from "vue";
/*Vue.directive("red", function(el, binding) {
  console.log(el);
  console.log(binding);
  el.style = "color:" + binding.value;
});*/
Vue.directive("red", {
  bind: function(el, binding) {
    //被绑定
    console.log("1 - bind");
    console.log(el);
    console.log(binding);
    el.style = "color:" + binding.value;
  },
  inserted: function() {
    //绑定到节点
    console.log("2 - inserted");
  },
  update: function() {
    //组件更新
    console.log("3 - update");
  },
  componentUpdated: function() {
    //组件更新完成
    console.log("4 - componentUpdated");
  },
  unbind: function() {
    //解绑
    console.log("5 - unbind");
  }
});
export default {
  //  ,MyTransfer
  components: { Apple, Banana},
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice;
    }
  },
  name: "App",
  data: function() {
    return {
      color: "red"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
