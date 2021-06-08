import Vue from 'vue'
Vue.filter('numberFormat', value => {
  if (value > 999) {
    const val = String(value)
    return val[0] + ',' + val.substr(1)
  }
  return value
})
