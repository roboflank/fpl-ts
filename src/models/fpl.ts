import axios, { AxiosResponse } from 'axios'
import { randomUserAgent } from 'user-agent-array-ts'

import { API_BASE_URL } from '../constants'
axios.defaults.baseURL = API_BASE_URL
export default class FPL {
  //TODO: Add Gameweek calendars with currentGW, nextGW ,previousGW
  //TODO: Add FDR
}
const headers = {
  'user-agent': randomUserAgent,
  'content-type': 'application/json',
}
export const fetchAPI = (url: string): Promise<AxiosResponse> => {
  const result = axios.get(url, {
    headers: headers,
  })
  return result
}

export const fetchMultipleAPI = (urls: string[]): Promise<AxiosResponse[]> => {
  const urlArr: any[] = []
  urls.forEach((url) => {
    urlArr.push(
      axios.get(url, {
        headers: headers,
      }),
    )
  })
  const result = axios.all(urlArr)
  return result
}
