<template>
  <div class="hello">
    <div id="currencyPrice">BTC/USD: 1 BTC = {{price}} USD</div>
  </div>
</template>

<script>
  import getService from '../services/getService.js'

  export default {
  data: () => ({
    price: ""
  }),

  created () {
    this.price = getService.price
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
