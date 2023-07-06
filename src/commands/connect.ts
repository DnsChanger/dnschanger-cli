import {Command, Flags} from '@oclif/core'
import {getServersList} from '../shared/utils/server-list'
import {Server} from '../shared/interfaces/server.interface'
import {ux} from '@oclif/core/lib/cli-ux'
import {dnsService} from '../config'
import chalk from 'chalk'
import {isValidDnsAddress} from '../shared/validators/dns.validator'
const {AutoComplete} = require('enquirer')
import _ from 'lodash'

export class ConnectCmd extends Command {
  static description = 'Connect to DNS Server'

  static flags = {
    server: Flags.string({char: 's', description: 'Connect to a server by addresses.', required: false}),
    name: Flags.string({char: 'n', description: 'Connect to a server by name.', required: false}),
    random: Flags.boolean({char: 'r', description: 'Connect to a server randomly.', required: false}),
  }

  static examples = [
    '$ d11i connect',
    '$ d11i connect -s 178.22.122.100,185.51.200.2',
    '$ d11i connect -n shecan',
    '$ d11i connect -r',
  ]

  async run(): Promise<any> {
    try {
      const {flags} = await this.parse(ConnectCmd)
      const serversStore = await getServersList()
      let server: Server | undefined
      if (!flags.server && !flags.name && !flags.random) {
        const prompt = new AutoComplete({
          name: 'server',
          limit: serversStore.length,
          message: 'Pick your favorite server',
          choices: serversStore.map((server: Server) => server.name),
        })

        const answer = await prompt.run()
        server = serversStore.find(s => s.name === answer)
      } else if (flags.server) {
        const nameServers = flags.server.split(',')
        if (isValidDnsAddress(nameServers[0])) {
          if (nameServers[1] && !isValidDnsAddress(nameServers[1])) {
            this.log('❌', chalk.redBright`Error: Invalid DNS address detected.`)
            return
          }

          const existsServer: Server | undefined = serversStore.find((ser: Server) => ser.servers.toString() === nameServers.toString())
          if (!existsServer) {
            server = {
              servers: nameServers,
              name: `custom-${nameServers[0]}`,
              key: `custom-${nameServers[0]}`,
              rate: 0,
              tags: ['custom'],
            }
          }
        }
      } else if (flags.name) {
        server = serversStore.find(s => s.name.toLowerCase() === flags.name?.toLowerCase())
      } else if (flags.random) {
        server = _.sample(serversStore)
      }

      if (!server) {
        this.log('❌', chalk.redBright`Error: Server not found`)
        return
      }

      ux.action.start(`Connecting to ${server.name}`)
      await dnsService.setDns(server?.servers)
      ux.action.stop()
      this.log('✅', chalk.greenBright`Connected To ${server.name}`)
    } catch (error:any) {
      this.error(chalk.redBright`Error connecting to DNS server: ${error.message}`)
    }
  }
}
