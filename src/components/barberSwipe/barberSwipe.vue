<template>
  <div class="barber">
    <div class="h-barTitle">
      <h3>全部理发师(10)</h3>
    </div>
    <div class="barber-show">
        <ul class="cardContainer">
            <li class="showCard" v-for="item in 3" 
            @click="selectBarber(item)" 
            :style="{styleObject}">
                <p>11111111</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      this.init()
      return {
        styleObject: {
          transform: 'translate3d(200px, 0, px)',
          transition: 'transform 0.6s ease'
        }
      }
    },
    methods: {
      init: function () {
      },
      selectBarber: function (item) {
        console.log(item)
      }
    }
  }
</script>

<style lang="scss" scoped>
.li1{
    background: red;
}
.li2{
    background-color: blue;
}
.li3{
    background-color: #333;
}
.barber{
  position: relative;
  width: 100%;
  height: 13rem;
  background-color: #f8f8f8;
  
  .h-barTitle{
    padding: 0.64rem 1.96rem;
    text-align: right;
    color: #00bfbf;
  }

  .barber-show{
    width: 100%;
    height: 10rem;
    background-color: #999;
    margin: 1rem auto;
    position: absolute;
    // overflow: hidden;

    .cardContainer{
        position: absolute;
        width: 200px;
        height: 110px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #0FF;
        transform-style: preserve-3d;
        perspective: 200px;
        -webkit-perspective: 200;
    }
    .showCard{
        box-sizing: border-box;
        padding: 16px 24px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 3px rgba(0,0,0,.2);
        left: 0;
        top: 0;
        position: absolute;
        width: 200px;
    }
  }
}
</style>
