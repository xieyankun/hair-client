import ajaxUtil from '@/utils/ajaxUtil.js'

export default {
  /* 获取理发店列表数据 */
  getShopList () {
    const $cfg = {}
    $cfg.url = 'api/shops/'
    return ajaxUtil.doGetRequest($cfg)
  }
}
