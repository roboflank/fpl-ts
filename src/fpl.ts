import axios, { AxiosResponse } from 'axios'
import { randomUserAgent } from 'user-agent-array-ts'

import { API_BASE_URL } from './constants'
axios.defaults.baseURL = API_BASE_URL
export default class FPL {
  headers = {
    'user-agent': randomUserAgent,
    'content-type': 'application/json',
  }
  public fetchAPI = (url: string): Promise<AxiosResponse> => {
    const result = axios.get(url, {
      headers: this.headers,
    })
    return result
  }
  public fetchMultipleAPI = (urls: string[]): Promise<any> => {
    const urlArr: any[] = []
    urls.forEach((url) => {
      urlArr.push(
        axios.get(url, {
          headers: this.headers,
        }),
      )
    })
    const result = axios.all(urlArr)
    return result
  }
  //TODO: Add Gameweek calendars with currentGW, nextGW ,previousGW
}
