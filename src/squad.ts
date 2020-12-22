import { API_URLS } from './urls'
import axios, { AxiosResponse } from 'axios'
import {
  SquadDelegate,
  SquadProperties,
  GWHistoryDelegate,
  TransferDelegate,
  PickDelegate,
} from './types'
import FPL from './fpl'

/**
 * All user team related queries require TeamID
 * @param team_id
 * @example const team = new Squad(1)
 */
export class Squad extends FPL implements SquadProperties {
  squadId: number
  constructor(squadId: number) {
    super()
    this.squadId = squadId
  }

  /**
   * Return user's team details
   * @example
   * ```
   * const team = new Squad(1).getDetails()
   * ```
   */
  public async getDetails(): Promise<SquadDelegate[]> {
    const endpoint: string = API_URLS.USER.replace(
      '{}',
      this.squadId.toString(),
    )
    const result: AxiosResponse<any> = await axios.get(endpoint, {
      headers: this.headers,
    })
    return result.data
  }

  /**
   * Returns array of requested Gameweek history, if not, returns all gw
   * @params gw[]
   * @returns GWHistoryDelegate[]
   * @example
   * ```
   * const history = await new Squad(1).getTransfers([1, 2, 4])
   * ```
   */
  public async gwHistory(gw?: number[]): Promise<GWHistoryDelegate[]> {
    const endpoint: string = API_URLS.USER_HISTORY.replace(
      '{}',
      this.squadId.toString(),
    )
    const result: AxiosResponse<any> = await axios.get(endpoint, {
      headers: this.headers,
    })
    try {
      const currentData = result.data.current
      if (!gw || gw?.length == 0) {
        return currentData
      } else {
        // Filter to unique set
        const gwSet = new Set(gw)
        const filteredGW: GWHistoryDelegate[] = []
        currentData.forEach((data: GWHistoryDelegate) => {
          gwSet.forEach((filter) => {
            if (data.event == filter) {
              filteredGW.push(data)
            }
          })
        })
        return filteredGW
      }
    } catch (err) {
      return err
    }
  }

  /**
   * Return user's team transfer history
   * @params gw[]
   * @returns TransferDelegate[]
   * @example
   * ```
   * const transfers = await new Squad(1).getTransfers([1])
   * ```
   */
  public async getTransfers(gw?: number[]): Promise<TransferDelegate[]> {
    const endpoint: string = API_URLS.USER_TRANSFERS.replace(
      '{}',
      this.squadId.toString(),
    )
    const result: AxiosResponse<any> = await axios.get(endpoint, {
      headers: this.headers,
    })
    try {
      const currentData = result.data
      if (!gw || gw?.length == 0) {
        return currentData
      } else {
        const gwSet = new Set(gw)
        const filteredGW: TransferDelegate[] = []
        currentData.forEach((data: TransferDelegate) => {
          gwSet.forEach((filter) => {
            if (data.event == filter) {
              filteredGW.push(data)
            }
          })
        })
        return filteredGW
      }
    } catch (err) {
      return err
    }
  }

  /**
   * Return user's team player picks history
   * @params gw[]
   * @returns PickDelegate[]
   * @example
   * ```
   * const transfers = await new Squad(1).getPicks([1])
   * ```
   */

  // TODO: If null gw is passed, get the previous/latest gw
  public async getPicks(gw: number[]): Promise<PickDelegate[]> {
    const endpoint: string = API_URLS.USER_PICKS.replace(
      '{}',
      this.squadId.toString(),
    )
    const result: AxiosResponse<any> = await axios.get(endpoint, {
      headers: this.headers,
    })
    // TODO: Does this really return err
    return result.data.picks
  }
}
