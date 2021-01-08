import { StaticResponse, TeamDelegate } from '../types'
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
        const gws: TeamDelegate[] = []
        const ids = this.id
        data.teams.forEach((team) => {
          ids.forEach((id) => {
            if (team.id === id) {
              gws.push(team)
            }
          })
        })
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
}
