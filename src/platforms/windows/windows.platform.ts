// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import network from 'network'
import sudo from 'sudo-prompt'

import {Platform} from '../platform'
import {Interface} from './interfaces/interface'

export class WindowsPlatform extends Platform {
  async clearDns(): Promise<void> {
    try {
      const activeInterface: Interface = await this.getValidateInterface()

      return new Promise((resolve, reject) => {
        sudo.exec(
          `netsh interface ip set dns "${activeInterface.name}" dhcp`,
          {
            name: 'DnsChanger',
          },
          (error:any) => {
            if (error) {
              reject(error)
              return
            }

            resolve()
          },
        )
      })
    } catch (error) {
      throw error
    }
  }

  async getActiveDns(): Promise<Array<string>> {
    try {
      const activeInterface: Interface = await this.getValidateInterface()
      const cmd = `netsh interface ip show dns "${activeInterface.name}"`
      const text = (await this.execCmd(cmd)) as string

      return this.extractDns(text)
    } catch (error) {
      throw error
    }
  }

  getInterfacesList(): Promise<Interface[]> {
    return new Promise((resolve, reject) => {
      network.get_interfaces_list((err: any, obj: any) => {
        if (err) reject(err)
        else resolve(obj)
      })
    })
  }

  async setDns(nameServers: Array<string>): Promise<void> {
    try {
      const activeInterface: Interface = await this.getValidateInterface()
      const cmdServer1 = `netsh interface ip set dns "${activeInterface.name}" static ${nameServers[0]}`

      await this.execCmd(cmdServer1)

      if (nameServers[1]) {
        const cmdServer2 = `netsh interface ip add dns "${activeInterface.name}" ${nameServers[1]} index=2`
        await this.execCmd(cmdServer2)
      }
    } catch (error) {
      throw error
    }
  }

  private async getValidateInterface() {
    try {
      const interfaces: Interface[] = await this.getInterfacesList()
      const activeInterface: Interface | undefined = interfaces.find(
        (inter: Interface) => inter.gateway_ip !== null,
      )

      if (!activeInterface) throw new Error('CONNECTION_FAILED')
      return activeInterface
    } catch (error) {
      throw error
    }
  }

  private extractDns(input: string): Array<string> {
    const regex = /Statically Configured DNS Servers:\s+([\d.]+)\s+([\d.]+)/gm
    const matches = regex.exec(input) || []
    if (matches.length === 0) return []
    return [matches[1].trim(), matches[2].trim()]
  }

  public async flushDns(): Promise<void> {
    return new Promise((resolve, reject) => {
      sudo.exec(
        'ipconfig /flushdns',
        {
          name: 'DnsChanger',
        },
        error => {
          if (error) {
            reject(error)
            return
          }

          resolve()
        },
      )
    })
  }
}
