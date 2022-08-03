export default function () {
    const search = {}
    search.data = {}
    search.config = {
        form: {
            inline: true
        },
        row: {
            type: 'flex',
            justify: 'start',
            gutter: 10
        },
        columns: [
            {
                show: true,
                type: 'input',
                label: '文本',
                prop: 'text',
                props: {
                    placeholder: '请输入文本'
                },
                col: {
                    md: 6,
                    sm: 8,
                    xs: 12
                }
            },
            {
                show: true,
                type: 'input',
                label: '数字',
                prop: 'number',
                props: {
                    type: 'number',
                    placeholder: '请输入数字'
                },
                col: {
                    md: 6,
                    sm: 8,
                    xs: 12
                }
            },
            {
                show: true,
                type: 'select',
                label: '单选选项',
                prop: 'select',
                props: {
                    placeholder: '请选择选项',
                    options: [
                        { label: '选项一', value: 1 },
                        { label: '选项二', value: 2 },
                        { label: '选项三', value: 3 },
                    ]
                },
                col: {
                    md: 6,
                    sm: 8,
                    xs: 12
                }
            },
            {
                show: true,
                type: 'select',
                label: '多选选项',
                prop: 'multiple_select',
                props: {
                    multiple: true,
                    placeholder: '请选择选项',
                    options: [
                        { label: '选项一', value: 1 },
                        { label: '选项二', value: 2 },
                        { label: '选项三', value: 3 },
                    ]
                },
                col: {
                    md: 6,
                    sm: 8,
                    xs: 12
                }
            },
            {
                show: true,
                type: 'date',
                label: '日期',
                prop: 'date',
                props: {
                    type: 'daterange',
                    startPlaceholder: '请选择开始日期',
                    endPlaceholder: '请选择结束日期',
                    pickerOptions: {
                        shortcuts: [
                            {
                                text: '最近一周',
                                onClick(picker) {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                    picker.$emit('pick', [start, end]);
                                }
                            },
                            {
                                text: '最近一个月',
                                onClick(picker) {
                                  const end = new Date();
                                  const start = new Date();
                                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                  picker.$emit('pick', [start, end]);
                                }
                              }, {
                                text: '最近三个月',
                                onClick(picker) {
                                  const end = new Date();
                                  const start = new Date();
                                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                  picker.$emit('pick', [start, end]);
                                }
                              }
                        ]
                    },
                    options: [
                        { label: '选项一', value: 1 },
                        { label: '选项二', value: 2 },
                        { label: '选项三', value: 3 },
                    ]
                },
                col: {
                    xl: 8,
                    lg: 12,
                    md: 12,
                    sm: 24,
                    xs: 24
                }
            },
            {
                show: true,
                type: 'time',
                label: '时间',
                prop: 'time',
                props: {
                    isRange: true,
                    startPlaceholder: '请选择开始时间',
                    endPlaceholder: '请选择结束时间',
                    options: [
                        { label: '选项一', value: 1 },
                        { label: '选项二', value: 2 },
                        { label: '选项三', value: 3 },
                    ]
                },
                col: {
                    xl: 8,
                    lg: 12,
                    md: 12,
                    sm: 24,
                    xs: 24
                }
            },
        ]
    }
    return search
}