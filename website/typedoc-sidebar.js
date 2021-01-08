module.exports = [
  "api/index",
  "api/modules",
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/models/classic-league.classicleague",
      "api/classes/models/fixture.fixture",
      "api/classes/models/fpl.default",
      "api/classes/models/gameweek.gameweek",
      "api/classes/models/h2h-league.h2hleague",
      "api/classes/models/player.player",
      "api/classes/models/team.team",
      "api/classes/models/user.user"
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      "api/interfaces/types.fixturedelegate",
      "api/interfaces/types.playerfixturedelegate",
      "api/interfaces/types.playerhistdelegate",
      "api/interfaces/types.staticdelegate",
      "api/interfaces/types.userdelegate",
      "api/interfaces/types.userproperties"
    ]
  }
];