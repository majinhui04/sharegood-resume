const cache = {
    namespaced: true,
    state: {
        views: []
    },

    mutations: {
        ADD_EXCLUDE_VIEW: (state, name) => {
            if (state.views.includes(name)) return;
            state.views.push(name);
        },
        DEL_EXCLUDE_VIEW: (state, name) => {
            const index = state.views.indexOf(name);
            if (index > -1) {
                state.views.splice(index, 1);
            }
        }
    },
    actions: {}
};

export default cache;
