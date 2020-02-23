const APP_CONFIG = require('../../../config.json');

const state = {
    ...APP_CONFIG
};
console.log(222233, APP_CONFIG);

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value;
        }
    }
};

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
