<template>
  <div class="hello">
    <div id="currencyPrice">BTC/USD: 1 BTC = {{price}} USD
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'hello',
  data: () => ({
    price: ""
  }),

  created: async function () {
     const json = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
     this.price = json.data.bpi.USD.rate
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
