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
    data: JSON.stringify({"athlete": { first_name: user.first_name,
      last_name: user.last_name, 
      phone_number: user.phone_number,
      email: user.email, 
      school_id: user.school_id,
      state_id: user.state_id,
      city: user.city,
      gender: user.gender,
      dominant_hand: user.dominant_hand,
      height_in_feet: user.height_in_feet,
      height_in_inches: user.height_in_inches,
      weight: user.weight,
      position: user.position,
      graduation_year: user.graduation_year,
      phone_number: user.phone_number,
      link: user.link
        }})
  })
}
