export default function () {
    const table = {}
    table.data = [
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
        { name: 'name', version: '1.0.0', createdDate: '2021-01-05 12:00:00' },
    ]
    table.config = {
        columns: [
            {
                label: '名称',
                prop: 'name'
            },
            {
                label: '版本',
                prop: 'version'
            },
            {
                label: '创建时间',
                prop: 'createdDate'
            },
        ]
    }
    return table
}