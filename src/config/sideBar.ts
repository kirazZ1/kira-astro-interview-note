import SidebarPlugin from 'starlight-sidebar-topics'

type GetFirstParamType<T = Function> = T extends ((arg1: infer A) => any) ? A : never 

const sideBarConfig: GetFirstParamType<typeof SidebarPlugin> = [
    {
        label: 'JavaScript',
        link: '/javascript/',
        icon: 'seti:javascript',
        items: [
            {
                label: 'JavaScript',
                autogenerate: { directory: 'javaScript' }
            }
        ],
    },
    {
        label: 'Vue',
        link: '/vue/',
        icon: 'seti:vue',
        items: [
            {
                label: 'Vue',
                autogenerate: { directory: 'vue' }
            }
        ],
    },
    {
        label: 'React',
        link: '/react/',
        icon: 'seti:react',
        items: [
            {
                label: 'React',
                autogenerate: { directory: 'react' }
            }
        ],
    },
]

export default sideBarConfig