import Cookies from 'js-cookie'

const TokenKey = 'access_token';
const current_user = 'user';
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUser(data) {
  return Cookies.set(current_user, data)
}

export function getUser() {
  return Cookies.getJSON(current_user)
}

export function isCoach() {
  return true;
}

export function isAthlete() {
  return true;
}
