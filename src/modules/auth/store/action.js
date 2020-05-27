import services from '@/api';
import * as types from './mutation-types';


export const ActionDoLogin = (context, payload) => {
  return services.auth.login(payload);
}

// todo
export const ActionUserLogged = (context, payload) => {
  return services.auth.userLogged(payload);
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}


export const ActionSetToken = ({ commit }, payload) => {
    commit(types.SET_TOKEN, payload)
}



