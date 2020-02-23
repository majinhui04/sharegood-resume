const Bill = () => import( /* webpackChunkName: "bill" */ '@/views/welcome/index.vue');
export default {
    path: '/settings',
    component: Bill,
    meta: {
        title: 'settings'
    }
};
