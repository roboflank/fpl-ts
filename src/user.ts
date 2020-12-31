import { API_URLS, API_BASE_URL } from './constants'
import {
  UserDelegate,
  UserProperties,
  GWHistoryDelegate,
  TransferDelegate,
  PickHistoryDelegate,
  PickDelegate,
  ChipsHistoryDelegate,
  ActiveChipsDelegate,
  AutomaticSubsDelegate,
  ResponseDataDelegate,
  ActiveChipDelegate,
  ChipTypesDelegate,
  SubstitutionDelegate,
} from './types'
import FPL from './fpl'

/**
 * All user team related queries require TeamID
 * @param team_id
 * @example const team = new User(1)
 */
export class User extends FPL implements UserProperties {
  userId: number
  constructor(userId: number) {
    super()
    this.userId = userId
  }

  /**
   * Return user's team details
   * @example
   * ```
   * const team = new User(1).getDetails()
   * ```
   */
  public async getDetails(): Promise<UserDelegate[]> {
    const endpoint: string = API_URLS.USER.replace('{}', this.userId.toString())
    const { data } = await this.fetchAPI(endpoint)
    return data
  }

  /**
   * Returns array of requested Gameweek history, if not, returns all gw
   * @params gw[] (optional)
   * @returns GWHistoryDelegate[]
   * @example
   * ```
   * const history = await new User(1).getTransfers([1, 2, 4])
   * ```
   */
  public async gwHistory(gw?: number[]): Promise<GWHistoryDelegate[]> {
    const endpoint: string = API_URLS.USER_HISTORY.replace(
      '{}',
      this.userId.toString(),
    )
    const { data } = await this.fetchAPI(endpoint)
    try {
      const currentData = data.current
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
   * @params gw[] (optional)
   * @returns TransferDelegate[]
   * @example
   * ```
   * const transfers = await new User(1).getTransfers([1])
   * ```
   */
  public async getTransfers(gw?: number[]): Promise<TransferDelegate[]> {
    const endpoint: string = API_URLS.USER_TRANSFERS.replace(
      '{}',
      this.userId.toString(),
    )
    const { data } = await this.fetchAPI(endpoint)

    try {
      const currentData = data
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
   * @params gw[] (optional)
   * @returns PickHistoryDelegate
   * @example
   * ```
   * const transfers = await new User(1).getPicks([1])
   * ```
   * @remark Will return picks for the requested GWs. If empty, will return for all GWs
   */

  public async getPicks(gw?: number[]): Promise<PickHistoryDelegate> {
    const entryURL =
      API_BASE_URL + 'entry/' + this.userId.toString() + '/event/{}/picks/'
    const gwPicks: PickHistoryDelegate = {}

    if (!gw || gw?.length == 0) {
      // TODO: Replace to get last GW
      const latestGW = 16
      const gws = Array.from(Array(latestGW).keys()).map((i) => 1 + i * 1)
      const gwURL: string[] = []
      gws.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
        gwPicks[num] = []
      })
      try {
        const data = await this.fetchMultipleAPI(gwURL)
        data.forEach(({ data }: ResponseDataDelegate) => {
          const entryPick: PickDelegate[] = data.picks
          gwPicks[data.entry_history.event] = entryPick
        })
        return gwPicks
      } catch (err) {
        return err
      }
    } else {
      const gwURL: string[] = []
      gw.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
        gwPicks[num] = []
      })
      try {
        const data = await this.fetchMultipleAPI(gwURL)
        data.forEach(({ data }: ResponseDataDelegate) => {
          const entryPick: PickDelegate[] = data.picks
          gwPicks[data.entry_history.event] = entryPick
        })
        return gwPicks
      } catch (err) {
        return err
      }
    }
  }

