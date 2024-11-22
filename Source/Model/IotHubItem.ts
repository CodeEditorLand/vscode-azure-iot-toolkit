// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { IotHubModels } from "@azure/arm-iothub";
import { QuickPickItem } from "vscode";

import { Utility } from "../utility";

export class IotHubItem implements QuickPickItem {
	public readonly label: string;
	public readonly description: string;

	constructor(
		public readonly iotHubDescription: IotHubModels.IotHubDescription,
	) {
		this.label = iotHubDescription.name;
		this.description = Utility.getResourceGroupNameFromId(
			iotHubDescription.id,
		);
	}
}
