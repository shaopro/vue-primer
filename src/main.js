import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from "@/components/Home";
import News from "@/components/News";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {path: "*", redirect: "Home"},
    {path: "/home", component: Home},
    {path: "/news", component: News}
];

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');




