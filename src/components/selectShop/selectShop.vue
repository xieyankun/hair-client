<template>
  <div class="m-selectShop">
    <div class="mask">
      <div class="layer">
        <h3 class="title">切换场馆</h3>
        <ul class="list">
            <li class="f-cf" v-for="item in shopList">
              <router-link :to="{name: 'Home', params: {sid: item.id}}" class="inner">
                <img :src="item.logo" alt="" class="logo f-fl"/>
                <div class="ctnWrap">
                    <h4 class="f-thide">{{item.name}}</h4>
                    <p>{{item.address}}</p>
                </div>
                <div class="icon">
                  <i class="icon hairfont hair-youjiantou"></i>
                </div>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shopList: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      console.log(this.shopList)
    },
    methods: {
      getAllShops () {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask{
    background-color: #f8f8f8;
    position: relative;
    margin: 3rem 0.48rem 0;

    h4{
      font-size: 0.48rem;
    }
    p{
      font-size: 0.426667rem;
    }
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
