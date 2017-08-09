<template>
    <div class="welcome">
      <select-shop :shopList="shopListInfo"></select-shop>
    </div>
</template>

<script>
  import selectShop from '@/components/selectShop/selectShop.vue'
  import API from '@/services/shop_list'
  export default {
    data () {
      return {
        shopListInfo: []
      }
    },
    mounted () {
      this.getShopsList()
    },
    methods: {
      getShopsList () {
        let _this = this
        API.getShopList().then((res) => {
          console.log('----------------')
          console.log(res)
          _this.shopListInfo = res.results
        })
      }
    },
    components: {
      'select-shop': selectShop
    }
  }
</script>

<style lang="scss" scoped>
</style>
