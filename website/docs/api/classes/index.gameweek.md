---
id: "index.gameweek"
title: "Class: Gameweek"
sidebar_label: "Gameweek"
hide_title: true
---

# Class: Gameweek

[index](../modules/index.md).Gameweek

API: https://fantasy.premierleague.com/api/bootstrap-static/

**`example`** 
```js
const gw = new Gameweek(1)
```

## Hierarchy

* **Gameweek**

## Constructors

### constructor

\+ **new Gameweek**(`id`: *number* \| *number*[]): [*Gameweek*](index.gameweek.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* \| *number*[] |

**Returns:** [*Gameweek*](index.gameweek.md)

Defined in: [models/gameweek.ts:18](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/gameweek.ts#L18)

## Properties

### id

• **id**: *number* \| *number*[]

Defined in: [models/gameweek.ts:18](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/gameweek.ts#L18)

## Methods

### getDetails

▸ **getDetails**(): *Promise*<[*GameweekDelegate*](../modules/types.md#gameweekdelegate) \| [*GameweekDelegate*](../modules/types.md#gameweekdelegate)[]\>

Returns object of requested gameweek or array of gameweeks.

**`example`** 
```js
const gameweek = await new Gameweek(1).getDetails()
```

**`example`** 
```js
const gameweeks = await new Gameweek([1, 2]).getDetails()
```

**Returns:** *Promise*<[*GameweekDelegate*](../modules/types.md#gameweekdelegate) \| [*GameweekDelegate*](../modules/types.md#gameweekdelegate)[]\>

Defined in: [models/gameweek.ts:35](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/gameweek.ts#L35)

___

### getFixtures

▸ **getFixtures**(): *Promise*<[*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[]\>

Returns array of fixtures.

**`example`** 
```js
const fixtures = await new Gameweek(1).getFixtures()
```

**Returns:** *Promise*<[*FixtureDelegate*](../interfaces/types.fixturedelegate.md)[]\>

Defined in: [models/gameweek.ts:71](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/gameweek.ts#L71)
