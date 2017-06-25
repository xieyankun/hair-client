import ajaxUtil from '@/utils/ajaxUtil.js'

export default {
  /* 获取理发店服务数据 */
  getShopService (id) {
    const $cfg = {}
    $cfg.url = 'api/services/?shop_id=' + id
    return ajaxUtil.doGetRequest($cfg)
  },
  getSwipeList (id) {
    const $cfg = {}
    $cfg.url = 'api/shopimgs/?shop_id=' + id
    return ajaxUtil.doGetRequest($cfg)
  }
}
