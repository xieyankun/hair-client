import ajaxUtil from '@/utils/ajaxUtil.js'

export default {
  /* 获取理发店服务数据 */
  getServiceInfo (id) {
    const $cfg = {}
    $cfg.url = 'api/services/' + id
    return ajaxUtil.doGetRequest($cfg)
  }
}
