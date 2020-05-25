import Vue from 'vue';
import Router from 'vue-router';

// routers
import routes from './routes';


// adding routes Vuejs
Vue.use(Router);


// pass all routes
const router = new Router({
    // remove hash url
    mode:'history', 

    // all routes
    routes
});

export default router;
