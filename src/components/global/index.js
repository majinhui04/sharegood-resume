import Vue from 'vue';

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
        component: () => import('@/components/global/form/form.vue')
    }
];

registerComponents(components);
