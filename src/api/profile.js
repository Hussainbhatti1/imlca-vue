import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getUser() {
  return request({
    url: 'api/v1/athletes/profiles',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function editUser(user) {
  debugger
  return request({
    url: 'api/v1/athletes/profiles',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'put',
    data: JSON.stringify({"athlete": { firstname: user.firstname, 
      lastname: user.lastname, 
      phone_number: user.phone_number, 
      email: user.email, 
      school: user.school,
      state: user.state,
      city: user.city,
      gender: user.gender,
      dominant_hand: user.dominant_hand,
      height_in_feet: user.height_in_feet,
      height_in_inches: user.height_in_inches,
      weight: user.weight,
      graduation_year: user.graduation_year,
      phone_number: user.phone_number,
      link: user.link
        }})
  })
}
