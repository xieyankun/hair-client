import ajaxUtil from '@/utils/ajaxUtil.js'

export default {
  /* 获取理发店工作人员 */
  getActivityInfo (id) {
    const $cfg = {}
    $cfg.url = 'api/activities/'
    return ajaxUtil.doGetRequest($cfg)
  }
}
