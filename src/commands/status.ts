import {Command, ux} from '@oclif/core'
import {dnsService} from '../config'
import {getServersList} from '../shared/utils/server-list'
import {Server} from '../shared/interfaces/server.interface'
import chalk from 'chalk'

export class StatusCmd extends Command {
  static description = 'Check the connection status of DNS.'

  async run(): Promise<any> {
    ux.action.start('⌛ checking', 'initializing')
    const servers:Server[] = await getServersList()

    const activeDns = await dnsService.getActiveDns()
    if (activeDns.length === 0) {
      ux.action.stop()
      return  this.log('disconnect')
    }

    const server: Server | undefined = servers.find(
      (se:Server) => se.servers.toString() === activeDns.toString(),
    )
    ux.action.stop()

    if  (!server) {
      this.log(chalk.green`connected` + 'to unknown server')
    } else {
      this.log(chalk.green`connected` + ` to ${server.name} server`)
    }
  }
}
