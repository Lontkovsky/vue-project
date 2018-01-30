import Vue from 'vue'
import axios from 'axios'

export default new Vue ({

  data: () => ({
    price: ""
  }),

  beforeCreate: {
    async function () {
      const json = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      this.price = json.data.bpi.USD.rate
    }
  }
})
