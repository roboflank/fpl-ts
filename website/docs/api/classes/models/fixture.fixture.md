---
id: "fixture.fixture"
title: "Class: Fixture"
sidebar_label: "Fixture"
hide_title: true
---

# Class: Fixture

[models/fixture](../../modules/models_fixture.md).Fixture

API: https://fantasy.premierleague.com/api/fixtures/

**`remark`** Gameweek API: https://fantasy.premierleague.com/api/fixtures/?event=1

**`example`** 
```js
const fixture = new Fixture(1)
```

## Hierarchy

* **Fixture**

## Constructors

### constructor

\+ **new Fixture**(`id`: *number*): [*Fixture*](fixture.fixture.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* |

**Returns:** [*Fixture*](fixture.fixture.md)

Defined in: [models/fixture.ts:18](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L18)

## Properties

### id

• **id**: *number*

Defined in: [models/fixture.ts:18](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L18)

## Methods

### getAssisters

▸ **getAssisters**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:38](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L38)

___

### getBPS

▸ **getBPS**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:78](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L78)

___

### getBonus

▸ **getBonus**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:58](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L58)

___

### getDetails

▸ **getDetails**(): *Promise*<*null* \| [*FixtureDelegate*](../../interfaces/types.fixturedelegate.md)\>

**Returns:** *Promise*<*null* \| [*FixtureDelegate*](../../interfaces/types.fixturedelegate.md)\>

Defined in: [models/fixture.ts:23](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L23)

___

### getGoalscorers

▸ **getGoalscorers**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:98](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L98)

___

### getOwnGoalscorers

▸ **getOwnGoalscorers**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:117](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L117)

___

### getPenaltyMisses

▸ **getPenaltyMisses**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:136](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L136)

___

### getPenaltySaves

▸ **getPenaltySaves**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:156](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L156)

___

### getRedCards

▸ **getRedCards**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:175](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L175)

___

### getSaves

▸ **getSaves**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:213](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L213)

___

### getYellowCards

▸ **getYellowCards**(): *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

**Returns:** *Promise*<[*FixStatsItemDelegate*](../../modules/types.md#fixstatsitemdelegate)\>

Defined in: [models/fixture.ts:194](https://github.com/wamburu/fpl-ts/blob/c1a6de1/src/models/fixture.ts#L194)
