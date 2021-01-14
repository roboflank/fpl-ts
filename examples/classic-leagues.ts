import { ClassicLeague } from '../src'
const league = new ClassicLeague(592)

const getLeagues = async () => {
  try {
    const details = await league.getDetails()
    console.log(details)
  } catch (err) {
    console.error('error ->', err)
  }
}
const getLeaguesStandings = async () => {
  try {
    const standings = await league.getStandings(1)
    console.log(standings)
  } catch (err) {
    console.error('error ->', err.message)
  }
}
getLeagues()
getLeaguesStandings()
