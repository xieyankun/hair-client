<template>
  <div class="barber">
    <h-title></h-title>
    <ul class="barber-wrap">
      <li class="barber-item" v-for="item in barberlist">
        <router-link :to="{name: 'BarberInfo', params: {bid: item.id}}" class="barber-list">
          <div class="img-wrap">
            <img :src="item.img" alt="">
          </div>
          <div class="info">
            <p><span class="username">{{item.name}}</span>（{{item.position}}）</p>
            <p class="tag">
              <span v-for="tag in item.staff_tags">{{tag.tag}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
import API from '@/services/barber_data'
export default {
  components: {
    'h-title': titleBar
  },
  data () {
    return {
      barberlist: []
    }
  },
  mounted () {
    this.getBarberList()
  },
  methods: {
    getBarberList () {
      let _this = this
      let shopId = _this.$route.params.sid
      API.getBarberList(shopId).then((response) => {
        console.log(response)
        _this.barberlist = response.results
      })
    }
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
