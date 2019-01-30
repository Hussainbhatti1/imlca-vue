import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getUser() {
  return request({
    url: 'api/v1/coaches/profiles',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function editUser(user) {
  debugger
  return request({
    url: 'api/v1/coaches/profiles',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'put',
    data: JSON.stringify({"coach": { first_name: user.first_name,
      last_name: user.last_name, 
      email: user.email, 
      school_id: user.school_id,
      gender: user.gender,
        }})
  })
}
