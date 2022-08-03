import Tree from './tree.config'
import Search from './search.config'
import Table from './table.config'
import Pagination from './pagination.config'

export default function () {
    const page = {}
    page.tree = Tree.call(this)
    page.table = Table.call(this)
    page.search = Search.call(this)
    page.pagination = Pagination.call(this)
    return page
}