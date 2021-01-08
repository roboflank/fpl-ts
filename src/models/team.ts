import {
  PlayerDelegate,
  StaticResponse,
  TeamDelegate,
  PlayerTeamDelegate,
} from '../types'
import FPL from './fpl'
import { API_URLS } from '../constants'

/**
 * Team Class api from -> https://fantasy.premierleague.com/api/bootstrap-static/
 * @returns {Promise}
 * @example
 * ```
 * const team = await new Team(1)
 * ```
 */

export class Team extends FPL {
  id: number[] | number
  constructor(id: number[] | number) {
    super()
    this.id = id
  }

  /**
   * Returns array or object of the requested team id(s)
   * @returns {Promise} TeamDelegate
   * @example
   * ```
   * const team = await new Team(1).getDetails()
   * ```
   * @remark when array is requested
   * @returns {Promise} TeamDelegate[]
   * @example
   * ```
   * const teams = await new Team([1]).getDetails()
   * ```
   */

  public async getDetails(): Promise<TeamDelegate[] | TeamDelegate> {
    let teams: TeamDelegate[] | TeamDelegate = []
    try {
      const { data }: StaticResponse = await this.fetchAPI(API_URLS.STATIC)
      if (Array.isArray(this.id)) {
        const filteredTeams: TeamDelegate[] = []
        const ids = new Set(this.id)
        data.teams.forEach((team) => {
          ids.forEach((id) => {
            if (team.id === id) {
              filteredTeams.push(team)
            }
          })
        })
        teams = filteredTeams
      } else {
        data.teams.forEach((team) => {
          if (team.id === this.id) {
            teams = team
          }
        })
      }
      return teams
    } catch (err) {
      return err
    }
  }

  /**
   * Returns array or object of the requested team id(s)
   * @returns {Promise} PlayerDelegate[]
   * @example
   * ```
   * const players = await new Team(1).getPlayers()
   * ```
   * @remark when array is requested
   * @returns {Promise} PlayerTeamDelegate
   * @example
   * ```
   * const players = await new Team([1]).getPlayers()
   * ```
   */
  public async getPlayers(): Promise<PlayerTeamDelegate | PlayerDelegate[]> {
    try {
      const { data }: StaticResponse = await this.fetchAPI(API_URLS.STATIC)
      if (Array.isArray(this.id)) {
        const players: PlayerTeamDelegate = {}
        const ids = new Set(this.id)
        ids.forEach((id) => {
          players[id] = []
        })
        data.elements.forEach((player) => {
          ids.forEach((id) => {
            if (player.team === id) {
              players[id].push(player)
            }
          })
        })
        return players
      } else {
        const players: PlayerDelegate[] = []
        data.elements.forEach((player) => {
          if (player.team === this.id) {
            players.push(player)
          }
        })
        return players
      }
    } catch (error) {
      return error
    }
  }
}
