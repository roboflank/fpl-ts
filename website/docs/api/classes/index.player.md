---
id: "index.player"
title: "Class: Player"
sidebar_label: "Player"
hide_title: true
---

# Class: Player

[index](../modules/index.md).Player

API: https://fantasy.premierleague.com/api/bootstrap-static/

**`example`** 
```js
const player = new Player(1)
```

## Hierarchy

* **Player**

## Constructors

### constructor

\+ **new Player**(`playersId`: *number*[]): [*Player*](index.player.md)

#### Parameters:

Name | Type |
------ | ------ |
`playersId` | *number*[] |

**Returns:** [*Player*](index.player.md)

Defined in: [models/player.ts:17](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/player.ts#L17)

## Properties

### playersId

• **playersId**: *number*[]

Defined in: [models/player.ts:17](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/player.ts#L17)

## Methods

### getDetails

▸ **getDetails**(`includeStats?`: *boolean*, `includeSummary?`: *boolean*): *Promise*<[*PlayerDelegate*](../modules/types.md#playerdelegate)[]\>

Returns array of requested players. If none, it returns all players

**`remark`** stats from https://www.reddit.com/r/FantasyPL/comments/6r60fu/exploring_a_key_metric_value_added_per_1m/

**`remark`** set includeSummary to true to return player profile with summary

**`remark`** Return player details with stats

**`example`** 
```js
const player = await new Player([302]).getDetails(true, false)
```

**`remark`** Return player details with summary

**`example`** 
```js
const player = await new Player([302]).getDetails(false, true)
```

#### Parameters:

Name | Type |
------ | ------ |
`includeStats?` | *boolean* |
`includeSummary?` | *boolean* |

**Returns:** *Promise*<[*PlayerDelegate*](../modules/types.md#playerdelegate)[]\>

PlayerDelegate[]

Defined in: [models/player.ts:74](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/player.ts#L74)

___

### getSummary

▸ **getSummary**(): *Promise*<[*PlayerSummaryDelegate*](../modules/types.md#playersummarydelegate)[]\>

Returns array of requested players summary. If none, it returns all players summary

**`example`** 
```js
const player = await new Player([302]).getSummary()
```

**Returns:** *Promise*<[*PlayerSummaryDelegate*](../modules/types.md#playersummarydelegate)[]\>

PlayerSummaryDelegate[]

Defined in: [models/player.ts:33](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/player.ts#L33)
