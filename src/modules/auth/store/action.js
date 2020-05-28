import services from '@/api';
import * as types from './mutation-types';


// validation login
export const ActionDoLogin = (context, payload) => {
    return services.auth.login(payload);
}

// data user logged
export const ActionUserLogged = async ({ dispatch }, payload) => {

    const res = await services.auth.userLogged(payload)
        dispatch('ActionSetUser', res.data[0].user)
        dispatch('ActionSetToken', res.data[0].token)
        return res;
}

// Set User
export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

// Set token
export const ActionSetToken = ({ commit }, payload) => {
    commit(types.SET_TOKEN, payload)
}

// Clear field
export const ActionSetClear = ({commit})=>{
commit(types.SET_CLEAR)
}


