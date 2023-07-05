import {Server} from '../interfaces/server.interface'
import {UrlsConstant} from '../constants/urls.constant'
import axios from 'axios'

export async function fetchServersList() {
  try {
    const response = await axios.get<Server[]>(
      UrlsConstant.STORE,
    )
    return response.data.sort((a:Server, b:Server) => b.rate - a.rate)
  } catch {
    throw new Error('tray again')
  }
}
