import Vue from 'vue';
import VueResource from 'vue-resource';
import services from './services';

Vue.use(VueResource);

const http = Vue.http;

http.options.root = 'http://localhost:3000/';

// store requests
Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})


// set token
const setBearerToken = token => {
    http.headers.common['Authorization'] = `Bearer ${token}`
}


// exports methods http
export {
    http,
    setBearerToken
};

export default services;
