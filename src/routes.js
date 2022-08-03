
import TablePage from './views/tablePage/index.vue'

export default [
    {
        path: '/table_page',
        name: 'table_page',
        label: '表格页面组件',
        component: TablePage
    },
    {
        path: '/',
        redirect: '/table_page'
    }
]
