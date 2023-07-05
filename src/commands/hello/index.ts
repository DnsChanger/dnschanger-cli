import {Command} from '@oclif/core'
export default class Hello extends Command {
  static description = 'Say hello'

  // static examples = [
  //   `$ oex hello friend --from oclif
  // hello friend from oclif! (./src/commands/hello/index.ts)
  // `,
  // ]

  // static flags = {
  //   from: Flags.string({ char: 'f', description: 'Who is saying hello', required: true }),
  // }

  // static args = {
  //   person: Args.string({ description: 'Person to say hello to', required: true }),
  // }

  async run(): Promise<void> {}
}
