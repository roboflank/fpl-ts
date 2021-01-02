import FPL from './fpl'
import { PlayerDelegate } from './types'
import { API_URLS } from './constants'

export class Player extends FPL {
  playersId: number[]
  constructor(playersId: number[]) {
    super()
    this.playersId = playersId
  }

  //TODO: Search player by web_name

  /**
   * Returns array of requested players. If none, it returns all players
   * @params playerId[] (optional)
   * @returns PlayerDelegate[]
   * @example
   * ```
   * const player = await new Player([302]).getDetails()
   * ```
   */
  public async getDetails(
    include_summary?: boolean,
  ): Promise<PlayerDelegate[]> {
    const endpoint: string = API_URLS.STATIC
    const { data } = await this.fetchAPI(endpoint)
    try {
      const playersData = data.elements
      if (!this.playersId || this.playersId?.length == 0) {
        return playersData
      } else {
        const playersData: PlayerDelegate[] = data.elements
        const playersIdSet = new Set(this.playersId)
        const filteredPlayers: PlayerDelegate[] = []
        playersData.forEach((data) => {
          playersIdSet.forEach((id) => {
            if (data.id == id) {
              filteredPlayers.push(data)
            }
          })
        })
        return filteredPlayers
      }
    } catch (err) {
      return err
    }
  }
}
