/* eslint-disable */
/**
 * Created by Kira on 2017/6/14.
 */
//把axios调用封装成一个方法，然后option，包括token之类的设置都写好在那个文件里，要用的页面直接import这个方法，然后把"/login"，还有GET/POST，
//还有参数这些值传到这个方法里去就行了，在这个封装方法里还可以做登录状态检查，调用错误处理等等操作
/**
 * 公共的调用接口ajax方法
 * @param {Object} param
 * @param {Object} api_url
 */
import Vue from 'vue'
import axios from 'axios'

function doAjax($cfg){
  $cfg.withCredentials = true;
  return axios($cfg).then((res) => {
    if(typeof res.data === "object" && typeof res.data.status === "undefined"){
      res.data.status = true;
    }
    return res.data;
  }).catch((error) => {
    return { status: false, error: error.message };
  });
}


