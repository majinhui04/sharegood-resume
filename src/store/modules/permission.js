import constantRouter from '../../router/constant-router';
import asyncRouter from '../../router/permission-router';
/**
 * 判断是否与当前用户权限匹配
 * @param {roles,permission}
 * @param route
 */
function hasPermission(data, route) {
    const roles = data.roles;
    const permission = data.permission;
    const meta = route.meta || {};
    const name = route.name;
    const fullPath = meta.fullPath;
    let result = false;
    // 两种权限校验模式 1. 静态校验：根据固定的角色 2: 动态校验：后台返回资源列表
    if (route.meta && route.meta.roles) {
        result = roles.some(role => route.meta.roles.includes(role));
    } else {
        result = permission.some(item => item.indexOf(name) === 0 || item.indexOf(fullPath) === 0);
    }
    if (route.path === '/') {
        result = true;
    }
    if (meta.isAuth === false) {
        result = true;
    }
    return result;
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, data) {
    const res = [];

    routes.forEach(route => {
        const tmp = {
            ...route
        };
        if (hasPermission(data, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRouter(tmp.children, data);
            }
            res.push(tmp);
        }
    });

    return res;
}

const permission = {
    namespaced: true,
    state: {
        data: [],
        menus: [],
        routers: [],
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            console.log('SET_ROUTERS', routers);

            state.addRouters = routers;
            state.routers = constantRouter.concat(routers);
        },
        SET_MENUS: (state, routers) => {
            state.menus = routers;
        }
    },
    actions: {
        GetInfo({
            commit,
            state
        }) {
            const settings = state.settings;
            console.log(1111, settings);
            return new Promise((resolve, reject) => {
                const roles = ['admin'];
                const permission = [];
                state.data = ['1']
                // commit('SET_ROLES', roles);
                resolve({
                    roles,
                    permission
                });
            });
        },
        GenerateRoutes({
            commit,
            state
        }, data) {
            return new Promise(resolve => {
                const {
                    roles,
                    permission
                } = data;
                let accessedRouters;
                if (roles.includes('admin')) {
                    accessedRouters = asyncRouter;
                } else {
                    console.log(56);

                    accessedRouters = filterAsyncRouter(asyncRouter, data);
                }

                const routes = addRedirect(accessedRouters);
                console.log('11111---------------');
                const menus = filterAsyncMenu(accessedRouters);
                console.log('22222---------------', menus);

                // const {
                //     addRoutes,
                //     menuRoutes
                // } = addRedirect(accessedRouters);
                // commit(
                //     'SET_ROUTERS',
                //     addRoutes.concat([{
                //         path: '*',
                //         redirect: {
                //             path: '/404'
                //         },
                //         hidden: true
                //     }])
                // );
                // commit('SET_MENUS', menuRoutes);
                state.addRouters = routes;
                state.menus = menus[0] && menus[0].children ? menus[0].children : [];
                resolve();
            });
        }
    }
};

function filterAsyncMenu(tree) {
    const res = [];

    tree.forEach(route => {
        const tmp = {
            ...route
        };
        delete tmp.component;
        if (tmp.children) {
            tmp.children = filterAsyncMenu(tmp.children);
        }
        res.push(tmp);
    });

    return res;
}
// 将路由和菜单结构分离，路由为三级路由（根、顶级模块、叶子模块），菜单可以无限极，解决路由缓存问题
function addRedirect(tree) {
    const stack = [...tree];
    const routes = [];
    let root = null;
    while (stack.length) {
        const item = stack.shift();
        const curr = {
            ...item
        };
        if (curr.children && curr.children.length) {
            curr.redirect = curr.children[0].path;
            stack.unshift(...curr.children);
        }
        if (curr.path === '/') {
            curr.children = [];
            root = {
                ...curr
            };
            routes.push(root);
        } else {
            const copy = {
                ...curr
            };
            copy.meta = copy.meta || {};
            copy.meta.title = copy.meta.title || copy.path;
            copy.path = copy.meta.fullPath ? copy.meta.fullPath : copy.path;
            console.log('copy', copy);

            delete copy.children;
            root.children.push(copy);
        }
    }
    return routes;
}

export default permission;
