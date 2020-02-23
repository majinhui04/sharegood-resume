// 自定义
import Vue from 'vue';
import router from './router';
import libs from './third-party';
// import './router/intercept'
import App from './app.vue';
import './styles/app.less';
console.log('libs', libs);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
