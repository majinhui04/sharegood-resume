/* eslint-disable */
import router from './index';
import store from '../store';
const whiteList = ['/login', '/404'];
router.beforeEach((to, from, next) => {
    const token = '1';
    console.log('before', to.path, store.state.permission.data);

    // 如果已经登录过则尝试进入首页
    if (token) {
        console.log(444);

        if (to.path === '/login') {
            next('/');
        } else {
            // 查看权限信息
            console.log('store.state.permission.data:::', store.state.permission.data);

            if (!store.state.permission.data.length) {
                console.log(555);

                // 拉取权限信息
                store
                    .dispatch('permission/GetInfo')
                    .then(({
                        roles,
                        permission
                    }) => {
                        console.log(222, permission, roles);
                        // 根据roles权限生成可访问的路由表
                        store
                            .dispatch('permission/GenerateRoutes', {
                                roles,
                                permission
                            })
                            .then(() => {
                                const addRouters = store.getters.addRouters;
                                console.log('addRouters', addRouters);

                                // 动态添加可访问路由表
                                router.addRoutes(addRouters);
                                // 确保addRoutes已完成,set the replace: true so the navigation will not leave a history record
                                next({
                                    ...to,
                                    replace: true
                                });
                            }).catch(err => {
                                console.log(1, err);
                                next('/404');
                            });
                    })
                    .catch(err => {
                        console.error(err);
                        next('/404');
                    });
            } else {
                console.log(666);

                next();
            }
        }
    } else {
        /* has no token */
        if (whiteList.indexOf(to.path) !== -1) {
            console.log(to);

            // 在免登录白名单，直接进入
            next();
        } else {
            // 否则全部重定向到登录页
            next('/login');
        }
    }
});
router.afterEach((to, from) => {
    const title = to.meta.title || '';
    let body = document.body;
    setDocumentTitle(title);
    if (to.meta.bodyClass) {
        body.className = to.meta.bodyClass;
    } else {
        body.className = '';
    }
    // if (!(from.path === '/' && from.name === null)) {
    //     setLocalRoute(to, from);
    // }
});

function setDocumentTitle(title) {
    document.title = title;
    const ua = navigator.userAgent;
    if (/ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe');
        i.src = 'javascript:void(0)';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
}
