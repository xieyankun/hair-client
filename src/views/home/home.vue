<template>
    <div class="container">
      <div class="home-swipe">
        <mt-swipe :auto="3000">
          <mt-swipe-item>
            <img src="../../assets/1.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/2.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../assets/3.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="base-info">
      </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .home-swipe{
    height: 6rem;

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

