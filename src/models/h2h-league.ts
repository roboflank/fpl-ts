import FPL, { fetchAPI, fetchMultipleAPI } from './fpl'
import { API_URLS } from '../constants'
import {
  H2HStandingDelegate,
  H2HLeagueDelegate,
  H2HResp,
  H2HLeaguesDelegate,
  H2HMatchesDelegate,
  H2HMatchDelegate,
  H2HMatchesResp,
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
   * Returns the current league’s details & standings of the given page.
   **/
  public async getDetails(): Promise<H2HLeagueDelegate | H2HLeaguesDelegate> {
    if (Array.isArray(this.id)) {
      const ids = this.id.filter((v, i, a) => a.indexOf(v) === i)
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

  /**
   * Returns gameweek matches in league.
   * @param event
   * @param page
   **/
  public async getFixtures(
    event = 1,
    page = 1,
  ): Promise<H2HMatchDelegate | H2HMatchesDelegate> {
    if (Array.isArray(this.id)) {
      const ids = this.id.filter((v, i, a) => a.indexOf(v) === i)
      const gwURL: string[] = []
      ids.forEach((id) => {
        const endpoint: string = API_URLS.LEAGUE_H2H_FIXTURES.replace(
          '{}',
          id.toString(),
        )
          .replace('{}', event.toString())
          .replace('{}', page.toString())
        gwURL.push(endpoint)
      })
      try {
        const resp: H2HMatchesResp[] = await fetchMultipleAPI(gwURL)
        const matches: H2HMatchesDelegate = {}
        resp.forEach((league, index: number) => {
          const pos: number = ids[index]
          matches[pos] = league.data
        })
        return matches
      } catch (error) {
        return error
      }
    } else {
      try {
        const endpoint: string = API_URLS.LEAGUE_H2H_FIXTURES.replace(
          '{}',
          this.id.toString(),
        )
          .replace('{}', event.toString())
          .replace('{}', page.toString())
        const { data }: H2HResp = await fetchAPI(endpoint)
        return data
      } catch (error) {
        return error
      }
    }
  }

  /**
   * Returns gameweek matches in league.
   * @param event
   * @param page
   **/
  public async getEntryDetails(
    entry = 1,
    page = 1,
  ): Promise<H2HStandingDelegate | H2HLeaguesDelegate> {
    if (Array.isArray(this.id)) {
      const ids = this.id.filter((v, i, a) => a.indexOf(v) === i)
      const gwURL: string[] = []
      ids.forEach((id) => {
        const endpoint: string = API_URLS.LEAGUE_H2H_FIXTURES.replace(
          '{}',
          id.toString(),
        )
          .replace('{}', entry.toString())
          .replace('{}', page.toString())
        gwURL.push(endpoint)
      })
      try {
        const resp: H2HResp[] = await fetchMultipleAPI(gwURL)
        const matches: H2HLeaguesDelegate = {}
        resp.forEach((league) => {
          matches[league?.data?.league?.id] = league.data
        })
        return matches
      } catch (error) {
        return error
      }
    } else {
      try {
        const endpoint: string = API_URLS.LEAGUE_H2H_FIXTURES.replace(
          '{}',
          this.id.toString(),
        )
          .replace('{}', entry.toString())
          .replace('{}', page.toString())
        const { data }: H2HResp = await fetchAPI(endpoint)
        return data
      } catch (error) {
        return error
      }
    }
  }
}
