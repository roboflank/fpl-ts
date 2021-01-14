import { API_URLS } from '../constants'
import {
  ClassicLeagueDelegate,
  ClassicLeagueResp,
  ClassicLeaugesDelegate,
} from '../types'
import FPL, { fetchAPI, fetchMultipleAPI } from './fpl'

export class ClassicLeague extends FPL {
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
  public async getDetails(
    page = 1,
    pageNewEntries = 1,
    phase = 1,
  ): Promise<ClassicLeagueDelegate | ClassicLeaugesDelegate> {
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
        const endpoint: string = API_URLS.LEAGUE_CLASSIC_RANK.replace(
          '{}',
          this.id.toString(),
        )
          .replace('{}', page.toString())
          .replace('{}', pageNewEntries.toString())
          .replace('{}', phase.toString())
        const { data }: ClassicLeagueResp = await fetchAPI(endpoint)
        return data
      } catch (error) {
        return error
      }
    }
  }
}
