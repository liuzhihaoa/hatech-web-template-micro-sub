import { Core, Vue, VueRouter, RequestEvents, HTTPRequestManager, HTTPServiceFeature } from 'hatech-web-core'
import HatechUtils, { FileUtil } from 'hatech-web-utils'
import HatechIcon from '@hatech/icon'
import HatechTheme from '@hatech/theme'
import Element from 'hatech-element-ui'

import App from './App.vue'
import Root from './Root.vue'
import config from './config'
import store from './store'
import routes from './routes'

Vue.use(HatechUtils)
Vue.use(HatechIcon)
Vue.use(Element)

let core = null

function render(props = {}) {
  const { onGlobalStateChange, setGlobalState, router, code, user, token } = props

  if (onGlobalStateChange) {
    store.commit('app/setGlobalStateChange', onGlobalStateChange)
  }

  if (setGlobalState) {
    store.commit('app/save', { setGlobalState, user, token })
  }

  const route = routes.find(r => r.name === code)

  core = new Core({
    code: config.appCode,
    router,
    store,
    render: h => window.__POWERED_BY_QIANKUN__ ? h(Root, [h(route.component, props)]) : h(App, { props })
  })

  core.vue.$mount(document.querySelector('#micro_container'))
}

// 判断是否是乾坤微前端环境
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  // 独立运行时，设置TOKEN
  const token = 'token'
  store.commit('app/save', { token })

  // 独立运行时，由微应用自己控制路由
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  render({
    router,
    code: 'page1'
  })

  // 加载主题,便于调试
  require('hatech-element-ui/lib/theme-chalk/index.css')
  Vue.use(HatechTheme, { default: 'white' })
}

// 微应用启动
export async function bootstrap(props) {
  console.log(`Micro App Bootstrap : `, props)
}

// 微应用加载
export async function mount(props) {
  console.log(`Micro App Mount : `, props)
  render(props)
}

// 微应用更新
export async function update(props) {
  console.log(`Micro App Update : `, props)
}

// 微应用卸载
export async function unmount() {
  core.vue.$destroy()
  core = null
}

// 请求失败 
HTTPRequestManager.registerEvent(RequestEvents.onRespondFail, ({ result }) => {
  if (!result.success) {
    core.vue && core.vue.$message.error(result.msg)
  }
})

// 请求成功
HTTPRequestManager.registerEvent(RequestEvents.onRespondSuccess, ({ response, service }) => {
  if (response && response.success) {
    // 处理下载文件
    if (service.feature & HTTPServiceFeature.isDownload) {
      FileUtil.downBinary(response.data)
    }
  }
})
