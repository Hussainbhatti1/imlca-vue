import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function editTeamGame(id, game_id) {
  return request({
    url: `api/v1/coaches/games/${game_id}/team_games/${id}/edit`,
    headers: { "AUTH-TOKEN": getToken() },
    method: 'get',
  })
}
