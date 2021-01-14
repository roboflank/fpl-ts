import FPL, { fetchAPI, fetchMultipleAPI } from './fpl'
import { API_URLS } from '../constants'
import {
  H2HLeagueDetailsDelegate,
  H2HLeagueDelegate,
  H2HResp,
  H2HLeaguesDelegate,
} from '../types'

/**
 * Details
 * History
 * Fixtures
 * Upcoming
 */
export class H2HLeague extends FPL {
  id: number | number[]
  constructor(id: number | number[]) {
    super()
    this.id = id
  }
  /**
   * Returns the league’s details & standings of the given page.
   * @param page
   * @param pageNewEntries
   * @param phase months: Overall - 1, September - 2, October - 3
   **/
  public async getDetails(): Promise<H2HLeagueDelegate | H2HLeaguesDelegate> {
    if (Array.isArray(this.id)) {
      const ids = new Set(this.id)
      const gwURL: string[] = []
      ids.forEach((id) => {
        const endpoint: string = API_URLS.LEAGUE_H2H.replace(
          '{}',
          id.toString(),
        )
        gwURL.push(endpoint)
      })
      try {
        const resp: H2HResp[] = await fetchMultipleAPI(gwURL)
        const leagues: H2HLeaguesDelegate = {}
        resp.forEach((league) => {
          leagues[league.data.league.id] = league.data
        })
        return leagues
      } catch (error) {
        return error
      }
    } else {
      try {
        const endpoint: string = API_URLS.LEAGUE_H2H.replace(
          '{}',
          this.id.toString(),
        ).replace('{}', this.id.toString())
        const { data }: H2HResp = await fetchAPI(endpoint)
        return data
      } catch (error) {
        return error
      }
    }
  }
}
