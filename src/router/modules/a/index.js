const A = () => import(/* webpackChunkName: "A" */ '@/views/a');
export default {
    path: '/a',
    name: 'A',
    component: A,
    meta: {
    title: '事实上',
    noAuth: false,
    keepAlive: false
    }
};