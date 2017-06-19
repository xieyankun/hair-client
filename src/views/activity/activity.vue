<template>
  <div class="activity">
    <h-title></h-title>
    <ul class="barber-wrap">
      <li class="barber-item" v-for="item in activities">
        <a :href="item.url" class="barber-list">
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
import titleBar from 'components/layout/title_bar'
import API from '../../api/api'
export default {
  name: 'barberlist',
  components: {
    'h-title': titleBar
  },
  data () {
    return {
      activities: []
    }
  },
  mounted () {
    this.getActivitiesList()
  },
  methods: {
    getActivitiesList: function () {
      var _this = this
      var params = _this.$route.params
      API.getActivityList(params).then((res) => {
        console.log(res)
        _this.activities = res.data.activities
      })
      .catch((error) => {
        console.log(error)
      })
    },
    goActivity (url) {
      console.log(url)
      this.$router.replace(url)
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
