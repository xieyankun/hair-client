<template>
  <div class="swipe">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeList">
        <img :src="item.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    props: {
      swipeList: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .swipe{
    height: 5rem;

    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
