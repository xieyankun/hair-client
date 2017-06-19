<template>
  <div class="barberInfo">
    <h-title></h-title>
    <div class="img-wrap">
      <img src="../../assets/hair.jpg" alt="">
    </div>
    <div class="barber-desc">
      <div class="intro">
        <p><span>姓名</span><span>name</span></p>
        <p><span>职位</span><span>姓名</span></p>
        <p><span>微信</span><span>wechat</span></p>
        <p class="tag"><span>tag</span><span>tag</span><span>tag</span></p>
      </div>
      <div class="desc">
        <p>看到了身份卡良好的索科洛夫贺卡上的撒疯狂的杀戮疯狂的沙发考虑到沙发上打开理发回来看的撒的发空间良好的撒开了符合贷款撒浪嘿份快乐的撒哈发的撒开发</p>
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
export default {
  name: 'barberlist',
  components: {
    'h-title': titleBar
  },
  data () {
    return {
      url: `http://192.168.1.106:8888/api/front/barbers/${this.$route.params.bid}/`,
      barberinfo: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .barberInfo{
    .img-wrap, .barber-desc{
      width: 100%;
      padding: 16px;
      img{
        width: 100%;
      }
    }
    .barber-desc{
      .intro{
        margin-bottom: 24px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 12px #9a9b9b;
        p{
          display: flex;
          justify-content: space-between;
          background-color: #FFF;
          padding: 0.32rem;
          border-bottom: 1px solid #d1d1d1
        }
      }
      .desc{
        text-align: left;
        background-color: #fff;
        padding: 16px;
        p{
          text-align: justify;
          line-height: 1.4;
          text-indent: 32px;
        }
      }
    }
  }
  .tag{
    display: block !important;
    text-align: left;

    span{
      border: 2px solid #00bfbf;
      padding: 0 14px;
      border-radius: 8px;
      margin-right: 8px;
      color: #00bfbf;
      font-size: 0.34rem;
    }
  }
</style>
