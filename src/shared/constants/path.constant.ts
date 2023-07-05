import os from 'node:os'
import path from 'node:path'

export const GLOBAL_CONF = path.join(os.homedir(), '.d10i.json')
export const SERVERS_CONF = path.join(os.homedir(), '.d10i-servers.json')

