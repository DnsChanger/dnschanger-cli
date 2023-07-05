import {Command} from '@oclif/core'

export class StatusCmd extends Command {
  static description = 'Check the connection status of DNS.'

  async run(): Promise<any> {}
}
