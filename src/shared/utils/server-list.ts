import {serversDBFileService} from '../../config'
import {Server} from '../interfaces/server.interface'
import {fetchServersList} from '../requests/github'

export async function getServersList(): Promise<Server[]>  {
  try {
    const serversStore = await serversDBFileService.readJsonData<Server[]>() || []
    if (serversStore.length === 0) {
      const serversDB = await fetchServersList()
      await serversDBFileService.updateJson(serversDB)
      serversStore.push(...serversDB)
    }

    return  serversStore
  } catch (error) {
    throw  error
  }
}
