import FPL from './fpl'
import { API_URLS } from '../constants'
import {
  FixtureDelegate,
  FixturesRespDelegate,
  FixStatsItemDelegate,
} from '../types'

/**
 * Fixture Class extracted api from https://fantasy.premierleague.com/api/fixtures/
 * @remark Gameweek filters from https://fantasy.premierleague.com/api/fixtures/?event=1
 * @example
 * ```
 * const fixture = new Fixture(1)
 * ```
 */
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

  public async getAssisters(): Promise<FixStatsItemDelegate> {
    let assisters: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'assists') {
          delete elem.identifier
          assisters = elem
        }
      })
      return assisters
    } catch (error) {
      return error
    }
  }

  public async getBonus(): Promise<FixStatsItemDelegate> {
    let bonus: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'bonus') {
          delete elem.identifier
          bonus = elem
        }
      })
      return bonus
    } catch (error) {
      return error
    }
  }

  public async getBPS(): Promise<FixStatsItemDelegate> {
    let bps: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'bps') {
          delete elem.identifier
          bps = elem
        }
      })
      return bps
    } catch (error) {
      return error
    }
  }

  public async getGoalscorers(): Promise<FixStatsItemDelegate> {
    let goalscorers: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'goals_scored') {
          delete elem.identifier
          goalscorers = elem
        }
      })
      return goalscorers
    } catch (error) {
      return error
    }
  }
  public async getOwnGoalscorers(): Promise<FixStatsItemDelegate> {
    let owngoals: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'own_goals') {
          delete elem.identifier
          owngoals = elem
        }
      })
      return owngoals
    } catch (error) {
      return error
    }
  }
  public async getPenaltyMisses(): Promise<FixStatsItemDelegate> {
    let missedpenalties: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'penalties_missed') {
          delete elem.identifier
          missedpenalties = elem
        }
      })

      return missedpenalties
    } catch (error) {
      return error
    }
  }
  public async getPenaltySaves(): Promise<FixStatsItemDelegate> {
    let savedpenalties: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'penalties_saved') {
          delete elem.identifier
          savedpenalties = elem
        }
      })
      return savedpenalties
    } catch (error) {
      return error
    }
  }
  public async getRedCards(): Promise<FixStatsItemDelegate> {
    let redcards: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'red_cards') {
          delete elem.identifier
          redcards = elem
        }
      })
      return redcards
    } catch (error) {
      return error
    }
  }
  public async getYellowCards(): Promise<FixStatsItemDelegate> {
    let yellowcards: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'yellow_cards') {
          delete elem.identifier
          yellowcards = elem
        }
      })
      return yellowcards
    } catch (error) {
      return error
    }
  }
  public async getSaves(): Promise<FixStatsItemDelegate> {
    let saves: FixStatsItemDelegate = {
      a: [],
      h: [],
    }

    try {
      const fixture = await this.getDetails()
      fixture?.stats.forEach((elem) => {
        if (elem.identifier === 'saves') {
          delete elem.identifier
          saves = elem
        }
      })
      return saves
    } catch (error) {
      return error
    }
  }
}
