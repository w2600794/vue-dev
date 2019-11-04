import App from '../App'
// 首页
const Index = r => require.ensure([], () => {
    r(require('@/page/index'));
}, 'Index');




const routers = [
    //首页
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            index: 0
        }
    },
    {
        path: '/home',
        name: 'home',
        component: r => require.ensure([], () => {
            r(require('@/components/home/home'));
        }, 'home'),
        meta: {
            index: 1
        }

    },
    {
        path: '/user',
        name: 'user',
        component: r => require.ensure([], () => {
            r(require('@/components/user/user'));
        }, 'user'),
        meta: {
            index: 1
        }

    },
]



export default routers