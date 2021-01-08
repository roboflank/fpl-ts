---
id: "types"
title: "Module: types"
sidebar_label: "types"
hide_title: true
---

# Module: types

## Table of contents

### Interfaces

- [FixtureDelegate](../interfaces/types.fixturedelegate.md)
- [PlayerFixtureDelegate](../interfaces/types.playerfixturedelegate.md)
- [PlayerHistDelegate](../interfaces/types.playerhistdelegate.md)
- [StaticDelegate](../interfaces/types.staticdelegate.md)
- [UserDelegate](../interfaces/types.userdelegate.md)
- [UserProperties](../interfaces/types.userproperties.md)

## Type aliases

### ActiveChipDelegate

Ƭ **ActiveChipDelegate**: { `event`: *number* ; `name?`: [*ChipTypesDelegate*](types.md#chiptypesdelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`event` | *number* |
`name?` | [*ChipTypesDelegate*](types.md#chiptypesdelegate) |

Defined in: [types/index.ts:92](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L92)

___

### ActiveChipsDelegate

Ƭ **ActiveChipsDelegate**: [*ActiveChipDelegate*](types.md#activechipdelegate)[]

Defined in: [types/index.ts:97](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L97)

___

### AutomaticSubsDelegate

Ƭ **AutomaticSubsDelegate**: { [key: number]: [*SubstitutionDelegate*](types.md#substitutiondelegate)[];  }

Defined in: [types/index.ts:103](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L103)

___

### AwayHomeStatType

Ƭ **AwayHomeStatType**: { `element?`: *number* ; `value?`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`element?` | *number* |
`value?` | *number* |

Defined in: [types/index.ts:241](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L241)

___

### ChipHistoryDelegate

Ƭ **ChipHistoryDelegate**: { `event`: *number* ; `name`: [*ChipTypesDelegate*](types.md#chiptypesdelegate) ; `time`: Date \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`event` | *number* |
`name` | [*ChipTypesDelegate*](types.md#chiptypesdelegate) |
`time` | Date \| *null* |

Defined in: [types/index.ts:84](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L84)

___

### ChipTypesDelegate

Ƭ **ChipTypesDelegate**: keyof *typeof* ChipTypes

Defined in: [types/index.ts:70](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L70)

___

### ChipsHistoryDelegate

Ƭ **ChipsHistoryDelegate**: [*ChipHistoryDelegate*](types.md#chiphistorydelegate)[]

Defined in: [types/index.ts:90](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L90)

___

### ChipsPlayDelegate

Ƭ **ChipsPlayDelegate**: { `chip_name?`: [*ChipTypesDelegate*](types.md#chiptypesdelegate) ; `num_played?`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`chip_name?` | [*ChipTypesDelegate*](types.md#chiptypesdelegate) |
`num_played?` | *number* |

Defined in: [types/index.ts:343](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L343)

___

### CupMatchDelegate

Ƭ **CupMatchDelegate**: { `entry_1_draw`: *number* ; `entry_1_entry`: *number* ; `entry_1_loss`: *number* ; `entry_1_name`: *string* ; `entry_1_player_name`: *string* ; `entry_1_points`: *number* ; `entry_1_total`: *number* ; `entry_1_win`: *number* ; `entry_2_draw`: *number* ; `entry_2_entry`: *number* ; `entry_2_loss`: *number* ; `entry_2_name`: *string* ; `entry_2_player_name`: *string* ; `entry_2_points`: *number* ; `entry_2_total`: *number* ; `entry_2_win`: *number* ; `event`: *number* ; `id`: *number* ; `is_knockout`: *boolean* \| *null* ; `seed_value`: *string* \| *null* ; `tiebreak`: *string* \| *null* ; `winner`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`entry_1_draw` | *number* |
`entry_1_entry` | *number* |
`entry_1_loss` | *number* |
`entry_1_name` | *string* |
`entry_1_player_name` | *string* |
`entry_1_points` | *number* |
`entry_1_total` | *number* |
`entry_1_win` | *number* |
`entry_2_draw` | *number* |
`entry_2_entry` | *number* |
`entry_2_loss` | *number* |
`entry_2_name` | *string* |
`entry_2_player_name` | *string* |
`entry_2_points` | *number* |
`entry_2_total` | *number* |
`entry_2_win` | *number* |
`event` | *number* |
`id` | *number* |
`is_knockout` | *boolean* \| *null* |
`seed_value` | *string* \| *null* |
`tiebreak` | *string* \| *null* |
`winner` | *string* \| *null* |

Defined in: [types/index.ts:114](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L114)

___

### CupMatchesDelegate

Ƭ **CupMatchesDelegate**: { [key: number]: [*CupMatchDelegate*](types.md#cupmatchdelegate);  }

Defined in: [types/index.ts:139](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L139)

___

### CupRespDelegate

Ƭ **CupRespDelegate**: { `cup_matches`: [*CupMatchDelegate*](types.md#cupmatchdelegate)[] ; `cup_status`: [*CupStatusDelegate*](types.md#cupstatusdelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`cup_matches` | [*CupMatchDelegate*](types.md#cupmatchdelegate)[] |
`cup_status` | [*CupStatusDelegate*](types.md#cupstatusdelegate) |

Defined in: [types/index.ts:143](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L143)

___

### CupStatusDelegate

Ƭ **CupStatusDelegate**: { `qualification_event`: *number* ; `qualification_numbers`: *number* ; `qualification_rank`: *number* ; `qualification_state`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`qualification_event` | *number* |
`qualification_numbers` | *number* |
`qualification_rank` | *number* |
`qualification_state` | *string* |

Defined in: [types/index.ts:107](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L107)

___

### FixStatsItemDelegate

Ƭ **FixStatsItemDelegate**: { `a`: [*AwayHomeStatType*](types.md#awayhomestattype)[] ; `h`: [*AwayHomeStatType*](types.md#awayhomestattype)[] ; `identifier?`: [*IdentifiersDelegate*](types.md#identifiersdelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`a` | [*AwayHomeStatType*](types.md#awayhomestattype)[] |
`h` | [*AwayHomeStatType*](types.md#awayhomestattype)[] |
`identifier?` | [*IdentifiersDelegate*](types.md#identifiersdelegate) |

Defined in: [types/index.ts:246](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L246)

___

### FixturesRespDelegate

Ƭ **FixturesRespDelegate**: { `data`: [*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`data` | [*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[] |

Defined in: [types/index.ts:336](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L336)

___

### GWHistoryDelegate

Ƭ **GWHistoryDelegate**: { `bank`: *number* ; `event`: *number* ; `event_transfers`: *number* ; `event_transfers_cost`: *number* ; `overall_rank`: *number* ; `points`: *number* ; `points_on_bench`: *number* ; `rank`: *number* ; `rank_sort`: *number* ; `total_points`: *number* ; `value`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`bank` | *number* |
`event` | *number* |
`event_transfers` | *number* |
`event_transfers_cost` | *number* |
`overall_rank` | *number* |
`points` | *number* |
`points_on_bench` | *number* |
`rank` | *number* |
`rank_sort` | *number* |
`total_points` | *number* |
`value` | *number* |

Defined in: [types/index.ts:30](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L30)

___

### GWPicksDelegate

Ƭ **GWPicksDelegate**: { `active_chip`: [*ChipTypesDelegate*](types.md#chiptypesdelegate) ; `automatic_subs`: [*SubstitutionDelegate*](types.md#substitutiondelegate)[] ; `entry_history`: [*GWHistoryDelegate*](types.md#gwhistorydelegate) ; `picks`: [*PickDelegate*](types.md#pickdelegate)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`active_chip` | [*ChipTypesDelegate*](types.md#chiptypesdelegate) |
`automatic_subs` | [*SubstitutionDelegate*](types.md#substitutiondelegate)[] |
`entry_history` | [*GWHistoryDelegate*](types.md#gwhistorydelegate) |
`picks` | [*PickDelegate*](types.md#pickdelegate)[] |

Defined in: [types/index.ts:73](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L73)

___

### GamesPlayedDelegate

Ƭ **GamesPlayedDelegate**: { [key: number]: [*PlayerHistDelegate*](../interfaces/types.playerhistdelegate.md)[];  }

Defined in: [types/index.ts:326](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L326)

___

### GameweekDelegate

Ƭ **GameweekDelegate**: { `average_entry_score`: *number* ; `chip_plays`: [*ChipsPlayDelegate*](types.md#chipsplaydelegate)[] ; `data_checked`: *boolean* ; `deadline_time`: Date ; `deadline_time_epoch`: *number* ; `deadline_time_game_offset`: *number* ; `finished`: *boolean* ; `highest_score`: *number* \| *null* ; `highest_scoring_entry`: *number* \| *null* ; `id`: *number* ; `is_current`: *boolean* ; `is_next`: *boolean* ; `is_previous`: *boolean* ; `most_captained`: *number* \| *null* ; `most_selected`: *number* \| *null* ; `most_transferred_in`: *number* \| *null* ; `most_vice_captained`: *number* \| *null* ; `name`: *string* ; `top_element`: *number* \| *null* ; `top_element_info`: { `id`: *number* ; `points`: *number*  } \| *null* ; `transfers_made`: *number* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`average_entry_score` | *number* |
`chip_plays` | [*ChipsPlayDelegate*](types.md#chipsplaydelegate)[] |
`data_checked` | *boolean* |
`deadline_time` | Date |
`deadline_time_epoch` | *number* |
`deadline_time_game_offset` | *number* |
`finished` | *boolean* |
`highest_score` | *number* \| *null* |
`highest_scoring_entry` | *number* \| *null* |
`id` | *number* |
`is_current` | *boolean* |
`is_next` | *boolean* |
`is_previous` | *boolean* |
`most_captained` | *number* \| *null* |
`most_selected` | *number* \| *null* |
`most_transferred_in` | *number* \| *null* |
`most_vice_captained` | *number* \| *null* |
`name` | *string* |
`top_element` | *number* \| *null* |
`top_element_info` | { `id`: *number* ; `points`: *number*  } \| *null* |
`transfers_made` | *number* \| *null* |

Defined in: [types/index.ts:347](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L347)

___

### IdentifiersDelegate

Ƭ **IdentifiersDelegate**: keyof *typeof* IdentifierOpts \| *null*

Defined in: [types/index.ts:239](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L239)

___

### PickDelegate

Ƭ **PickDelegate**: { `element`: *number* ; `is_captain`: *boolean* ; `is_vice_captain`: *boolean* ; `multiplier`: *number* ; `position`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`element` | *number* |
`is_captain` | *boolean* |
`is_vice_captain` | *boolean* |
`multiplier` | *number* |
`position` | *number* |

Defined in: [types/index.ts:54](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L54)

___

### PickHistoryDelegate

Ƭ **PickHistoryDelegate**: { [key: number]: [*PickDelegate*](types.md#pickdelegate)[];  }

Defined in: [types/index.ts:80](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L80)

___

### PlayerDelegate

Ƭ **PlayerDelegate**: { `assists`: *number* ; `bonus`: *number* ; `bps`: *number* ; `chance_of_playing_next_round`: *number* \| *null* ; `chance_of_playing_this_round`: *number* \| *null* ; `clean_sheets`: *number* ; `code`: *number* ; `cost_change_event`: *number* ; `cost_change_event_fall`: *number* ; `cost_change_start`: *number* ; `cost_change_start_fall`: *number* ; `creativity`: *string* \| *null* ; `creativity_rank`: *number* ; `creativity_rank_type`: *number* ; `dreamteam_count`: *number* ; `element_type`: *number* ; `ep_next`: *string* \| *null* ; `ep_this`: *string* \| *null* ; `event_points`: *number* ; `first_name`: *string* ; `form`: *string* ; `goals_conceded`: *number* ; `goals_scored`: *number* ; `ict_index`: *string* \| *null* ; `ict_index_rank`: *number* ; `ict_index_rank_type`: *number* ; `id`: *number* ; `in_dreamteam`: *boolean* ; `influence`: *string* \| *null* ; `influence_rank`: *number* ; `influence_rank_type`: *number* \| *null* ; `minutes`: *number* ; `news`: *string* \| *null* ; `news_added`: *string* \| *null* ; `now_cost`: *number* ; `own_goals`: *number* ; `penalties_missed`: *number* ; `penalties_saved`: *number* ; `photo`: *string* ; `points_per_game`: *string* ; `red_cards`: *number* ; `saves`: *number* ; `second_name`: *string* \| *null* ; `selected_by_percent`: *string* ; `special`: *false* ; `squad_number`: *number* \| *null* ; `stats?`: [*PlayerStatsDelegate*](types.md#playerstatsdelegate) \| *null* ; `status`: *string* \| *null* ; `summary?`: [*PlayerSummaryDelegate*](types.md#playersummarydelegate) \| *null* ; `team`: *number* ; `team_code`: *number* ; `threat`: *string* \| *null* ; `threat_rank`: *number* ; `threat_rank_type`: *number* ; `total_points`: *number* ; `transfers_in`: *number* ; `transfers_in_event`: *number* ; `transfers_out`: *number* ; `transfers_out_event`: *number* ; `value_form`: *string* \| *null* ; `value_season`: *string* \| *null* ; `web_name`: *string* ; `yellow_cards`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assists` | *number* |
`bonus` | *number* |
`bps` | *number* |
`chance_of_playing_next_round` | *number* \| *null* |
`chance_of_playing_this_round` | *number* \| *null* |
`clean_sheets` | *number* |
`code` | *number* |
`cost_change_event` | *number* |
`cost_change_event_fall` | *number* |
`cost_change_start` | *number* |
`cost_change_start_fall` | *number* |
`creativity` | *string* \| *null* |
`creativity_rank` | *number* |
`creativity_rank_type` | *number* |
`dreamteam_count` | *number* |
`element_type` | *number* |
`ep_next` | *string* \| *null* |
`ep_this` | *string* \| *null* |
`event_points` | *number* |
`first_name` | *string* |
`form` | *string* |
`goals_conceded` | *number* |
`goals_scored` | *number* |
`ict_index` | *string* \| *null* |
`ict_index_rank` | *number* |
`ict_index_rank_type` | *number* |
`id` | *number* |
`in_dreamteam` | *boolean* |
`influence` | *string* \| *null* |
`influence_rank` | *number* |
`influence_rank_type` | *number* \| *null* |
`minutes` | *number* |
`news` | *string* \| *null* |
`news_added` | *string* \| *null* |
`now_cost` | *number* |
`own_goals` | *number* |
`penalties_missed` | *number* |
`penalties_saved` | *number* |
`photo` | *string* |
`points_per_game` | *string* |
`red_cards` | *number* |
`saves` | *number* |
`second_name` | *string* \| *null* |
`selected_by_percent` | *string* |
`special` | *false* |
`squad_number` | *number* \| *null* |
`stats?` | [*PlayerStatsDelegate*](types.md#playerstatsdelegate) \| *null* |
`status` | *string* \| *null* |
`summary?` | [*PlayerSummaryDelegate*](types.md#playersummarydelegate) \| *null* |
`team` | *number* |
`team_code` | *number* |
`threat` | *string* \| *null* |
`threat_rank` | *number* |
`threat_rank_type` | *number* |
`total_points` | *number* |
`transfers_in` | *number* |
`transfers_in_event` | *number* |
`transfers_out` | *number* |
`transfers_out_event` | *number* |
`value_form` | *string* \| *null* |
`value_season` | *string* \| *null* |
`web_name` | *string* |
`yellow_cards` | *number* |

Defined in: [types/index.ts:156](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L156)

___

### PlayerHistPastDelegate

Ƭ **PlayerHistPastDelegate**: { `assists`: *number* ; `bonus`: *number* ; `bps`: *number* ; `clean_sheets`: *number* ; `creativity`: *string* ; `element_code`: *number* ; `end_cost`: *number* ; `goals_conceded`: *number* ; `goals_scored`: *number* ; `ict_index`: *string* ; `influence`: *string* ; `minutes`: *number* ; `own_goals`: *number* ; `penalties_missed`: *number* ; `penalties_saved`: *number* ; `red_cards`: *number* ; `saves`: *number* ; `season_name`: *string* ; `start_cost`: *number* ; `threat`: *string* ; `total_points`: *number* ; `yellow_cards`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assists` | *number* |
`bonus` | *number* |
`bps` | *number* |
`clean_sheets` | *number* |
`creativity` | *string* |
`element_code` | *number* |
`end_cost` | *number* |
`goals_conceded` | *number* |
`goals_scored` | *number* |
`ict_index` | *string* |
`influence` | *string* |
`minutes` | *number* |
`own_goals` | *number* |
`penalties_missed` | *number* |
`penalties_saved` | *number* |
`red_cards` | *number* |
`saves` | *number* |
`season_name` | *string* |
`start_cost` | *number* |
`threat` | *string* |
`total_points` | *number* |
`yellow_cards` | *number* |

Defined in: [types/index.ts:278](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L278)

___

### PlayerStatsDelegate

Ƭ **PlayerStatsDelegate**: { `gamesPlayed`: *number* \| *null* ; `pp90`: *number* \| *null* ; `vapm`: *number* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`gamesPlayed` | *number* \| *null* |
`pp90` | *number* \| *null* |
`vapm` | *number* \| *null* |

Defined in: [types/index.ts:330](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L330)

___

### PlayerSummaryDelegate

Ƭ **PlayerSummaryDelegate**: { `fixtures`: [*PlayerFixtureDelegate*](../interfaces/types.playerfixturedelegate.md)[] ; `history`: [*PlayerHistDelegate*](../interfaces/types.playerhistdelegate.md)[] ; `history_past`: [*PlayerHistPastDelegate*](types.md#playerhistpastdelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`fixtures` | [*PlayerFixtureDelegate*](../interfaces/types.playerfixturedelegate.md)[] |
`history` | [*PlayerHistDelegate*](../interfaces/types.playerhistdelegate.md)[] |
`history_past` | [*PlayerHistPastDelegate*](types.md#playerhistpastdelegate) |

Defined in: [types/index.ts:316](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L316)

___

### PlayerTeamDelegate

Ƭ **PlayerTeamDelegate**: { [key: number]: [*PlayerDelegate*](types.md#playerdelegate)[];  }

Defined in: [types/index.ts:222](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L222)

___

### ResponseDataDelegate

Ƭ **ResponseDataDelegate**: { `data`: [*GWPicksDelegate*](types.md#gwpicksdelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`data` | [*GWPicksDelegate*](types.md#gwpicksdelegate) |

Defined in: [types/index.ts:99](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L99)

___

### SeasonHistoryDelegate

Ƭ **SeasonHistoryDelegate**: { `rank`: *number* ; `season_name`: *string* ; `total_points`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`rank` | *number* |
`season_name` | *string* |
`total_points` | *number* |

Defined in: [types/index.ts:148](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L148)

___

### SeasonsHistoryDelegate

Ƭ **SeasonsHistoryDelegate**: [*SeasonHistoryDelegate*](types.md#seasonhistorydelegate)[]

Defined in: [types/index.ts:154](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L154)

___

### StaticResponse

Ƭ **StaticResponse**: { `data`: [*StaticDelegate*](../interfaces/types.staticdelegate.md)  }

#### Type declaration:

Name | Type |
------ | ------ |
`data` | [*StaticDelegate*](../interfaces/types.staticdelegate.md) |

Defined in: [types/index.ts:531](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L531)

___

### SubstitutionDelegate

Ƭ **SubstitutionDelegate**: { `element_in`: *number* ; `element_out`: *number* ; `entry`: *number* ; `event`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`element_in` | *number* |
`element_out` | *number* |
`entry` | *number* |
`event` | *number* |

Defined in: [types/index.ts:62](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L62)

___

### SummaryRespDelegate

Ƭ **SummaryRespDelegate**: { `data`: [*PlayerSummaryDelegate*](types.md#playersummarydelegate)  }

#### Type declaration:

Name | Type |
------ | ------ |
`data` | [*PlayerSummaryDelegate*](types.md#playersummarydelegate) |

Defined in: [types/index.ts:322](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L322)

___

### TeamDelegate

Ƭ **TeamDelegate**: { `code`: *number* ; `draw`: *number* ; `form`: *string* \| *null* ; `id`: *number* ; `loss`: *number* ; `name`: *string* ; `played`: *number* ; `points`: *number* ; `position`: *number* ; `pulse_id`: *number* ; `short_name`: *string* ; `strength`: *number* ; `strength_attack_away`: *number* ; `strength_attack_home`: *number* ; `strength_defence_away`: *number* ; `strength_defence_home`: *number* ; `strength_overall_away`: *number* ; `strength_overall_home`: *number* ; `team_division`: *any* \| *null* ; `unavailable`: *boolean* ; `win`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`code` | *number* |
`draw` | *number* |
`form` | *string* \| *null* |
`id` | *number* |
`loss` | *number* |
`name` | *string* |
`played` | *number* |
`points` | *number* |
`position` | *number* |
`pulse_id` | *number* |
`short_name` | *string* |
`strength` | *number* |
`strength_attack_away` | *number* |
`strength_attack_home` | *number* |
`strength_defence_away` | *number* |
`strength_defence_home` | *number* |
`strength_overall_away` | *number* |
`strength_overall_home` | *number* |
`team_division` | *any* \| *null* |
`unavailable` | *boolean* |
`win` | *number* |

Defined in: [types/index.ts:374](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L374)

___

### TeamFixturesDelegate

Ƭ **TeamFixturesDelegate**: { [key: number]: [*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[];  }

Defined in: [types/index.ts:340](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L340)

___

### TransferDelegate

Ƭ **TransferDelegate**: { `element_in`: *number* ; `element_in_cost`: *number* ; `element_out`: *number* ; `element_out_cost`: *number* ; `entry`: *number* ; `event`: *number* ; `time`: Date  }

#### Type declaration:

Name | Type |
------ | ------ |
`element_in` | *number* |
`element_in_cost` | *number* |
`element_out` | *number* |
`element_out_cost` | *number* |
`entry` | *number* |
`event` | *number* |
`time` | Date |

Defined in: [types/index.ts:44](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/types/index.ts#L44)
