<template>
  <div class="haircut">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">今天</mt-tab-item>
      <mt-tab-item id="2">明天</mt-tab-item>
      <mt-tab-item id="3">后天</mt-tab-item>
    </mt-navbar>
    <h-title></h-title>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="timetables">
          <li v-for="time in times" 
              @click="selectSort(time)" 
              :class="{'active': time.show === true}">
            {{time.time}}
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="timetables">
          <li v-for="time in times" 
              @click="selectSort(time)" 
              :class="{'active': time.show === true}">
            {{time.time}}
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul class="timetables">
          <li v-for="time in times" 
              @click="selectSort(time)" 
              :class="{'active': time.show === true}">
            {{time.time}}
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="divide-wrap">
      <div class="sub-title">
        理发师
      </div>
      <ul class="barber-list">
        <li v-for="(item, index) in barberlist" 
            :class="{'z-active': currentIndex == item.id}" 
            @click.prevent="selectBarber(item.id)">
          <div class="img-wrap">
            <img :src="item.img" alt="">
          </div>
          <div class="name">
            <router-link :to="{name: 'BarberInfo', params: {bid: item.id}}">
              {{item.name}}
              {{index}}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <p class="tips">不选，默认随机理发师</p>
    <div class="appoin">
      <button class="btn default" @click="submit()">确认预约</button>
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
import API from '@/services/service_data'
export default {
  components: {
    'h-title': titleBar
  },
  data () {
    return {
      selected: '1',
      showSlide: !0,
      barberlist: [],
      currentIndex: null,
      show: false,
      params: this.$route.params,
      times: [
        {time: '10:00', show: false},
        {time: '11:00', show: false},
        {time: '12:00', show: false},
        {time: '13:00', show: false},
        {time: '14:00', show: false},
        {time: '15:00', show: false},
        {time: '17:00', show: false},
        {time: '17:00', show: false},
        {time: '18:00', show: false},
        {time: '19:00', show: false},
        {time: '20:00', show: false},
        {time: '21:00', show: false}
      ]
    }
  },
  mounted () {
    this.getServiceMan()
  },
  methods: {
    selectSort: function (time) {
      this.time = time.time
      console.log(this.time)
      this.times.forEach(function (item) {
        item.show = false
      })
      time.show = !time.show
    },
    getServiceMan: function () {
      var _this = this
      var serviceId = _this.$route.params.svid
      API.getServiceMan(serviceId).then((res) => {
        console.log(res)
        _this.barberlist = res.results
      })
      .catch((error) => {
        console.log(error)
      })
    },
    selectBarber: function ($index) {
      console.log($index)
      this.currentIndex = $index
    },
    submit: function () {
      // var _this = this
      // var orderData = {
      //   shop_id: this.$route.params.sid,
      //   barber_id: this.currentIndex,
      //   order_date: this.selected,
      //   order_time: this.time,
      //   service_id: this.$route.params.seid
      // }
      // console.log(orderData)
      // API.postOrderService(_this.params).then((res) => {
      //   console.log(res)
      //   _this.show = true
      //   setTimeout(function () {
      //     _this.show = false
      //     _this.$router.go(-2)
      //   }, 2000)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url(../../../styles/main.scss);
  .timetables {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    li{
      margin: 0 1.5%;
      margin-bottom: 12px;
      display: inline-block;
      box-sizing: border-box;
      width: 22%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.48rem;
      border-radius: 3px;
      text-align: center;
      border: 1px solid #00bfbf;
      background-color: #fff;
      color: #00bfbf; 
    }
  }
  ul li.active{
    background-color: #00bfbf;
    color: #fff;
  }
  
  .divide-wrap{
    background-color: #f8f8f8;
  }

  .sub-title{
    text-align: right;
    padding: 0.16rem 0.48rem;
    font-weight: 400;
    color: #00bfbf;
  }

  .barber-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-right: 12px;

    li{
      width: 25%;
      margin-bottom: 0.48rem;
    }

    .img-wrap{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 3px solid #ddd;
      margin: 0 auto;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .name{
      padding-top: 0.32rem;
    }
  }

  .z-active {
    .img-wrap{
      border: 3px solid #00bfbf;
    }
    
    .img-wrap:after{
      content: "";
      position: absolute;
      top: 1.28rem;
      right: 0;
      width: 0.32rem;
      height: 0.32rem;
      background: url(http://qcfile.b0.upaiyun.com/fitness/mobile_v2/1488892909731/assets/icon_checked.png) #fff;
      border-radius: 100%;
      background-size: 100% 100%;
    }
  }
  .tips{
    font-size: 0.32rem;
    text-align: left;
    padding: 4px 8px;
    color: red;
  }
  .appoin{
    margin: 1.6rem 0;
  }

</style>
