import { _get, _post, _patch, _delete } from './query'



export const createUser = (deviceNum) => {
  return _post('user', { deviceNum: deviceNum });
}

export const login = (deviceNum) => {
  return _post('auth/login', { deviceNum: deviceNum });
}

// const makeFn = (url) => {
//   return (params) => {
//     return _post(url,params);
//   }
// }

// makeFn(url)(params)