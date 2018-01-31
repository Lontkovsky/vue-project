<template>
  <div id="currencyPrice">BTC/USD: 1 BTC = {{currentPrice}} USD</div>
</template>

<script>
  export default {
    props: {
      currentPrice: {
        type: String,
        default: ""
      },
    }
  }
</script>
