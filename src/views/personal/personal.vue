<template>
  <div class="design">
    <h-title></h-title>
    <h1>个人中心</h1>
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
      url: `http://192.168.1.106:8888/api/front/hairs/?shop_id=${this.$route.params.sid}`,
      designlist: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .design{
    .design-list{
      width: 100%;
      display: flex;
      margin-right: 0.32rem;
      flex-wrap: wrap;
      
      .card{
        width: 50%;
        padding: 16px;
        img{
          width: 100%;
        }
      }

    }
  }
</style>
