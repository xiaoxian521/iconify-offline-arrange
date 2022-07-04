import Vue from 'vue'
import App from './App.vue'

import './style.css'

import { addAPIProvider, disableCache } from "@iconify/vue2"

/**
 * @description IconifyAPI相关配置
 * @see {@link https://docs.iconify.design/api/providers.html}
 */
addAPIProvider("", {
  resources: ["http://127.0.0.1:8084"],
})

/**
 * @description IconifyAPI相关函数
 * @see {@link https://docs.iconify.design/iconify-icon/}
 * @see {@link https://docs.iconify.design/iconify-icon/disable-cache.html}
 */
disableCache("all")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
