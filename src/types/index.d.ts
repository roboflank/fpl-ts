import { strEnum } from '../utils'

export type SquadDelegate = {
  id: string
  name: string
  current_event: number | null
  joined_time: Date | null
  started_event: number | null
  player_first_name: string | null
  player_last_name: string | null
  player_region_id: number | null
  player_region_name: string | null
  player_region_iso_code_short: string | null
  player_region_iso_code_long: string | null
  summary_overall_points: number | null
  summary_overall_rank: number | null
  summary_event_points: number | null
  summary_event_rank: number | null
  kit: JsonValue | null
  last_deadline_bank: number | null
  last_deadline_value: number | null
  last_deadline_total_transfers: number | null
  favourite_team: number | null
}

export interface SquadProperties {
  squadId: number | null
}

export type GWHistoryDelegate = {
  event: number
  points: number
  total_points: number
  rank: number
  rank_sort: number
  overall_rank: number
  bank: number
  value: number
  event_transfers: number
  event_transfers_cost: number
  points_on_bench: number
}

export type TransferDelegate = {
  element_in: number
  element_in_cost: number
  element_out: number
  element_out_cost: number
  entry: number
  event: number
  time: Date
}

export type PickDelegate = {
  element: number
  position: number
  multiplier: number
  is_captain: boolean
  is_vice_captain: boolean
}

export type AutomaticSubsDelegate = {
  entry: number
  element_in: number
  element_out: number
  event: number
}

const ChipTypes = strEnum(['wildcard', '3xc', 'freehit', 'benchboost', null])
export type ChipTypesDelegate = keyof typeof ChipTypes

// https://fantasy.premierleague.com/api/entry/91928/event/10/picks/
export type GWPicksDelegate = {
  active_chip: ChipTypesDelegate
  automatic_subs: AutomaticSubsDelegate[]
  entry_history: GWHistoryDelegate
  picks: PickDelegate[]
}

export type PickHistoryDelegate = {
  [key: number]: PickDelegate[]
}

export type ChipHistoryDelegate = {
  name: ChipTypesDelegate
  time: Date | null
  event: number
}

export type ChipsHistoryDelegate = ChipHistoryDelegate[]

export type ActiveChipDelegate = {
  name?: ChipTypesDelegate
  event: number
}

type ActiveChipsDelegate = ActiveChipDelegate[]

export type ResponseDataDelegate = {
  data: GWPicksDelegate
}
