import Cookies from 'js-cookie';

const app = {
    namespaced: true,
    state: {
        sidebar: {
            opened: !+Cookies.get('sidebarStatus'),
            withoutAnimation: false
        },
        device: 'desktop'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1);
            } else {
                Cookies.set('sidebarStatus', 0);
            }
            state.sidebar.opened = !state.sidebar.opened;
            state.sidebar.withoutAnimation = false;
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 0);
            state.sidebar.opened = false;
            state.sidebar.withoutAnimation = withoutAnimation;
        },
        // 打开菜单栏
        OPEN_SIDEBAR: state => {
            Cookies.set('sidebarStatus', 1);
            state.sidebar.opened = true;
            state.sidebar.withoutAnimation = false;
        }
    },
    actions: {
        ToggleSideBar: ({
            commit
        }) => {
            commit('TOGGLE_SIDEBAR');
        },
        CloseSideBar({
            commit
        }, {
            withoutAnimation
        }) {
            commit('CLOSE_SIDEBAR', withoutAnimation);
        },
        openSideBar: ({
            commit
        }) => {
            commit('OPEN_SIDEBAR');
        }
    }
};

export default app;
