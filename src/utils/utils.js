/* eslint-disable */
/**
 * 获取 url 中 token 值
 */
export const getUrlQuery = (name) => {
  var result = window.location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'))
  if (result == null || result.length < 1)
    return undefined
  return decodeURIComponent(result[1])
}

/**
 * 格式化时间
 */
function add0 (m) {
  return m < 10 ? '0' + m : m
}

// 返回时间对象
export const getDealTime = (number) => {
  let time = new Date(number * 1000)
  return {
    y: time.getFullYear(),
    m: add0(time.getMonth() + 1),
    d: add0(time.getDate()),
    h: add0(time.getHours()),
    mm: add0(time.getMinutes()),
    s: add0(time.getSeconds())
  }
}

export const format = (number) => {
  let time = getDealTime(number)
  return time.m + '/' + time.d + '/ ' + time.h + ':' + time.mm
}

export const sysTime = (number) => {
  let time = getDealTime(number)
  return time.y + '.' + time.m + '.' + time.d
}

/*
 * 通过时长返回时间
 * */
export const timeLine = (number) => {
  let minuteCale = Math.floor(number / 60)
  if (minuteCale < 1) {
    return number + '秒'
  }
  let hoursCale = Math.floor(minuteCale / 60)
  let second = add0(number - minuteCale * 60)
  if (hoursCale < 1) {
    return add0(minuteCale) + '分' + second + '秒'
  }
  return add0(hoursCale) + '小时' + second + '分' + second + '秒'

}
/**
 * 存储 sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取 sessionStorage
 */
export const getSession = (name, isObj) => {
  if (!name) return
  if (isObj) {
    return JSON.parse(window.sessionStorage.getItem(name))
  } else {
    return window.sessionStorage.getItem(name)
  }
}

/**
 * 存储 localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取 localStorage
 */
export const getStore = (name, isObj) => {
  if (!name) return
  if (isObj) {
    return JSON.parse(window.localStorage.getItem(name))
  } else {
    return window.localStorage.getItem(name)
  }
}

/**
 * 删除 localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 删除 sessionStorage
 */
export const removeSession = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}








