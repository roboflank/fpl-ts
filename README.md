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

### Documentation

- [Guide](https://roboflank.github.io/fpl-ts/guide)
- [Classes, Methods & Interfaces](https://roboflank.github.io/fpl-ts/api/classes/index.fixture)

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
