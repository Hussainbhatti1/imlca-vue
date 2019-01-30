import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getGames() {
  return request({
    url: 'api/v1/coaches/games',
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function gameDetails(id) {
  return request({
    url: `api/v1/coaches/games/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function editGame(id) {
  return request({
    url: `api/v1/coaches/games/${id}/edit`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function updateGame(id, game) {
  debugger
  return request({
    url: `api/v1/coaches/games/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'put',
    data: JSON.stringify({"game": { state_id: game.state_id,
      conference_id: game.conference_id, 
      division_id: game.division_id, 
      tournament_id: game.tournament_id,
      winner_id: game.winner_id,
      result: game.result,
      first_team_attributes: game.school_team,
      second_team_attributes: game.opponent_team
        }})
  })
}