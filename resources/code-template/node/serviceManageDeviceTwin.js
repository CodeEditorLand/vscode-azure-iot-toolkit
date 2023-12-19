// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// Run 'npm install azure-iothub' to install the required libraries for this application
const Registry = require("azure-iothub").Registry;

const connectionString = "{{iotHubConnectionString}}";
const deviceId = "{{deviceId}}";

const registry = Registry.fromConnectionString(connectionString);
registry.getTwin(deviceId, (err, twin) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log(JSON.stringify(twin, null, 2));
		const twinPatch = {
			tags: {
				city: "Redmond",
			},
			properties: {
				desired: {
					telemetryInterval: 1000,
				},
			},
		};

		// method 1: using the update method directly on the twin
		twin.update(twinPatch, (err, twin) => {
			if (err) {
				console.error(err.message);
				process.exit(-1);
			} else {
				console.log(JSON.stringify(twin, null, 2));
				// method 2: using the updateTwin method on the Registry object
				registry.updateTwin(
					twin.deviceId,
					{ properties: { desired: { telemetryInterval: 2000 } } },
					twin.etag,
					(err, twin) => {
						if (err) {
							console.error(err.message);
							process.exit(-1);
						} else {
							console.log(JSON.stringify(twin, null, 2));
							process.exit(0);
						}
					},
				);
			}
		});
	}
});
