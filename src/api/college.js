import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getList() {
  return request({
    url: 'api/v1/athletes/colleges',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function collegeFollow(id) {
  return request({
    url: `api/v1/athletes/colleges/${id}/athlete_colleges`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'post',
  })
}

export function collegeUnfollow(id, athlete_college_id) {
  return request({
    url: `api/v1/athletes/colleges/${id}/athlete_colleges/${athlete_college_id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'delete',
  })
}