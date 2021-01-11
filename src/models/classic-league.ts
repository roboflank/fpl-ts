import { API_URLS } from '../constants'
import {
  ClassicLeagueDelegate,
  ClassicLeagueResp,
  ClassicLeaugesDelegate,
  LeagueStandingDelegate,
  LeagueStandingsDelegate,
} from '../types'
import FPL, { fetchAPI, fetchMultipleAPI } from './fpl'

export class ClassicLeague extends FPL {
  id: number | number[]
  constructor(id: number | number[]) {
    super()
    this.id = id
  }

  /**
   * Returns the league’s details.
   * @remark When one league is requested
   * @example
   * ```js
   * const league = new ClassicLeague(592)
   * console.log(league.getDetails())
   * ```
   **/
  public async getDetails(): Promise<
    ClassicLeagueDelegate | ClassicLeaugesDelegate
  > {
    if (Array.isArray(this.id)) {
      const ids = new Set(this.id)
      const gwURL: string[] = []
      ids.forEach((id) => {
        const endpoint: string = API_URLS.PLAYER_SUMMARY.replace(
          '{}',
          id.toString(),
        )
        gwURL.push(endpoint)
      })
      try {
        const resp: ClassicLeagueResp[] = await fetchMultipleAPI(gwURL)
        const leagues: ClassicLeaugesDelegate = {}
        resp.forEach((league) => {
          leagues[league?.data?.league?.id] = league.data
        })
        return leagues
      } catch (error) {
        return error
      }
    } else {
      try {
        const endpoint = API_URLS.LEAGUE_CLASSIC.replace(
          '{}',
          this.id.toString(),
        )
        const { data }: ClassicLeagueResp = await fetchAPI(endpoint)
        return data
      } catch (error) {
        return error
      }
    }
  }

  /**
   * Returns the league’s standings of the given page.
   * @param page
   * @param pageNewEntries
   * @param phase months: Overall - 1, September - 2, October - 3
   **/
  public async getStandings(
    page = 1,
    pageNewEntries = 1,
    phase = 1,
  ): Promise<LeagueStandingsDelegate | LeagueStandingDelegate> {
    if (Array.isArray(this.id)) {
      const ids = new Set(this.id)
      const gwURL: string[] = []
      ids.forEach((id) => {
        const endpoint: string = API_URLS.LEAGUE_CLASSIC_RANK.replace(
          '{}',
          id.toString(),
        )
          .replace('{}', page.toString())
          .replace('{}', pageNewEntries.toString())
          .replace('{}', phase.toString())
        gwURL.push(endpoint)
      })
      try {
        const resp: ClassicLeagueResp[] = await fetchMultipleAPI(gwURL)
        const leagues: LeagueStandingsDelegate = {}
        resp.forEach((league) => {
          leagues[league?.data?.league?.id] = league.data.standings
        })
        return leagues
      } catch (error) {
        return error
      }
    } else {
      try {
        const endpoint: string = API_URLS.LEAGUE_CLASSIC_RANK.replace(
          '{}',
          this.id.toString(),
        )
          .replace('{}', page.toString())
          .replace('{}', pageNewEntries.toString())
          .replace('{}', phase.toString())
        const { data }: ClassicLeagueResp = await fetchAPI(endpoint)
        return data.standings
      } catch (error) {
        return error
      }
    }
  }
}
