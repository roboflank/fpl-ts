import FPL from './fpl'
import {
  PlayerDelegate,
  PlayerSummaryDelegate,
  SummaryRespDelegate,
} from '../types'
import { API_URLS } from '../constants'

export class Player extends FPL {
  playersId: number[]
  constructor(playersId: number[]) {
    super()
    this.playersId = playersId
  }

  //TODO: Search player by web_name

  /**
   * Returns array of requested players summary. If none, it returns all players summary
   * @returns PlayerSummaryDelegate[]
   * @example
   * ```
   * const player = await new Player([302]).getSummary()
   * ```
   */

  public async getSummary(): Promise<PlayerSummaryDelegate[]> {
    const gwURL: string[] = []
    const playersSum: PlayerSummaryDelegate[] = []
    this.playersId.forEach((num) => {
      const endpoint: string = API_URLS.PLAYER_SUMMARY.replace(
        '{}',
        num.toString(),
      )
      gwURL.push(endpoint)
    })

    try {
      const resp = await this.fetchMultipleAPI(gwURL)
      resp.forEach(({ data }: SummaryRespDelegate) => {
        playersSum.push(data)
      })
      return playersSum
    } catch (error) {
      return error
    }
  }

  /**
   * Returns array of requested players. If none, it returns all players
   * @ remark stats from https://www.reddit.com/r/FantasyPL/comments/6r60fu/exploring_a_key_metric_value_added_per_1m/
   * @remark set includeSummary to true to return player profile with summary
   * @params includeSummary
   * @returns PlayerDelegate[]
   * @example
   * ```
   * const player = await new Player([302]).getDetails(false)
   * ```
   * @remark Return player details with summary
   * @example
   * ```
   * const player = await new Player([302]).getDetails(true)
   * ```
   */

  public async getDetails(
    includeStats?: boolean,
    includeSummary?: boolean,
  ): Promise<PlayerDelegate[]> {
    const endpoint: string = API_URLS.STATIC
    try {
      const { data } = await this.fetchAPI(endpoint)
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
        if (includeStats) {
          try {
            const summary = await this.getSummary()
            summary.forEach((data, index) => {
              const stats = {
                gamesPlayed: 0,
                vapm: 0,
                pp90: 0,
                ppm: 0,
              }
              const gamesPlayed = []
              const cost = filteredPlayers[index].now_cost
              const minutesPlayed = filteredPlayers[index].minutes
              const totalPoints = filteredPlayers[index].total_points
              let gamesPlayedCount = 0

              // Games played
              data.history.forEach((game) => {
                if (game.minutes > 0) {
                  gamesPlayed.push(game)
                }
              })
              gamesPlayedCount = gamesPlayed.length
              stats.gamesPlayed = gamesPlayedCount

              // Points scored per 90 minutes ("PP90")
              if (minutesPlayed == 0) {
                stats.pp90 = 0.0
              } else {
                stats.pp90 = (totalPoints / minutesPlayed) * 90.0
              }

              // Points scored per match ("PPM")
              if (gamesPlayedCount == 0) {
                stats.ppm = 0.0
              } else {
                stats.ppm = totalPoints / gamesPlayedCount
              }
              // Value added per £1M ("VAPM")
              if (gamesPlayedCount == 0 || cost == 0) {
                stats.vapm = 0.0
              } else {
                stats.vapm = (stats.ppm - 2) / (cost / 10)
              }

              filteredPlayers[index].summary = data
              filteredPlayers[index].stats = stats
            })
          } catch (error) {
            data.summary = null
            data.stats = null
          }
        } else if (!includeStats && includeSummary) {
          try {
            const summary = await this.getSummary()
            summary.forEach((data, index) => {
              filteredPlayers[index].summary = data
            })
          } catch (error) {
            data.summary = null
          }
        }
        return filteredPlayers
      }
    } catch (err) {
      return err
    }
  }
}
