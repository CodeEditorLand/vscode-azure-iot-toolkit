// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// Run 'npm install azure-iot-device-mqtt' to install the required libraries for this application
var Client = require("azure-iot-device").Client;
var Protocol = require("azure-iot-device-mqtt").Mqtt;

var connectionString = "{{deviceConnectionString}}";

// create the IoTHub client
var client = Client.fromConnectionString(connectionString, Protocol);
console.log("got client");

// connect to the hub
client.open((err) => {
	if (err) {
		console.error("could not open IotHub client");
		process.exit(-1);
	} else {
		console.log("client opened");

		// Create device Twin
		client.getTwin((err, twin) => {
			if (err) {
				console.error("could not get twin");
				process.exit(-1);
			} else {
				console.log("twin created");

				// set up code to handle desired property changes.
				twin.on("properties.desired", (delta) => {
					console.log("new desired properties received:");
					console.log(JSON.stringify(delta));
				});

				// create a patch to send to the hub
				var patch = {
					firmwareVersion: "1.2.2",
					weather: {
						temperature: 72,
						humidity: 17,
					},
				};

				// send the patch
				twin.properties.reported.update(patch, (err) => {
					if (err) {
						console.error(
							"unable to update twin: " + err.toString(),
						);
						process.exit(-1);
					} else {
						console.log("twin state reported");
					}
				});
			}
		});
	}
});
