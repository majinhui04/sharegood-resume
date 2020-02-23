const ADemo = () => import(/* webpackChunkName: "ADemo" */ '@/views/a/demo');
export default {
    path: '/a/demo',
    name: 'ADemo',
    component: ADemo,
    meta: {
    title: '事实上',
    noAuth: false,
    keepAlive: false
    }
};