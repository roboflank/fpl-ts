import FPL from './fpl'
import { API_URLS } from '../constants'
import {
  GameweekDelegate,
  StaticResponse,
  FixtureDelegate,
  FixturesRespDelegate,
} from '../types'

export class Gameweek extends FPL {
  id: number[] | number
  constructor(id: number[] | number) {
    super()
    this.id = id
  }
  public async getDetails(): Promise<GameweekDelegate | GameweekDelegate[]> {
    let result: GameweekDelegate | GameweekDelegate[] = []
    try {
      const { data }: StaticResponse = await this.fetchAPI(API_URLS.STATIC)
      if (Array.isArray(this.id)) {
        const gws: GameweekDelegate[] = []
        const ids = this.id
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
  public async getFixtures(): Promise<FixtureDelegate[]> {
    const fixtures: FixtureDelegate[] = []
    try {
      const { data }: FixturesRespDelegate = await this.fetchAPI(
        API_URLS.FIXTURES,
      )

      if (Array.isArray(this.id)) {
        const ids = this.id
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
