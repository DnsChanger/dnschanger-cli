import {Command} from '@oclif/core'
import {dnsService} from '../config'
import {ux} from '@oclif/core/lib/cli-ux'
import chalk from 'chalk'

export class DisconnectCmd extends Command {
  static description = 'Disconnect from DNS Server';

  static examples = ['$ d11i disconnect'];
  static aliases = ['dis', 'd8t'];
  async run(): Promise<any> {
    try {
      ux.action.start('Disconnecting from DNS server')
      await dnsService.clearDns()
      ux.action.stop()
      this.log('✅', chalk.greenBright`Disconnected from DNS server`)
    } catch (error:any) {
      this.error(chalk.redBright`Error: disconnecting from DNS server: ${error.message}`)
    }
  }
}
