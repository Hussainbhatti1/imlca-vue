import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function editTeamGame(id, game_id) {
  return request({
    url: `api/v1/coaches/games/${game_id}/team_games/${id}/edit`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}

export function updateTeamGame(id, game_id, team_game) {
  debugger
  return request({
    url: `api/v1/coaches/games/${game_id}/team_games/${id}`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'put',
    data: JSON.stringify({"team_game": { team_id: team_game.team_id,
      game_id: team_game.game_id, 
      game_team_athletes_attributes: team_game.game_team_athletes
        }})
  })
}
