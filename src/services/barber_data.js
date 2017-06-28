import ajaxUtil from '@/utils/ajaxUtil.js'

export default {
  /* 获取理发店工作人员 */
  getBarberList (id) {
    const $cfg = {}
    $cfg.url = 'api/staff/?shop_id=' + id
    return ajaxUtil.doGetRequest($cfg)
  }
}
