export default function () {
    const tree = {}
    tree.data = [
        {
            id: '1',
            label: 'node name',
            children: [
                {
                    id: '1-1',
                    label: 'node name 1-1',

                }
            ]
        },
        {
            id: '2',
            label: 'node name',
            children: [
                {
                    id: '2-1',
                    label: 'node name 2-1,node name 2-1node name 2-1node name 2-1node name 2-1node name 2-1',

                }
            ]
        },
        {
            id: '3',
            label: 'node name',
            children: [
                {
                    id: '3-1',
                    label: 'node name 3-1',

                }
            ]
        },
    ]
    tree.config = {
        view: {
            title: '左侧树'
        },
        tree: {
            props: {
            }
        },
        col: {

        }
    }
    return tree
}