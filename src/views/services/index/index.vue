<template>
  <div>
    <service-temp :serviceData="serviceInfo"></service-temp>
  </div>
</template>
<script>
import serviceTemp from '@/components/serviceTemp/serviceTemp'
import API from '@/services/service_data'
import swipe from '@/components/swipe/swipe'
export default {
  components: {
    'service-temp': serviceTemp,
    'h-swipe': swipe
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
        console.log(res.service_imgs)
        _this.serviceInfo = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
