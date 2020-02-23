import Vue from 'vue';
import Router from 'vue-router';
import constantRouter from './constant-router';
import permissRouter from './permission-router';
console.log(111, permissRouter)
Vue.use(Router);
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [...constantRouter, ...permissRouter]
});
export default router;
