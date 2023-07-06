DNS Changer CLI
=================

The command line interface for [DNS Changer](https://dnschanger.github.io/)

[![Version](https://img.shields.io/npm/v/dnschanger-cli.svg)](https://npmjs.org/package/dnschanger-cli)
[![Downloads/week](https://img.shields.io/npm/dw/dnschanger-cli.svg)](https://npmjs.org/package/dnschanger-cli)
[![GitHub license](https://img.shields.io/github/license/DnsChanger/dnschanger-cli)](https://github.com/DnsChanger/dnschanger-cli/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dnschanger-cli
$ d11i COMMAND
running command...
$ d11i (--version)
dnschanger-cli/0.0.0 win32-x64 node-v18.15.0
$ d11i --help [COMMAND]
USAGE
  $ d11i COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`d11i connect`](#d11i-connect)
* [`d11i d8t`](#d11i-d8t)
* [`d11i dis`](#d11i-dis)
* [`d11i disconnect`](#d11i-disconnect)
* [`d11i help [COMMANDS]`](#d11i-help-commands)
* [`d11i plugins`](#d11i-plugins)
* [`d11i plugins:install PLUGIN...`](#d11i-pluginsinstall-plugin)
* [`d11i plugins:inspect PLUGIN...`](#d11i-pluginsinspect-plugin)
* [`d11i plugins:install PLUGIN...`](#d11i-pluginsinstall-plugin-1)
* [`d11i plugins:link PLUGIN`](#d11i-pluginslink-plugin)
* [`d11i plugins:uninstall PLUGIN...`](#d11i-pluginsuninstall-plugin)
* [`d11i plugins:uninstall PLUGIN...`](#d11i-pluginsuninstall-plugin-1)
* [`d11i plugins:uninstall PLUGIN...`](#d11i-pluginsuninstall-plugin-2)
* [`d11i plugins update`](#d11i-plugins-update)
* [`d11i status`](#d11i-status)

## `d11i connect`

Connect to DNS Server

```
USAGE
  $ d11i connect [-s <value>] [-n <value>] [-r]

FLAGS
  -n, --name=<value>    Connect to a server by name.
  -r, --random          Connect to a server randomly.
  -s, --server=<value>  Connect to a server by addresses.

DESCRIPTION
  Connect to DNS Server

EXAMPLES
  $ d11i connect

  $ d11i connect -s 178.22.122.100,185.51.200.2

  $ d11i connect -n shecan

  $ d11i connect -r
```

_See code: [dist/commands/connect.ts](https://github.com/DnsChanger/dnschanger-cli/blob/v0.0.0/dist/commands/connect.ts)_

## `d11i d8t`

Disconnect from DNS Server

```
USAGE
  $ d11i d8t

DESCRIPTION
  Disconnect from DNS Server

ALIASES
  $ d11i dis
  $ d11i d8t

EXAMPLES
  $ d11i disconnect
```

## `d11i dis`

Disconnect from DNS Server

```
USAGE
  $ d11i dis

DESCRIPTION
  Disconnect from DNS Server

ALIASES
  $ d11i dis
  $ d11i d8t

EXAMPLES
  $ d11i disconnect
```

## `d11i disconnect`

Disconnect from DNS Server

```
USAGE
  $ d11i disconnect

DESCRIPTION
  Disconnect from DNS Server

ALIASES
  $ d11i dis
  $ d11i d8t

EXAMPLES
  $ d11i disconnect
```

_See code: [dist/commands/disconnect.ts](https://github.com/DnsChanger/dnschanger-cli/blob/v0.0.0/dist/commands/disconnect.ts)_

## `d11i help [COMMANDS]`

Display help for d11i.

```
USAGE
  $ d11i help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for d11i.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `d11i plugins`

List installed plugins.

```
USAGE
  $ d11i plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ d11i plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `d11i plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ d11i plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ d11i plugins add

EXAMPLES
  $ d11i plugins:install myplugin 

  $ d11i plugins:install https://github.com/someuser/someplugin

  $ d11i plugins:install someuser/someplugin
```

## `d11i plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ d11i plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ d11i plugins:inspect myplugin
```

## `d11i plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ d11i plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ d11i plugins add

EXAMPLES
  $ d11i plugins:install myplugin 

  $ d11i plugins:install https://github.com/someuser/someplugin

  $ d11i plugins:install someuser/someplugin
```

## `d11i plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ d11i plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ d11i plugins:link myplugin
```

## `d11i plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ d11i plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ d11i plugins unlink
  $ d11i plugins remove
```

## `d11i plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ d11i plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ d11i plugins unlink
  $ d11i plugins remove
```

## `d11i plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ d11i plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ d11i plugins unlink
  $ d11i plugins remove
```

## `d11i plugins update`

Update installed plugins.

```
USAGE
  $ d11i plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `d11i status`

Check the connection status of DNS.

```
USAGE
  $ d11i status

DESCRIPTION
  Check the connection status of DNS.
```

_See code: [dist/commands/status.ts](https://github.com/DnsChanger/dnschanger-cli/blob/v0.0.0/dist/commands/status.ts)_
<!-- commandsstop -->
* [`oex hello PERSON`](#oex-hello-person)
* [`oex hello world`](#oex-hello-world)
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
