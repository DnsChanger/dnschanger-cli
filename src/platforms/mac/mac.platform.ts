import {exec} from 'node:child_process'
import {promisify} from 'node:util'
import {Platform} from '../platform'

const execPromise = promisify(exec)

export class MacPlatform extends Platform {
  async clearDns(): Promise<void> {
    try {
      await this.setDns(['8.8.8.8', '8.8.4.4'])
    } catch (error) {
      throw error
    }
  }

  async getActiveDns(): Promise<string[]> {
    try {
      const {stdout} = await execPromise(
        "scutil --dns | awk '/nameserver/ { print $3 }'",
      )

      return stdout.trim().split('\n')
    } catch (error) {
      throw error
    }
  }

  async getInterfacesList(): Promise<any> {
    // Implement the logic to retrieve the list of interfaces for macOS here
    // Example: You can use the "networksetup" command to get the list of interfaces
    // For simplicity, I'm returning an empty array for now
    return []
  }

  async setDns(nameServers: string[]): Promise<void> {
    try {
      const dnsServers = nameServers.join(' ')

      await execPromise(`networksetup -setdnsservers Wi-Fi ${dnsServers}`)
    } catch (error) {
      throw error
    }
  }

  public async flushDns(): Promise<void> {
    try {
      await execPromise('sudo killall -HUP mDNSResponder')
    } catch (error) {
      throw error
    }
  }
}
