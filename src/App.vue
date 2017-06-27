<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import titleBar from '@/components/titleBar/titleBar'
export default {
  name: 'app',
  components: {
    'h-title': titleBar
  }
}
</script>

<style>
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body{
    background-color: #eee;
    font-size: 0.426667rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