  /**
   * Return user's chip history
   * @returns ChipsHistoryDelegate
   * @example
   * ```
   * const team = new User(1).getChipsHistory()
   * ```
   */
  public async getChipsHistory(): Promise<ChipsHistoryDelegate[]> {
    const endpoint: string = API_URLS.USER_HISTORY.replace(
      '{}',
      this.userId.toString(),
    )
    const { data } = await this.fetchAPI(endpoint)
    const chipsHist = data.chips
    return chipsHist
  }

  /**
   * Returns a list containing the user’s active chip for each gw, or the active chip of the given gameweek.
   * @returns ActiveChipsDelegate
   * @example
   * ```
   * const team = new User(1).getActiveChips()
   * ```
   */
  public async getActiveChips(gw?: number[]): Promise<ActiveChipsDelegate> {
    const entryURL =
      API_BASE_URL + 'entry/' + this.userId.toString() + '/event/{}/picks/'
    const chipsHist: ActiveChipsDelegate = []

    if (!gw || gw?.length == 0) {
      // TODO: Replace to get last GW
      const latestGW = 16
      const gws = Array.from(Array(latestGW).keys()).map((i) => 1 + i * 1)
      const gwURL: string[] = []
      gws.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
      })
      try {
        const resp = await this.fetchMultipleAPI(gwURL)
        resp.forEach(({ data }: ResponseDataDelegate) => {
          const activeChip: ChipTypesDelegate = data.active_chip
          const gwChip: ActiveChipDelegate = {
            event: data.entry_history.event,
          }
          if (activeChip) {
            gwChip.name = activeChip
            chipsHist.push(gwChip)
          }
        })
        return chipsHist
      } catch (err) {
        return err
      }
    } else {
      const gwURL: string[] = []
      gw.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
      })
      try {
        const resp = await this.fetchMultipleAPI(gwURL)
        resp.forEach(({ data }: ResponseDataDelegate) => {
          const activeChip: ChipTypesDelegate = data.active_chip
          const gwChip: ActiveChipDelegate = {
            event: data.entry_history.event,
          }
          if (activeChip) {
            gwChip.name = activeChip
            chipsHist.push(gwChip)
          }
        })
        return chipsHist
      } catch (err) {
        return err
      }
    }
  }

  /**
   * Get Automatic Substitutions
   * Returns a list containing the user’s active chip for each gameweek, or the active chip of the given gameweek.
   * @returns AutomaticSubsDelegate
   * @example
   * ```
   * const team = new User(1).getAutomaticSubs()
   * ```
   */
  public async getAutomaticSubs(gw?: number[]): Promise<AutomaticSubsDelegate> {
    const entryURL =
      API_BASE_URL + 'entry/' + this.userId.toString() + '/event/{}/picks/'
    const gwSubs: AutomaticSubsDelegate = {}

    if (!gw || gw?.length == 0) {
      // TODO: Replace to get last GW
      const latestGW = 16
      const gws = Array.from(Array(latestGW).keys()).map((i) => 1 + i * 1)
      const gwURL: string[] = []
      gws.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
        // gwSubs[num] = []
      })
      try {
        const data = await this.fetchMultipleAPI(gwURL)
        data.forEach(({ data }: ResponseDataDelegate) => {
          const autosub: SubstitutionDelegate[] = data.automatic_subs
          if (autosub.length > 0) {
            gwSubs[data.entry_history.event] = data.automatic_subs
          }
        })
        return gwSubs
      } catch (err) {
        return err
      }
    } else {
      const gwURL: string[] = []
      gw.forEach((num) => {
        const endpoint: string = entryURL.replace('{}', num.toString())
        gwURL.push(endpoint)
        gwSubs[num] = []
      })
      try {
        const data = await this.fetchMultipleAPI(gwURL)
        data.forEach(({ data }: ResponseDataDelegate) => {
          const autosub: SubstitutionDelegate[] = data.automatic_subs
          if (autosub.length > 0) {
            gwSubs[data.entry_history.event] = data.automatic_subs
          }
        })
        return gwSubs
      } catch (err) {
        return err
      }
    }
  }
}