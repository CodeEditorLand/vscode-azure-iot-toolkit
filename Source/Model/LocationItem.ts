// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { SubscriptionModels } from "@azure/arm-subscriptions";
import type { QuickPickItem } from "vscode";

export class LocationItem implements QuickPickItem {
	public readonly label: string;
	public readonly description: string;
	constructor(public readonly location: SubscriptionModels.Location) {
		this.label = location.displayName;
		this.description = location.name;
	}
}
