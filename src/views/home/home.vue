<template>
    <div class="container">
      <h-title></h-title>
      <h-swipe :swipeList="swipeListInfo"></h-swipe>
      <div class="base-info">
        <ul>
          <li>
            <router-link :to="{name: 'Activity'}" class="piece">
              <div class="info-wrap">
                <i v-bind:class="" class="icon hairfont"></i>
                <p class="title">近期活动</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'BarberList'}" class="piece">
              <div class="info-wrap">
                <i v-bind:class="" class="icon hairfont"></i>
                <p class="title">理发师</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'DesignList'}" class="piece">
              <div class="info-wrap">
                <i v-bind:class="" class="icon hairfont"></i>
                <p class="title">发型设计</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'Personal'}" class="piece">
              <div class="info-wrap">
                <i v-bind:class="" class="icon hairfont"></i>
                <p class="title">个人中心</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="service">
        <h1>门店服务</h1>
        <ul class="service-list">
          <li v-for="item in serviceList">
            <router-link :to="{name: 'welcome', params: {seid: item.id}}" class="piece">
              <div class="info-wrap">
                <i class="icon hairfont hair-zhuye"></i>
                <p class="title">{{item.name}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
import swipe from '@/components/swipe/swipe'
import API from '@/services/home_data'
import axios from 'axios'
export default {
  components: {
    'h-title': titleBar,
    'h-swipe': swipe
  },
  data () {
    return {
      serviceList: [],
      swipeListInfo: []
    }
  },
  mounted () {
    let getRequest = [this.getSwipeList(), this.getServiceList()]
    axios.all(getRequest)
  },
  methods: {
    getSwipeList () {
      let _this = this
      let shopId = _this.$route.params.sid
      API.getSwipeList(shopId).then((res) => {
        _this.swipeListInfo = res.results
      })
    },
    getServiceList () {
      let _this = this
      let shopId = this.$route.params.sid
      API.getShopService(shopId).then((res) => {
        _this.serviceList = res.results
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .swipe{
    height: 5rem;

    img{
      width: 100%;
    }
  }

  .piece{
    width: 100%;
    display: block;
    padding-bottom: 100%;
    position: relative;
  }
  .info-wrap{
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    i{
      font-size: 0.853333rem;
    }
  }

  .base-info{
    ul{
      display: flex;
      margin-top: 0.64rem;
      margin-right: 12px;
      li{
        flex: 25%;
        background-color: #00bfbf;
        margin-left: 12px;
        border-radius: 8px;
        i{
          color: #FFF;
        }
        p{
          font-size: 0.373333rem;
          color: #FFF;
        }
      }
    }
  }
  .service{
    padding-top: 0.96rem;

    h1{
      font-size: 0.64rem;
      text-align: left;
      padding-left: 0.5rem;
      color: #6d6768;
    }
    
    .service-list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.64rem;
      margin-right: 12px;

      li{
        width: 25%;
        margin-bottom: 0.32rem;
        p{
          color: #00bfbf;
          margin: 0.32rem
        }
      }
    }

  }
</style>

