import { fetchAPI } from './fpl'
import { API_URLS } from '../constants'
import {
  GameweekDelegate,
  StaticResponse,
  FixtureDelegate,
  FixturesRespDelegate,
} from '../types'

/**
 * API: https://fantasy.premierleague.com/api/bootstrap-static/
 *  @example
 * ```js
 * const gw = new Gameweek(1)
 * ```
 */
export class Gameweek {
  id: number[] | number
  constructor(id: number[] | number) {
    this.id = id
  }

  /**
   * Returns object of requested gameweek or array of gameweeks.
   * @example
   * ```js
   * const gameweek = await new Gameweek(1).getDetails()
   * ```
   * @example
   * ```js
   * const gameweeks = await new Gameweek([1, 2]).getDetails()
   * ```
   */

  public async getDetails(): Promise<GameweekDelegate | GameweekDelegate[]> {
    let result: GameweekDelegate | GameweekDelegate[] = []
    try {
      const { data }: StaticResponse = await fetchAPI(API_URLS.STATIC)
      if (Array.isArray(this.id)) {
        const gws: GameweekDelegate[] = []
        const ids = this.id.filter((v, i, a) => a.indexOf(v) === i)
        data.events.forEach((gw) => {
          ids.forEach((id) => {
            if (gw.id === id) {
              gws.push(gw)
            }
          })
        })
        result = gws
      } else {
        data.events.forEach((gw) => {
          if (gw.id === this.id) {
            result = gw
          }
        })
      }
      return result
    } catch (error) {
      return error
    }
  }

  /**
   * Returns array of fixtures.
   * @example
   * ```js
   * const fixtures = await new Gameweek(1).getFixtures()
   * ```
   */

  public async getFixtures(): Promise<FixtureDelegate[]> {
    const fixtures: FixtureDelegate[] = []
    try {
      const { data }: FixturesRespDelegate = await fetchAPI(API_URLS.FIXTURES)

      if (Array.isArray(this.id)) {
        const ids = this.id.filter((v, i, a) => a.indexOf(v) === i)
        data.forEach((gw) => {
          ids.forEach((res) => {
            if (gw.event === res) {
              fixtures.push(gw)
            }
          })
        })
      } else {
        data.forEach((gw) => {
          if (gw.event === this.id) {
            fixtures.push(gw)
          }
        })
      }
      return fixtures
    } catch (error) {
      return error
    }
  }
}
