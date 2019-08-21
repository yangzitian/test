import Vue from 'vue'
/**
 * 格式化日期 yyyy-MM-dd HH:mm:ss
 */
Vue.filter('date', function (value) {
  if (!value) {
    return ''
  } else {
    return '2001-01-01'
  }
})
Vue.filter('caculateType', function (value) {
  if (value === 'QNBAPP') {
    return '本机测评'
  } else {
    return '微信分享测评'
  }
})
