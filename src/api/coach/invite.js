import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function newInvitation() {
  return request({
    url: 'api/v1/coaches/invitations/new',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function createInvitation(athlete) {
  debugger
  return request({
    url: `api/v1/coaches/invitations`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'post',
    data: JSON.stringify({"athlete": { state_id: athlete.state_id,
      first_name: athlete.first_name,
      last_name: athlete.last_name,
      email: athlete.email,
      jersey_number: athlete.jersey_no,
      school_id:  athlete.school_id
        }})
  })
}
