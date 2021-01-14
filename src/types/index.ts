import { strEnum } from '../utils'

export interface UserDelegate {
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
  kit: string | null
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

const ChipTypes = strEnum(['wildcard', '3xc', 'freehit', 'bboost'])
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

export type ActiveChipsDelegate = ActiveChipDelegate[]

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
  news: string | null
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
  value_season: string | null
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

export type PlayerTeamDelegate = {
  [key: number]: PlayerDelegate[]
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
])

export type IdentifiersDelegate = keyof typeof IdentifierOpts | null

export type AwayHomeStatType = {
  value?: number
  element?: number
}

export type FixStatsItemDelegate = {
  identifier?: IdentifiersDelegate
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

export type TeamFixturesDelegate = {
  [key: number]: FixtureDelegate[]
}
export type ChipsPlayDelegate = {
  chip_name?: ChipTypesDelegate
  num_played?: number
}
export type GameweekDelegate = {
  id: number
  name: string
  deadline_time: Date
  average_entry_score: number
  finished: boolean
  data_checked: boolean
  highest_scoring_entry: number | null
  deadline_time_epoch: number
  deadline_time_game_offset: number
  highest_score: number | null
  is_previous: boolean
  is_current: boolean
  is_next: boolean
  chip_plays: ChipsPlayDelegate[]
  most_selected: number | null
  most_transferred_in: number | null
  top_element: number | null
  top_element_info: {
    id: number
    points: number
  } | null
  transfers_made: number | null
  most_captained: number | null
  most_vice_captained: number | null
}

export type TeamDelegate = {
  code: number
  draw: number
  form: string | null
  id: number
  loss: number
  name: string
  played: number
  points: number
  position: number
  short_name: string
  strength: number
  team_division: any | null
  unavailable: boolean
  win: number
  strength_overall_home: number
  strength_overall_away: number
  strength_attack_home: number
  strength_attack_away: number
  strength_defence_home: number
  strength_defence_away: number
  pulse_id: number
}

type GameSettingsDelegate = {
  league_join_private_max: number
  league_join_public_max: number
  league_max_size_public_classic: number
  league_max_size_public_h2h: number
  league_max_size_private_h2h: number
  league_max_ko_rounds_private_h2h: number
  league_prefix_public: string
  league_points_h2h_win: number
  league_points_h2h_lose: number
  league_points_h2h_draw: number
  league_ko_first_instead_of_random: boolean
  cup_start_event_id: number
  cup_stop_event_id: number
  cup_qualifying_method: string
  cup_type: string
  squad_squadplay: number
  squad_squadsize: number
  squad_team_limit: number
  squad_total_spend: number
  ui_currency_multiplier: number
  ui_use_special_shirts: boolean
  ui_special_shirt_exclusions: any[]
  stats_form_days: number
  sys_vice_captain_enabled: boolean
  transfers_cap: number
  transfers_sell_on_fee: number
  league_h2h_tiebreak_stats: string[]
  timezone: string
}

type PhaseDelegate = {
  id: number
  name: string
  start_event: number
  stop_event: number
}

const ElementStatsLabel = strEnum([
  'Minutes played',
  'Goals scored',
  'Assists',
  'Clean sheets',
  'Goals conceded',
  'Own goals',
  'Penalties saved',
  'Penalties missed',
  'Yellow cards',
  'Red cards',
  'Saves',
  'Bonus',
  'Bonus Points System',
  'Influence',
  'Creativity',
  'Threat',
  'ICT Index',
])

type ElementStatLabel = keyof typeof ElementStatsLabel | null

const ElementStatsName = strEnum([
  'minutes',
  'goals_scored',
  'assists',
  'clean_sheets',
  'goals_conceded',
  'own_goals',
  'penalties_saved',
  'penalties_missed',
  'yellow_cards',
  'red_cards',
  'saves',
  'bonus',
  'bps',
  'influence',
  'creativity',
  'threat',
  'ict_index',
])

type ElementStatName = keyof typeof ElementStatsName | null

type ElementStatDelegate = {
  label: ElementStatLabel
  name: ElementStatName
}

const PosName = strEnum(['GKP', 'DEF', 'MID', 'FWD'])

type PositionName = keyof typeof PosName | null

const PosPluralName = strEnum([
  'Goalkeepers',
  'Defenders',
  'Midfielders',
  'Forwards',
])

type PositionPluralName = keyof typeof PosPluralName | null

const PosShortName = strEnum([
  'Goalkeepers',
  'Defenders',
  'Midfielders',
  'Forwards',
])

type PositionShortName = keyof typeof PosShortName | null

type ElementTypeDelegate = {
  id: number
  plural_name: PositionPluralName
  plural_name_short: PositionName
  singular_name: PositionShortName
  singular_name_short: PositionName
  squad_select: number
  squad_min_play: number
  squad_max_play: number
  ui_shirt_specific: true
  sub_positions_locked: number[]
  element_count: number
}
export interface StaticDelegate {
  events: GameweekDelegate[]
  game_settings: GameSettingsDelegate
  phases: PhaseDelegate[]
  teams: TeamDelegate[]
  total_players: number
  elements: PlayerDelegate[]
  element_stats: ElementStatDelegate[]
  element_types: ElementTypeDelegate[]
}

export type StaticResponse = {
  data: StaticDelegate
}

export type LeagueEntryDelegate = {
  id: number
  event_total: number
  player_name: string
  rank: number
  last_rank: number
  rank_sort: number
  total: number
  entry: number
  entry_name: string
}

export type LeagueDetailDelegate = {
  id: number
  name: string
  created: Date
  closed: boolean
  max_entries: number | null
  league_type: string
  scoring: string
  admin_entry: number
  start_event: number
  code_privacy: string
  rank: number | null
}

export type NewEntryDelegate = {
  entry: number
  entry_name: string
  joined_time: Date
  player_first_name: string
  player_last_name: string
}

export type NewEntriesDelegate = {
  has_next: boolean
  page: number
  results: NewEntryDelegate[]
}

export type LeagueStandingDelegate = {
  has_next: boolean
  page: number
  results: LeagueEntryDelegate[]
}

export type LeagueStandingsDelegate = {
  [key: number]: LeagueStandingDelegate
}

export type ClassicLeagueDelegate = {
  league: LeagueDetailDelegate
  new_entries: NewEntryDelegate
  standings: LeagueStandingDelegate
}

export type ClassicLeagueResp = {
  data: ClassicLeagueDelegate
}

export type ClassicLeaugesDelegate = {
  [key: number]: ClassicLeagueDelegate
}

export type H2HLeagueDetailsDelegate = {
  id: number
  name: string
  created: Date
  closed: boolean
  max_entries: number | null
  league_type: string
  scoring: string
  admin_entry: number
  start_event: number
  code_privacy: string
  ko_rounds: number | null
}

export type H2HEntryDelegate = {
  id: number
  event_total: number
  player_name: string
  rank: number
  last_rank: number
  rank_sort: number
  total: number
  entry: number
  entry_name: string
  matches_played: number
  matches_won: number
  matches_drawn: number
  matches_lost: number
  points_for: number
}

export type H2HStandingDelegate = {
  has_next: boolean
  page: number
  results: H2HEntryDelegate[]
}

export type H2HStandingsDelegate = {
  [key: number]: H2HStandingDelegate
}

export type H2HLeagueDelegate = {
  league: H2HLeagueDetailsDelegate
  new_entries: NewEntryDelegate
  standings: H2HStandingDelegate
}

export type H2HLeaguesDelegate = {
  [key: number]: H2HLeagueDelegate
}

export type H2HResp = {
  data: H2HLeagueDelegate
}

export type H2HMatchDelegate = {
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
  is_knockout: boolean
  winner: number | null
  seed_value: null
  event: number
  tiebreak: null
}

export type H2HMatchesDelegate = {
  [key: number]: H2HMatchDelegate
}

export type H2HMatchesResp = {
  data: H2HMatchDelegate
}
