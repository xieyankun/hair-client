<template>
  <div class="personal">
    <h-title></h-title>
    <div class="pers-info">
      <div class="avator">
        <img src="../../assets/hair.jpg" alt="">
      </div>
      <div class="info">
        <p>姓  名：谢严坤</p>
        <p>类  型：钻石会员</p>
        <p>电  话：18312345678</p>
        <p>会员号：1234567890</p>
      </div>
    </div>
    <div class="matter">
      <div class="p-item">
        <img src="../../assets/order.png" alt="">
        <p>我的预约</p>
      </div>
      <div class="p-item">
        <img src="../../assets/order.png" alt="">
        <p>我的积分</p>
      </div>
      <div class="p-item">
        <img src="../../assets/order.png" alt="">
        <p>优惠券</p>
      </div>
      <div class="p-item">
        <img src="../../assets/order.png" alt="">
        <p>消息中心</p>
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
export default {
  components: {
    'h-title': titleBar
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .pers-info{
    width: 90%;
    margin: 0.32rem auto;
    border-radius: 8px;
    box-shadow: 0 0 10px #6f6f6f;
    background-color: #FFF;
    display: flex;
    padding: 0.32rem;
    .avator{
      padding-right: 0.32rem;
      img{
        width: 1.44rem;
        height: 1.44rem;
        border-radius: 50%;
      }
    }
    .info{
      flex: 1;
      text-align: left;
      p{
        padding: 0.16rem 0;
      }
    }
  }
  .matter{
    width: 90%;
    margin: 0.32rem auto;
    display: flex;
    background-color: #FFF;
    .p-item{
      flex: 1;
      border: 1px solid #9e9e9e;
      padding: 0.32rem 0;
      img{
        width: 0.64rem;
      }
      p{
        padding: 16px 0 0 0;
      }
    }

  }
</style>
