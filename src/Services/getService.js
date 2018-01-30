import Vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default new Vue ({

  data: () => ({
    price: ""
  }),

  created: async function () {
    const json = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    this.price = json.data.bpi.USD.rate
  }
})

