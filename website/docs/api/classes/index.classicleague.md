---
id: "index.classicleague"
title: "Class: ClassicLeague"
sidebar_label: "ClassicLeague"
hide_title: true
---

# Class: ClassicLeague

[index](../modules/index.md).ClassicLeague

## Hierarchy

* *FPL*

  ↳ **ClassicLeague**

## Constructors

### constructor

\+ **new ClassicLeague**(`id`: *number* \| *number*[]): [*ClassicLeague*](index.classicleague.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *number* \| *number*[] |

**Returns:** [*ClassicLeague*](index.classicleague.md)

Defined in: [models/classic-league.ts:10](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/classic-league.ts#L10)

## Properties

### id

• **id**: *number* \| *number*[]

Defined in: [models/classic-league.ts:10](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/classic-league.ts#L10)

## Methods

### getDetails

▸ **getDetails**(`page?`: *number*, `pageNewEntries?`: *number*, `phase?`: *number*): *Promise*<[*ClassicLeagueDelegate*](../modules/types.md#classicleaguedelegate) \| [*ClassicLeaugesDelegate*](../modules/types.md#classicleaugesdelegate)\>

Returns the league’s details & standings of the given page.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`page` | *number* | 1 |  |
`pageNewEntries` | *number* | 1 |  |
`phase` | *number* | 1 | months: Overall - 1, September - 2, October - 3    |

**Returns:** *Promise*<[*ClassicLeagueDelegate*](../modules/types.md#classicleaguedelegate) \| [*ClassicLeaugesDelegate*](../modules/types.md#classicleaugesdelegate)\>

Defined in: [models/classic-league.ts:22](https://github.com/wamburu/fpl-ts/blob/3b599ec/src/models/classic-league.ts#L22)
