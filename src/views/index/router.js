/* eslint-disable */
const Index = () => import( /* webpackChunkName: "Index" */ '@/views/index');
export default {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
        title: '11111',
        noAuth: false,
        keepAlive: false
    }
};
