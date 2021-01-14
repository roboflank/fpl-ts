---
id: "index.h2hleague"
title: "Class: H2HLeague"
sidebar_label: "H2HLeague"
hide_title: true
---

# Class: H2HLeague

[index](../modules/index.md).H2HLeague

Details
History
Fixtures
Upcoming

## Hierarchy

* *FPL*

  ↳ **H2HLeague**

## Constructors

### constructor

\+ **new H2HLeague**(`id`: *number* \| *number*[]): [*H2HLeague*](index.h2hleague.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* \| *number*[] |

**Returns:** [*H2HLeague*](index.h2hleague.md)

Defined in: [models/h2h-league.ts:20](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/h2h-league.ts#L20)

## Properties

### id

• **id**: *number* \| *number*[]

Defined in: [models/h2h-league.ts:20](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/h2h-league.ts#L20)

## Methods

### getDetails

▸ **getDetails**(): *Promise*<[*H2HLeagueDelegate*](../modules/types.md#h2hleaguedelegate) \| [*H2HLeaguesDelegate*](../modules/types.md#h2hleaguesdelegate)\>

Returns the current league’s details & standings of the given page.

**Returns:** *Promise*<[*H2HLeagueDelegate*](../modules/types.md#h2hleaguedelegate) \| [*H2HLeaguesDelegate*](../modules/types.md#h2hleaguesdelegate)\>

Defined in: [models/h2h-league.ts:28](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/h2h-league.ts#L28)

___

### getEntryDetails

▸ **getEntryDetails**(`entry?`: *number*, `page?`: *number*): *Promise*<[*H2HStandingDelegate*](../modules/types.md#h2hstandingdelegate) \| [*H2HLeaguesDelegate*](../modules/types.md#h2hleaguesdelegate)\>

Returns gameweek matches in league.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`entry` | *number* | 1 | - |
`page` | *number* | 1 |     |

**Returns:** *Promise*<[*H2HStandingDelegate*](../modules/types.md#h2hstandingdelegate) \| [*H2HLeaguesDelegate*](../modules/types.md#h2hleaguesdelegate)\>

Defined in: [models/h2h-league.ts:116](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/h2h-league.ts#L116)

___

### getFixtures

▸ **getFixtures**(`event?`: *number*, `page?`: *number*): *Promise*<[*H2HMatchDelegate*](../modules/types.md#h2hmatchdelegate) \| [*H2HMatchesDelegate*](../modules/types.md#h2hmatchesdelegate)\>

Returns gameweek matches in league.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`event` | *number* | 1 |  |
`page` | *number* | 1 |     |

**Returns:** *Promise*<[*H2HMatchDelegate*](../modules/types.md#h2hmatchdelegate) \| [*H2HMatchesDelegate*](../modules/types.md#h2hmatchesdelegate)\>

Defined in: [models/h2h-league.ts:68](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/h2h-league.ts#L68)
