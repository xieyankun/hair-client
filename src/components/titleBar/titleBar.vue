<template>
  <div class="title-bar">
    <p>当前门店：<span>四季青店></span></p>
    <router-link :to="{name: 'welcome'}" class="checkbtn">
      切换门店
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .title-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.32rem;
    font-size: 0.373333rem;
    background-color: #fff;
    span{
      color: #00BFBF;
    }
  }
  .checkbtn{
    background-color: #00BFBF;
    color: #FFF;
    border: 1px solid #EEE;
    font-size: 0.373333rem;
    padding: 6px 12px;
    border-radius: 6px;
  }
</style>
