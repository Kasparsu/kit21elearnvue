import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as VueRouter from 'vue-router';

import Home from './Home.vue';
import About from './About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

let app = createApp(App);
app.use(router);
app.mount('#app');

// let text = document.getElementById('text');
// console.log(text.innerHTML);
// setTimeout(function () {
//     text.innerHTML = 'Goodbye World';
// }, 5000);

// let button = document.getElementById('button');

// button.addEventListener('click', function (){
//     text.innerHTML = 'Goodbye Cruel World!';
// });