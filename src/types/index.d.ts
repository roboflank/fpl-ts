import { strEnum } from '../utils'

export type UserDelegate = {
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

export interface UserProperties {
  userId: number | null
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

export type SubstitutionDelegate = {
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
  automatic_subs: SubstitutionDelegate[]
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

export type AutomaticSubsDelegate = {
  [key: number]: SubstitutionDelegate[]
}

export type CupStatusDelegate = {
  qualification_event: number
  qualification_numbers: number
  qualification_rank: number
  qualification_state: string
}

export type CupMatchDelegate = {
  id: number
  entry_1_entry: number
  entry_1_name: string
  entry_1_player_name: string
  entry_1_points: number
  entry_1_win: number
  entry_1_draw: number
  entry_1_loss: number
  entry_1_total: number
  entry_2_entry: number
  entry_2_name: string
  entry_2_player_name: string
  entry_2_points: number
  entry_2_win: number
  entry_2_draw: number
  entry_2_loss: number
  entry_2_total: number
  is_knockout: boolean | null
  winner: string | null
  seed_value: string | null
  event: number
  tiebreak: string | null
}

export type CupMatchesDelegate = {
  [key: number]: CupMatchDelegate
}

export type CupRespDelegate = {
  cup_matches: CupMatchDelegate[]
  cup_status: CupStatusDelegate
}

export type SeasonHistoryDelegate = {
  season_name: string
  total_points: number
  rank: number
}

export type SeasonsHistoryDelegate = SeasonHistoryDelegate[]

export type PlayerDelegate = {
  chance_of_playing_next_round: number | null
  chance_of_playing_this_round: number | null
  code: number
  cost_change_event: number
  cost_change_event_fall: number
  cost_change_start: number
  cost_change_start_fall: number
  dreamteam_count: number
  element_type: number
  ep_next: string | null
  ep_this: string | null
  event_points: number
  first_name: string
  form: string
  id: number
  in_dreamteam: boolean
  news: sting | null
  news_added: string | null
  now_cost: number
  photo: string
  points_per_game: string
  second_name: string | null
  selected_by_percent: string
  special: false
  squad_number: number | null
  status: string | null
  team: number
  team_code: number
  total_points: number
  transfers_in: number
  transfers_in_event: number
  transfers_out: number
  transfers_out_event: number
  value_form: string | null
  value_season: string | nul
  web_name: string
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  saves: number
  bonus: number
  bps: number
  influence: string | null
  creativity: string | null
  threat: string | null
  ict_index: string | null
  influence_rank: number
  influence_rank_type: number | null
  creativity_rank: number
  creativity_rank_type: number
  threat_rank: number
  threat_rank_type: number
  ict_index_rank: number
  ict_index_rank_type: number
  summary?: PlayerSummaryDelegate | null
  stats?: PlayerStatsDelegate | null
}

const IdentifierOpts = strEnum([
  'goals_scored',
  'assists',
  'own_goals',
  'penalties_saved',
  'penalties_missed',
  'yellow_cards',
  'red_cards',
  'saves',
  'bonus',
  'bps',
  null,
])

export type IdentifiersDelegate = keyof typeof IdentifierOpts

export type AwayHomeStatType = {
  value: number
  element: number
}

export type FixStatsItemDelegate = {
  identifier: IdentifiersDelegate
  a: AwayHomeStatType[]
  h: AwayHomeStatType[]
}

export interface FixtureDelegate {
  code: number | null
  event: number | null
  finished: boolean | null
  finished_provisional: boolean | null
  id: number
  kickoff_time: Date | null
  minutes: number
  provisional_start_time: boolean | null
  started: boolean | null
  team_a: number | null
  team_a_score: number | null
  team_h: number | null
  team_h_score: number | null
  stats: FixStatsItemDelegate[]
  team_h_difficulty: number | null
  team_a_difficulty: number | null
  pulse_id: number | null
}

export interface PlayerFixtureDelegate extends FixtureDelegate {
  event_name: string | null
  is_home: boolean
  difficulty: number
}

export type PlayerHistPastDelegate = {
  season_name: string
  element_code: number
  start_cost: number
  end_cost: number
  total_points: number
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  saves: number
  bonus: number
  bps: number
  influence: string
  creativity: string
  threat: string
  ict_index: string
}

export interface PlayerHistDelegate extends PlayerDelegate {
  element: number
  fixture: number | null
  was_home: boolean
  kickoff_time: Date | null
  team_h_score: number | null
  team_a_score: number | null
  round: number | null
  value: number | null
  transfers_balance: number | null
  selected: number | null
}

export type PlayerSummaryDelegate = {
  fixtures: PlayerFixtureDelegate[]
  history: PlayerHistDelegate[]
  history_past: PlayerHistPastDelegate
}

export type SummaryRespDelegate = {
  data: PlayerSummaryDelegate
}

export type GamesPlayedDelegate = {
  [key: number]: PlayerHistDelegate[]
}

export type PlayerStatsDelegate = {
  pp90: number | null
  vapm: number | null
  gamesPlayed: number | null
}

export type FixturesRespDelegate = {
  data: FixtureDelegate[]
}
