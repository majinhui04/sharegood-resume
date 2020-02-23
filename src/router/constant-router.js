/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export default [{
    path: '/404',
    component: resolve => require(['../pages/404/index.vue'], resolve)
}];
