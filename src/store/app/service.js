import { HTTPService, HTTPMethod, HTTPServiceFeature } from 'hatech-web-core'

const { POST } = HTTPMethod
const { useToken } = HTTPServiceFeature

/**
 * 接口由HTTPService对象创建
 */
export default [
    // 调用接口
    new HTTPService({
        // 接口名称，对应vuex中action名称
        name: 'FetchList',
        // 接口URL
        url: '/api/xxx/list',
        // 接口类型
        method: POST,
        // 默认参数
        defaultParams: {
            source: 'test'
        },
        // 扩展功能，如使用TOKEN，接口是
        feature: useToken,
        // 数据返回后处理
        afterResponse: async ({ commit, dispatch }, response) => {
            if (response && response.success) {
                // TODO:数据返回后进行处理
                commit('save', {
                    data: response.data
                })
                // TODO:数据返回后，进行其它动作
                dispatch('app/xxxx', {
                    xxx: response.data.xxx
                })
            }
            return response
        }
    })
]
