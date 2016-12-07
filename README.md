# Azure IoT Toolkit

Toolkit makes Azure IoT Development easier

## Features

[*] Send messages to Azure IoT Hub (device-to-cloud message)

[*] Monitor device-to-cloud messages

[ ] Send messages from Azure IoT Hub to device (cloud-to-device message)

[*] Device management (List, Create, Delete)

[*] Discover devices connected via Ethernet, USB serial and WiFi

[*] Deploy and run in remote machine

[ ] Debug in remote machines

[ ] And more...

## Commands

| Command | Keyboard Shortcuts | Menu Contexts |
| --- | --- | --- |
| Send message to IoT Hub | Ctrl+Alt+F9 | editor/context |
| Start monitoring | Ctrl+Alt+F10 | editor/context |
| Stop monitoring | Ctrl+Alt+F11 | editor/context |
| List device | Ctrl+Alt+F1 | editor/context |
| Create device | Ctrl+Alt+F2 | editor/context |
| Delete device | Ctrl+Alt+F3 | editor/context |
| Discover connected device | Ctrl+Alt+F6 | editor/context |
| Deploy to remote machine | Ctrl+Alt+F4 | editor/context |
| Run in remote machine | Ctrl+Alt+F5 | editor/context |

## Usages

* Send messages to Azure IoT Hub

  ![Send](images/send.gif)

* Monitor device-to-cloud messages

  ![Monitor](images/monitor.gif)

* Device management (List, Create, Delete)

  ![Device](images/device.gif)

* Deploy and run in remote machine

  ![Remote](images/remote.gif)

| Config | description |
| ---- | ---- |
| azure-iot-toolkit.localFolder | The folder of current machine to deploy |
| azure-iot-toolkit.remoteFolder | The folder of remote machine to deploy |
| azure-iot-toolkit.host | The hostname or IP address of remote machine |
| azure-iot-toolkit.username | The username of remote machine |
| azure-iot-toolkit.password | The password of remote machine |
| azure-iot-toolkit.command | The command to run in remote machine |

* Discover Ethernet, USB serial, WiFi devices
  1. Install Node.js or install [device-discovery-cli](https://github.com/Azure/device-discovery-cli):

    ```
    $ npm install --global device-discovery-cli
    ```
  2. Discover devices in VS Code:

  ![Device](images/discover.gif)

## Configuration

To set the Device Connection String which is used to send device-to-cloud message:
```json
{
    "azure-iot-toolkit.deviceConnectionString": "HostName=<my-hub>.azure-devices.net;DeviceId=<known-device-id>;SharedAccessKey=<known-device-key>"
}
```

To set the IoT Hub Connection String to monitor device-to-cloud message:
```json
{
    "azure-iot-toolkit.iotHubConnectionString": "HostName=<my-hub>.azure-devices.net;SharedAccessKeyName=<my-policy>;SharedAccessKey=<my-policy-key>"
}
```

To set the IoT Hub Consumer Group (default is "$Default"):
```json
{
    "azure-iot-toolkit.consumerGroup": "$Default"
}
```

## Telemetry data
By default, anonymous telemetry data collection is turned on to understand user behavior to improve this extension. To disable it, update the settings.json as below:
```json
{
    "azure-iot-toolkit.enableAppInsights": false
}
```

## Change Log
See Change Log [here](CHANGELOG.md)

## Issues
Submit the [issues](https://github.com/formulahendry/vscode-azure-iot-toolkit/issues) if you find any bug or have any suggestion.

## Contribution
Fork the [repo](https://github.com/formulahendry/vscode-azure-iot-toolkit) and submit pull requests.