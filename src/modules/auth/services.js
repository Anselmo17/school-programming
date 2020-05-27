export default {
    login: {
        method: 'get',
        url: 'login'
    },
    userLogged: {
        method: 'get',
        url: 'login-success{/:id}'
    }
}
