import { StoreModule } from 'hatech-web-core'

import services from './service'
export default new StoreModule({
    namespace: true,
    state: {
        setGlobalState: undefined,
        query: {},
        params: {},
        token: ''
    },
    getters: {
        TOKEN: state => state.token
    },
    mutations: {
        /**
         * 保存状态
         * @param {*} state 
         * @param {*} payload 
         */
        save(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        /**
         * 主应用状态监听函数
         * @param {*} state 
         * @param {*} onGlobalStateChange 
         */
        setGlobalStateChange(state, onGlobalStateChange) {
            onGlobalStateChange(({ type, payload } = {}) => {
                if (type === 'RouteChanged') {
                    const { query, params, token } = payload
                    if (query) state.query = query
                    if (params) state.params = params
                    if (token) state.token = token
                }
                console.log('子应用接收到数据,类型: ', type, '数据: ', payload)
            }, true)
        },
        /**
         * 应用间状态传递
         * @param {*} state 
         * @param {*} payload 
         */
        setGlobalState(state, payload) {
            state.setGlobalState && state.setGlobalState(payload)
        }
    },
    services
})