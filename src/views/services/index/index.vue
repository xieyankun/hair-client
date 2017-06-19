<template>
  <div class="service">
    <div class="img-wrap">
        <img src="../../../assets/service.jpg" alt="">
    </div>
    <div class="introduce-wrap">
        <h1>服务介绍</h1>
        <p>service.desc</p>
    </div>

    <div class="fee-wrap">
      <h1>理发费用</h1>
      <div class="fee-item">
        <p><span>item.name</span><span>item.prices</span></p>
        <p><span>item.name</span><span>item.prices</span></p>
        <p><span>item.name</span><span>item.prices</span></p>
        <p><span>item.name</span><span>item.prices</span></p>
      </div>
    </div>

    <div class="btn-wrap">
        <router-link :to="{name: 'Haircut'}" class="goOrder">
          预约理发
        </router-link>
       
    </div>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        service: {}
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .service{
    h1{
        font-size: 0.64rem;
        text-align: left;
        color: #4a5a76;
    }
    p{
        font-size: 0.426667rem;
    }
  }
  .img-wrap{
    img{
        width: 100%;
    }
  }
  .introduce-wrap{
    width: 100%;
    background-color: #FFF;
    text-align: left;
    padding: 0.32rem;
    box-sizing: border-box;
  }

  .fee-wrap{
    background-color: #fff;
    margin-top: 0.16rem;
    padding-top: 0.32rem;
    .fee-item{
      margin: 0.32rem 0;
    }
    h1{
      text-indent: 0.32rem;
    }
    p{
      font-size: 0.533333rem;
      display: flex;
      justify-content: space-between;
      padding: 0.16rem 0.48rem;
      border-bottom: 1px solid #999;
      color: #666;
    }
  }

  .btn-wrap{
    margin: 1.12rem 0.96rem;

    .goOrder{
      font-size: 0.48rem;
      padding: 0.213333rem 0.48rem;
      background-color: #00bfbf;
      border-radius: 8px;
    }
  }
</style>
