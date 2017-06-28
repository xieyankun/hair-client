<template>
  <div class="activity">
    <h-title></h-title>
    <ul class="barber-wrap">
      <li class="barber-item" v-for="item in activityList">
        <a :href="item.href" class="barber-list">
          <div class="img-wrap">
            <img :src="item.img" alt="">
          </div>
          <div class="info">
            <p>{{item.title}}</p>
            <p>{{item.created_at}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
import API from '@/services/activity_data'
export default {
  components: {
    'h-title': titleBar
  },
  data () {
    return {
      activityList: []
    }
  },
  mounted () {
    this.getActivityInfo()
  },
  methods: {
    getActivityInfo () {
      let _this = this
      API.getActivityInfo().then((response) => {
        console.log(response)
        _this.activityList = response.results
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .barber-wrap{
    text-align: left;
    .barber-item{
      margin-top: 0.16rem
    }
    .barber-list{
      display: flex;
      background-color: #fff;
      padding-left: 24px;
    }
    .img-wrap{
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      img{
        width: 100%;
      }
    }
    .info{
      flex: 1;
      display: flex;
      padding: 12px 24px;
      justify-content: space-around;
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
