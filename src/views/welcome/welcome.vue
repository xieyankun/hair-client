<template>
    <select-shop></select-shop>
</template>

<script>
  import selectShop from '@/components/selectShop/selectShop.vue'
  export default {
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      getAllShops () {
      }
    },
    components: {
      'select-shop': selectShop
    }
  }
</script>

<style lang="scss" scoped>
  .mask{
    background-color: #f8f8f8;
    position: relative;
    margin: 3rem 0.48rem 0;
  }
  .layer{
    margin-top: 20%;
  
    .title{
      position: absolute;
      top: -1rem;
      font-size: 0.48rem;
    }
    .layer {
        background-color: #fff;
        margin: 3.5rem 1rem;
        border-radius: 2px;
        padding-bottom: .5rem;
    }
    .inner {
      display: flex;
      padding: 0.32rem 0.24rem;
      border-bottom: 1px solid #999;
    }
    .ctnWrap{
      flex: 1;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 0.32rem;
      p{
        max-width: 6rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .logo {
        width: 1.28rem;
        height: 1.28rem;
        float: left;
    }
  }
  .icon{
    display: flex;
    align-items: center;
    i{
        font-size: 0.64rem;
      }
  }
</style>
