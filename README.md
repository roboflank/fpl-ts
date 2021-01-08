## fpl-ts

A JS/TS wrapper for FPL API

### Installing fpl-ts

```
npm i fpl-ts
```

### Documentation

### Example

```js
import { User, Player, Fixture, Gameweek, Team } from 'fpl-ts'

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
