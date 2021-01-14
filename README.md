<p align="center">
  <a href="https://roboflank.github.io/fpl-ts/api">
    <img src="https://raw.githubusercontent.com/roboflank/fpl-ts/build/website/static/img/fpl-ts.png">
  </a>
</p>

<p align="center">
  A JS/TS wrapper for FPL API
    <br>
</p>

### Installing fpl-ts

```
npm i fpl-ts
```

## Docs

### 1. Classes & Methods

- [Fixture](https://roboflank.github.io/fpl-ts/api/classes/index.fixture)
- [Gameweek](https://roboflank.github.io/fpl-ts/api/classes/index.gameweek)
- [Player](https://roboflank.github.io/fpl-ts/api/classes/index.player)
- [Team](https://roboflank.github.io/fpl-ts/api/classes/index.team)
- [User](https://roboflank.github.io/fpl-ts/api/classes/index.user)
- [Classic League](https://roboflank.github.io/fpl-ts/api/classes/index.classic-league)
- [H2H League](https://roboflank.github.io/fpl-ts/api/classes/index.h2h-league)

### 2. Types

- [index](https://roboflank.github.io/fpl-ts/api/modules/types)

### 3. Guides & Examples

- [Guide & Examples](https://roboflank.github.io/fpl-ts/guide)

### Example

```js
import { User, Player, Fixture, Team } from 'fpl-ts'

//  Get Fixture
const getFixtureDetails = async () => {
  const fixture = new Fixture(167)
  try {
    const details = await fixture.getDetails()
    console.log(details)
  } catch (err) {
    console.error(err)
  }
}

//  Get a player
const getPlayerDetails = async () => {
  const player = new Player([302])
  try {
    const bruno = await player.getDetails()
    console.log(bruno)
  } catch (err) {
    console.error(err)
  }
}

// Get user's details
const getUser = async () => {
  const user = new User(91928)
  try {
    const details = await user.getDetails()
    console.log(details)
  } catch (err) {
    console.error(err)
  }
}
```

Inspired by [FPL](https://fpl.readthedocs.io/)
