module.exports = [
  "api/index",
  "api/modules",
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/index.classicleague",
      "api/classes/index.fixture",
      "api/classes/index.gameweek",
      "api/classes/index.h2hleague",
      "api/classes/index.player",
      "api/classes/index.team",
      "api/classes/index.user"
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