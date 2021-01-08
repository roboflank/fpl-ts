---
id: "index.user"
title: "Class: User"
sidebar_label: "User"
hide_title: true
---

# Class: User

[index](../modules/index.md).User

All user team related queries require userID
API https://fantasy.premierleague.com/api/entry/3586135/

**`example`** 
```js
const user = new User(1)
```

## Hierarchy

* **User**

## Implements

* [*UserProperties*](../interfaces/types.userproperties.md)

## Constructors

### constructor

\+ **new User**(`userId`: *number*): [*User*](index.user.md)

#### Parameters:

Name | Type |
------ | ------ |
`userId` | *number* |

**Returns:** [*User*](index.user.md)

Defined in: [models/user.ts:33](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L33)

## Properties

### userId

• **userId**: *number*

Implementation of: [UserProperties](../interfaces/types.userproperties.md).[userId](../interfaces/types.userproperties.md#userid)

Defined in: [models/user.ts:33](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L33)

## Methods

### getActiveChips

▸ **getActiveChips**(`gw?`: *number*[]): *Promise*<[*ActiveChipsDelegate*](../modules/types.md#activechipsdelegate)\>

Returns an array containing the user’s active chip for each gw, or the active chip of the given gameweeks.

**`example`** 
```js
const chips = new User(1).getActiveChips()
```

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*ActiveChipsDelegate*](../modules/types.md#activechipsdelegate)\>

Defined in: [models/user.ts:203](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L203)

___

### getAutomaticSubs

▸ **getAutomaticSubs**(`gw?`: *number*[]): *Promise*<[*AutomaticSubsDelegate*](../modules/types.md#automaticsubsdelegate)\>

Get Automatic Substitutions
Returns an array containing the user’s active chip for each gameweek, or the active chip of the given gameweeks.

**`example`** 
```js
const team = new User(1).getAutomaticSubs()
```

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*AutomaticSubsDelegate*](../modules/types.md#automaticsubsdelegate)\>

Defined in: [models/user.ts:266](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L266)

___

### getChipsHistory

▸ **getChipsHistory**(): *Promise*<[*ChipsHistoryDelegate*](../modules/types.md#chipshistorydelegate)[]\>

Return user's chip history

**`example`** 
```js
const team = new User(1).getChipsHistory()
```

**Returns:** *Promise*<[*ChipsHistoryDelegate*](../modules/types.md#chipshistorydelegate)[]\>

Defined in: [models/user.ts:186](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L186)

___

### getCupMatches

▸ **getCupMatches**(`gw?`: *number*[]): *Promise*<[*CupMatchesDelegate*](../modules/types.md#cupmatchesdelegate)\>

Returns an object of all the user’s cup matches, or of the cup match in the given gameweeks (gameweek 17 and onwards).

**`example`** 
```js
const team = new User(1).getCupMatches()
```

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*CupMatchesDelegate*](../modules/types.md#cupmatchesdelegate)\>

Defined in: [models/user.ts:344](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L344)

___

### getCupStatus

▸ **getCupStatus**(): *Promise*<[*CupStatusDelegate*](../modules/types.md#cupstatusdelegate)\>

Returns the user’s cup status.

**`example`** 
```js
const cupStatus = new User(1).getCupStatus()
```

**Returns:** *Promise*<[*CupStatusDelegate*](../modules/types.md#cupstatusdelegate)\>

Defined in: [models/user.ts:322](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L322)

___

### getDetails

▸ **getDetails**(): *Promise*<[*UserDelegate*](../interfaces/types.userdelegate.md)[]\>

Return user's team details

**`example`** 
```js
const team = new User(1).getDetails()
```

**Returns:** *Promise*<[*UserDelegate*](../interfaces/types.userdelegate.md)[]\>

Defined in: [models/user.ts:45](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L45)

___

### getPicks

▸ **getPicks**(`gw?`: *number*[]): *Promise*<[*PickHistoryDelegate*](../modules/types.md#pickhistorydelegate)\>

Return user's team player picks history

**`example`** 
```js
const transfers = await new User(1).getPicks([1])
```

**`remark`** Will return picks for the requested GWs. If empty, will return for all GWs

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*PickHistoryDelegate*](../modules/types.md#pickhistorydelegate)\>

Defined in: [models/user.ts:134](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L134)

___

### getSeasonsHistory

▸ **getSeasonsHistory**(): *Promise*<[*SeasonsHistoryDelegate*](../modules/types.md#seasonshistorydelegate)[]\>

Return user's previous history

**`example`** 
```js
const team = new User(1).getChipsHistory()
```

**Returns:** *Promise*<[*SeasonsHistoryDelegate*](../modules/types.md#seasonshistorydelegate)[]\>

Defined in: [models/user.ts:384](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L384)

___

### getTransfers

▸ **getTransfers**(`gw?`: *number*[]): *Promise*<[*TransferDelegate*](../modules/types.md#transferdelegate)[]\>

Return user's team transfer history

**`example`** 
```js
const transfers = await new User(1).getTransfers([1])
```

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*TransferDelegate*](../modules/types.md#transferdelegate)[]\>

Defined in: [models/user.ts:97](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L97)

___

### gwHistory

▸ **gwHistory**(`gw?`: *number*[]): *Promise*<[*GWHistoryDelegate*](../modules/types.md#gwhistorydelegate)[]\>

Returns array of requested Gameweek history, if not, returns all gw

**`example`** 
```js
const history = await new User(1).getTransfers([1, 2, 4])
```

#### Parameters:

Name | Type |
------ | ------ |
`gw?` | *number*[] |

**Returns:** *Promise*<[*GWHistoryDelegate*](../modules/types.md#gwhistorydelegate)[]\>

Defined in: [models/user.ts:62](https://github.com/wamburu/fpl-ts/blob/7bc5b83/src/models/user.ts#L62)
