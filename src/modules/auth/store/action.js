import services from '@/api';
import * as types from './mutation-types';


// validation login
export const ActionDoLogin = (context, payload) => {
  return services.auth.login(payload);
}

// data user logged
export const ActionUserLogged = (context, payload) => {
  return services.auth.userLogged(payload);
}

//Set User
export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

// Set token
export const ActionSetToken = ({ commit }, payload) => {
    commit(types.SET_TOKEN, payload)
}



