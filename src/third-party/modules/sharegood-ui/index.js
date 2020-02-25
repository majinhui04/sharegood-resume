import Vue from 'vue';
import './packages/styles/index.less';

function registerEachComponent(item) {
    Vue.component(item.name, item.component);
}

function registerComponents(componentList) {
    componentList.map((item) => {
        registerEachComponent(item);
    });
}

const components = [
    // @plop global
    {
        name: 'SgForm',
        component: () => import('@/third-party/modules/sharegood-ui/packages/form/index.vue')
    }
];

registerComponents(components);
