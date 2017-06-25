<template>
  <!-- <div class="service">
    <div class="img-wrap">
        <img src="../../../assets/service.jpg" alt="">
    </div>
    <div class="introduce-wrap">
        <h1>服务介绍</h1>
        <p>service.desc</p>
    </div>

    <div class="fee-wrap">
      <h1>理发费用</h1>
      <div class="fee-item">
        <p><span>理发</span><span>90</span></p>
        <p><span>理发</span><span>90</span></p>
      </div>
    </div>

    <div class="btn-wrap">
        <router-link :to="{name: 'Book'}" class="goOrder">
          预约理发
        </router-link>
       
    </div>  
  </div> -->
  <service-temp :serviceData="serviceInfo"></service-temp>
</template>
<script>
import serviceTemp from '@/components/serviceTemp/serviceTemp'
import API from '@/services/service_data'
export default {
  components: {
    'service-temp': serviceTemp
  },
  data () {
    return {
      service: {},
      serviceInfo: {}
    }
  },
  mounted () {
    this.getServiceInfo()
  },
  methods: {
    getServiceInfo () {
      let _this = this
      let serviceId = this.$route.params.svid
      API.getServiceInfo(serviceId).then((res) => {
        console.log(res)
        _this.serviceInfo = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
