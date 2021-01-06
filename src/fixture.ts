import FPL from './fpl'
import { API_URLS } from './constants'
import { FixtureDelegate, FixturesRespDelegate } from './types'

export class Fixture extends FPL {
  id: number
  constructor(id: number) {
    super()
    this.id = id
  }
  public async getDetails(): Promise<FixtureDelegate | null> {
    let fixture = null
    try {
      const { data }: FixturesRespDelegate = await this.fetchAPI(
        API_URLS.FIXTURES,
      )
      data.forEach((elem) => {
        if (elem.id == this.id) {
          fixture = elem
        }
      })
      return fixture
    } catch (error) {
      return error
    }
  }
}
