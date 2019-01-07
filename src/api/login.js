import request from '@/utils/request'

export function login(email, password) {
  return request({
    url: 'api/v1/sessions',
    method: 'post',
    data: JSON.stringify({email: email, password: password})
  })
}

export function register(firstname, lastname, phone, email, password) {
  return request({
    url: 'api/v1/profiles',
    method: 'post',
    data: JSON.stringify({"dentist": { firstname: firstname, lastname: lastname, phone: phone, email: email, password: password, password_confirmation: password, state_id: 1 }})
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
