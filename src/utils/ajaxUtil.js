
import axios from 'axios'
import env from '../../config/dev.env'

// 处理ajax请求
function doAjax (config) {
  console.log(env.API_TEST)
  return axios(config).then((res) => {
    if (typeof res.data === 'object' && typeof res.data.status === 'undefined') {
      res.data.status = true
    }
    return res.data
  }).catch((error) => {
    return { status: false, error: error.message }
  })
}

export default {
  doGetRequest (config) {
    config.method = 'GET'
    config.url = `${env.API_TEST}/${config.url}`
    return doAjax(config)
  },
  doPostRequest (config) {
    config.method = 'POST'
    config.url = `${env.API_TEST}/${config.url}`
    return doAjax(config)
  }
}
