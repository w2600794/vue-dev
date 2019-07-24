import App from '../App'
// 首页
const Index = r => require.ensure([], () => {
    r(require('@/page/index'));
}, 'Index');


const Header = r => require.ensure([], () => {
    r(require('@/components/header/header'));
}, 'header');



const routers = [{
    path: '/',
    component: App,    // 顶层路由，对应 index.html
    children: [ // 二级路由，对应 APP.vue
        // 地址为空 跳到首页
        {
            path: '',
            name: 'Index',
            component: Index,
            meta: {
                title: '鳄鱼宝',
                allowBack: false
            }
        }
    ]
}]



export default routers
