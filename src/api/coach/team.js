import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getTeams() {
  return request({
    url: 'api/v1/coaches/teams',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function teamDetails(id) {
  return request({
    url: `api/v1/coaches/teams/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function editTeam(id, team) {
  debugger
  return request({
    url: `api/v1/coaches/teams/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'put',
    data: JSON.stringify({"athlete": { title: team.title,
      gender: team.gender,
      athlete_teams_attributes: team.team_athletes
        }})
  })
}
