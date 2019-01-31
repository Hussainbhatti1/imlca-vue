import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getAthletes() {
  return request({
    url: 'api/v1/coaches/athletes',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function removeAthlete(id) {
  debugger
  return request({
    url: `api/v1/coaches/athletes/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'delete',
  })
}
