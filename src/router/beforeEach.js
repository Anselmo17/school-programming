import store from '../store'


// validation routes
export default async (to, from, next) => {

    if (to.name !== 'login' && !store.getters['auth/hasToken']) {
        try {
            await store.dispatch('auth/ActionCheckToken')
            next({ path: to.path })

        } catch (erro) {
             localStorage.clear()
            next({name: 'login'})
        }
    } else {

        // get token validation
        const token = localStorage.getItem('token')
      
      if (to.name === 'login' && token) {
            next({ name: 'home'})
        } else {
          next()
        }
    }
}
