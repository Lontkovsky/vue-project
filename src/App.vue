<template>
  <div id="app">
    <HelloWorld :currentPrice="currentPrice"/>
    <FormSubmit/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import FormSubmit from './components/FormSubmit'
import Vue from "vue"
import Vuex from "vuex"
import Vapi from "vuex-rest-api"
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.use(Vuex)

const posts = new Vapi({
  baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
  state: {
    prices: {}
  }
})

  .get({
    action: "getCurrencyRate",
    property: "prices",
    path: "/"
  })
  .getStore()

const store = new Vuex.Store(posts)

export default {

  data() {
  return {
    currentPrice: ""
  }
  },

  created() {
    store.dispatch('getCurrencyRate')
      .then(() => {
        this.currentPrice = store.state.prices.bpi.USD.rate
      })
  },

  components: {
    HelloWorld,
    FormSubmit
  }
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
