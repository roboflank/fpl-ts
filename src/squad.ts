import { API_BASE_URL, API_URLS } from './urls'
import axios, { AxiosResponse } from 'axios'
import { SquadDelegate } from './types/Squad'
import FPL from './fpl'
export class Squad extends FPL {
  public async getDetails(squadId: number): Promise<SquadDelegate[]> {
    const endpoint: string = API_URLS.USER.replace('{}', squadId.toString())
    const result: AxiosResponse<any> = await axios.get(endpoint, {
      headers: this.headers,
    })
    return result.data
  }
}
