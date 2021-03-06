# Installation

## What is gvite node?

There are 2 gvite node categories: `full node` and `SBP`. 
At present, full nodes maintain the complete ledger locally on the basis of gvite consensus algorithm, with guaranteed data integrity across the network.
Full nodes have full gvite functionality, such as accessing all data on the network, sending and receiving transactions, as well as participating in super node election or voting.
Full nodes provide `HTTP`, `WEBSOCKET`, `IPC` APIs and `command line` tool. SBPs are special full nodes who are eligible for snapshot block producing. 

## Before the start

Gvite supports installation from `binary package` or `source code`

| OS | ubuntu  |  mac |   windows |
| ------------- | ------------------------------ |------|-------|
| gvite 1.0.3   | yes  |yes |yes |

:::tip
Go 1.11.1 or above version is required to compile the source code. See [Go download and installation](https://golang.org/dl/)
:::

## Install from binary
Download gvite in command line and install (supporting ubuntu, mac, centos, windows)

### Installation example on ubuntu
```bash
## Download
curl -L -O  https://github.com/vitelabs/go-vite/releases/download/v1.1.1/gvite-v1.1.1-linux.tar.gz
```
```
## Unpack
tar -xzvf gvite-v1.1.1-linux.tar.gz
```
```
## Enter the extracted folder, which should contain three files: gvite, bootstrap and node_config.json
cd gvite-v1.1.1-linux
```
```
## Start-up
./bootstrap
```
Check the content of gvite.log in the same folder to determine whether the program boots normally.
```bash
cat gvite.log
```
The following messages indicate that the startup is successful.
```bash
t=2018-11-09T17:44:48+0800 lvl=info msg=NodeServer.DataDir:/home/ubuntu/.gvite/testdata module=gvite/node_manager
t=2018-11-09T17:44:48+0800 lvl=info msg=NodeServer.KeyStoreDir:/home/ubuntu/.gvite/testdata/wallet module=gvite/node_manager
Prepare the Node success!!!
Start the Node success!!!
```

### Installation example on mac 

```bash
## Download
curl -L -O https://github.com/vitelabs/go-vite/releases/download/v1.1.1/gvite-v1.1.1-darwin.tar.gz
## Unpack
tar -xzvf gvite-v1.1.1-darwin.tar.gz
## Enter the extracted folder, which should contain three files: gvite, bootstrap and node_config.json
cd gvite-v1.1.1-darwin
## Start-up
./bootstrap
```

Check the content of gvite.log in the same folder to determine whether the program boots normally.

```bash
cat gvite.log
```

The following messages indicate that the startup is successful.

```bash
t=2018-11-09T17:44:48+0800 lvl=info msg=NodeServer.DataDir:~/Library/GVite/testdata module=gvite/node_manager
t=2018-11-09T17:44:48+0800 lvl=info msg=NodeServer.KeyStoreDir:~/Library/GVite/testdata/wallet module=gvite/node_manager
Prepare the Node success!!!
Start the Node success!!!
```

### Installation example on windows 
Open up your preferred browser and paste in the following link:

```bash
https://github.com/vitelabs/go-vite/releases/download/v1.1.1/gvite-v1.1.1-windows.tar.gz
```
and save file to preferred directory. Upon download completion, open up explorer, navigate to the directory where file is downloaded to, right click file and select extract file option.

Extracted destination should contain three files:

 `gvite-windows-386.exe (32bit executable)`
 `gvite-windows-amd64.exe (64bit executable)`
 `node_config.json (node config file).`

The folder contains the command .exe files and can be used without installing.

Configure `node_config.json` prior to launching executable (use the 32bit executable if you have a 32bit CPU or 64bit executable if you have a 64bit CPU).

To launch node, simply open up command prompt (by pressing Win + R, then, type cmd and press Enter or click/tap OK.)

Then in command prompt:

```
C:\Users\user>d:

D:\>cd gvite-v1.1.1-windows

D:\gvite-v1.1.1-windows>gvite-windows-amd64.exe (or your preferred executable)

```
The following messages indicate that the startup is successful.

```bash
INFO[11-21|09:28:42] NodeServer.DataDir:C:\Users\user\AppData\Roaming\GVite\testdata module=gvite/node_manager
INFO[11-21|09:28:42] NodeServer.KeyStoreDir:C:\Users\user\AppData\Roaming\GVite\testdata\wallet module=gvite/node_manager
Prepare the Node success!!!
Start the Node success!!!
```
### Description of installation directory

**Installation directory**：Refers to the folder where gvite startup scripts and configuration file are located. For example, `~/gvite-${version}-${os}`

* `gvite`： Gvite executable file
* `bootstrap`： Startup script
* `node_config.json`： Configuration file. See [configuration description](./node_config.md)

### Ports

The system default ports are 8483/8484. If you are using default ports, please ensure that they are not occupied by other programs or blocked by firewall.

```bash
 netstat -nlp|grep 8483 
```

Check if the default ports are occupied. Gvite will display the following messages if it boots successfully.
 
```
netstat -nlp|grep 8483
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp6       0      0 :::8483                 :::*                    LISTEN      22821/gvite     
udp6       0      0 :::8483                 :::*                                22821/gvite
```

### Description of working directory

```bash
cd ~/.gvite/testdata
```
Gvite working directory, containing sub-directories/files such as ledger, ledger_files, LOCK, p2p, rpclog, runlog and wallet.

* `ledger`： Ledger directory
* `rpclog`： Rpc access log
* `runlog`： Run-time log directory
* `wallet`： Wallet keyStore directory to store keyStore file with secured private key. If you run a super node, please be sure to `keep your private key safe`.

## Install from source
### Golang environment check

```
go env
```

:::warning
Go 1.11.1 or above version is required. See Go installation guild: [go installation](https://golang.org/doc/install)
:::

### Compile source code
   * Get gvite source code
  ```
    go get github.com/vitelabs/go-vite
  ```
  Source code is downloaded at:
  ```
  $GOPATH/src/github.com/vitelabs/go-vite/
  ```
  The system default GOPATH is ```~/go```
  
  Go to the source code directory and run 
  ```
  make gvite
  ```
  Executable file is generated here: 
  
  ```
  $GOPATH/src/github.com/vitelabs/go-vite/build/cmd/gvite/gvite
  ```

### Configuration file
  Config file name: `node_config.json`. It should reside in the same directory with gvite executables. Details can be found at: [Config Description](./node_config.md)

### Start-up script
  For example, in linux environment run
  ```
  nohup ./gvite -pprof >> gvite.log 2>&1 &
  ```
  to start gvite.

## Monitoring

### Query current node height in command line

* Start a full node as instructed
* Access the full node in command line: Enter [full node installation directory](./install.md#Description-of-installation-directory) and execute the following command

  If using Linux/Unix：
  ```bash
  ./gvite attach ~/.gvite/testdata/gvite.ipc
  ```
  If using Windows：
  ```bash
  gvite-windows-amd64.exe attach \\.\pipe\gvite.ipc
  ```
  Input：
  ```javascript
  vite.ledger_getSnapshotChainHeight();
  ```
  Output:
  ```
  "{\"id\":0,\"jsonrpc\":\"2.0\",\"result\":\"2166918\"}"
  ```
  2166918 is current block height. 
  For more command usage please run `vite.help`.
  
## Full node reward

Starting from gvite-1.1.1, we will distribute token rewards to those who run full nodes in the TestNet. To participate in the reward program, you need check the following points.

### Version requirement
Minimum required gvite version: [1.3.0](https://github.com/vitelabs/go-vite/releases/tag/v1.3.0)

### Node configuration

Additional settings in `node_config.json` are required:
* Set full-node status report URL: `"DashboardTargetURL": "wss://stats.vite.net"`
* Add "dashboard" to `PublicModules`
* Set `"RewardAddr": "vite_youraddress"`. This is the address to receive your full node reward, please keep the mnemonic phrase secure.

The modified part of node_config.json is as below(please note this is not the full config file):
```
  "PublicModules": [
    "ledger",
    "public_onroad",
    "net",
    "contract",
    "pledge",
    "register",
    "vote",
    "mintage",
    "consensusGroup",
    "tx",
    "dashboard"  // new add
  ],
  "DashboardTargetURL":"wss://stats.vite.net",  // new add
  "RewardAddr":"vite_youraddress"   // new add
```
Save the changes.

### Node status check

Reboot your full node, then visit [Full Node Stats](https://stats.vite.net/api/getAlivePeers) to examine if your node has shown up correctly(result will reflect in 5 minutes).
  
## Next steps

* [Super node configuration](./sbp.md)
* [Wallet management](./wallet-manage.md)
* [Super node rules](../rule/sbp.md)
