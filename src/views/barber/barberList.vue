<template>
  <div class="barber">
    <h-title></h-title>
    <ul class="barber-wrap">
      <li class="barber-item">
        <router-link :to="{name: 'BarberInfo', params: {bid: 1}}" class="barber-list">
          <div class="img-wrap">
            <img src="../../assets/1.jpg" alt="">
          </div>
          <div class="info">
            <p><span class="username">item.username</span>（item.leve）</p>
            <p class="tag"><span>tag</span><span>tag</span><span>tag</span></p>
          </div>
        </router-link>
      </li>
      <li class="barber-item">
        <router-link :to="{name: 'BarberInfo', params: {bid: 1}}" class="barber-list">
          <div class="img-wrap">
            <img src="../../assets/1.jpg" alt="">
          </div>
          <div class="info">
            <p><span class="username">item.username</span>（item.leve）</p>
            <p class="tag"><span>tag</span><span>tag</span><span>tag</span></p>
          </div>
        </router-link>
      </li>
    </ul>
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
      url: `http://192.168.1.106:8888/api/front/shop/${this.$route.params.sid}/barbers/`,
      barberlist: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .barber-wrap{
    text-align: left;
    .barber-item{
      margin-bottom: 4px;
    }
    .barber-list{
      display: flex;
      background-color: #fff;
      padding-left: 24px;
    }
    .img-wrap{
      width: 2rem;
      height: 2rem;
      display: inline-flex;
      align-items: center;
      img{
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }
    .info{
      flex: 1;
      display: flex;
      padding: 12px 24px;
      justify-content: space-around;
      flex-direction: column;
      align-items: flex-start;
      .username{
        font-size: 0.48rem;
      }
      .tag{
        span{
          border: 2px solid #00bfbf;
          padding: 0 14px;
          border-radius: 8px;
          margin-right: 8px;
          color: #00bfbf;
          font-size: 0.34rem;
        }
      }
    }
  }
</style>
