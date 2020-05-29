import services from '@/api';
import * as types from './mutation-types';
import * as storage from '../storage';


// validation login
export const ActionDoLogin = (context, payload) => {
    return services.auth.login(payload);
}

// data user logged
export const ActionUserLogged = async ({
    dispatch
}, payload) => {

    const res = await services.auth.userLogged(payload)
    dispatch('ActionSetUser', res.data[0].user)
    dispatch('ActionSetToken', res.data[0].token)
    return res;
}

// Set User
export const ActionSetUser = ({
    commit
}, payload) => {
    commit(types.SET_USER, payload)
}

// Set token
export const ActionSetToken = ({
    commit
}, payload) => {
    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}

// Check Token
export const ActionCheckToken = ({dispatch , state}) => {
  
    if (state.token) {
        return Promise.resolve(state.token)
    }

    const token = localStorage.getItem('token');
    if (!token) {
        return Promise.reject(new Error('Token Invalido !!!'))
    }

    dispatch('ActionSetToken', token)

    
    return Promise.resolve();
}

// Clear field
export const ActionSetClear = ({commit}) => {
    commit(types.SET_CLEAR)
}
