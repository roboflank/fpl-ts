---
id: "index.team"
title: "Class: Team"
sidebar_label: "Team"
hide_title: true
---

# Class: Team

[index](../modules/index.md).Team

API: https://fantasy.premierleague.com/api/bootstrap-static/

**`example`** 
```js
const team = new Team(1)
```

## Hierarchy

* **Team**

## Constructors

### constructor

\+ **new Team**(`id`: *number* \| *number*[]): [*Team*](index.team.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* \| *number*[] |

**Returns:** [*Team*](index.team.md)

Defined in: [models/team.ts:22](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/team.ts#L22)

## Properties

### id

• **id**: *number* \| *number*[]

Defined in: [models/team.ts:22](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/team.ts#L22)

## Methods

### getDetails

▸ **getDetails**(): *Promise*<[*TeamDelegate*](../modules/types.md#teamdelegate) \| [*TeamDelegate*](../modules/types.md#teamdelegate)[]\>

Returns array or object of the requested team id(s)

**`example`** 
```js
const team = await new Team(1).getDetails()
```

**`remark`** when array is requested

**`example`** 
```js
const teams = await new Team([1]).getDetails()
```

**Returns:** *Promise*<[*TeamDelegate*](../modules/types.md#teamdelegate) \| [*TeamDelegate*](../modules/types.md#teamdelegate)[]\>

TeamDelegate

Defined in: [models/team.ts:42](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/team.ts#L42)

___

### getFixtures

▸ **getFixtures**(): *Promise*<[*TeamFixturesDelegate*](../modules/types.md#teamfixturesdelegate) \| [*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[]\>

Returns array or object containing the team’s fixtures.

**`example`** 
```js
const players = await new Team(1).getFixtures()
```

**`remark`** when array is requested

**`example`** 
```js
const players = await new Team([1]).getFixtures()
```

**Returns:** *Promise*<[*TeamFixturesDelegate*](../modules/types.md#teamfixturesdelegate) \| [*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[]\>

PlayerDelegate[]

Defined in: [models/team.ts:129](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/team.ts#L129)

___

### getPlayers

▸ **getPlayers**(): *Promise*<[*PlayerTeamDelegate*](../modules/types.md#playerteamdelegate) \| [*PlayerDelegate*](../modules/types.md#playerdelegate)[]\>

Returns array or object containing the players who play for the team. Does not include the player’s summary.

**`example`** 
```js
const players = await new Team(1).getPlayers()
```

**`remark`** when array is requested

**`example`** 
```js
const players = await new Team([1]).getPlayers()
```

**Returns:** *Promise*<[*PlayerTeamDelegate*](../modules/types.md#playerteamdelegate) \| [*PlayerDelegate*](../modules/types.md#playerdelegate)[]\>

PlayerDelegate[]

Defined in: [models/team.ts:84](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/team.ts#L84)
