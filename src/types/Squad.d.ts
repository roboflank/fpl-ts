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
