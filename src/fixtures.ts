import FPL from './fpl'
import { API_URLS } from './constants'
import { FixtureDelegate, FixturesRespDelegate } from './types'

/**
 * Get fixtures from GW
 */
export class Fixtures extends FPL {
  constructor() {
    super()
  }
  public async fromGW(gw: number[]): Promise<FixtureDelegate[]> {
    const fixtures: FixtureDelegate[] = []
    try {
      const { data }: FixturesRespDelegate = await this.fetchAPI(
        API_URLS.FIXTURES,
      )
      if (!gw || gw?.length == 0) {
        return data
      } else {
        data.forEach((elem) => {
          gw.forEach((gwId) => {
            if (elem.event == gwId) {
              fixtures.push(elem)
            }
          })
        })
      }

      return fixtures
    } catch (error) {
      return error
    }
  }
}
