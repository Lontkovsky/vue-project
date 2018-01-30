<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {

  data() {
  return{
    currencyPrice: {

    }
  }
  },

  components: {
    HelloWorld
  },

  methods: {
    getCurrencyPrice: function() {
      this.$http.get('/https://api.coindesk.com/v1/bpi/currentprice.json', {

      })
    }
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
