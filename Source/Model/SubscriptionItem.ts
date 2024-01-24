// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { SubscriptionModels } from "@azure/arm-subscriptions";
import type { QuickPickItem } from "vscode";
import type { AzureSession } from "../azure-account.api";

export class SubscriptionItem implements QuickPickItem {
	public readonly label: string;
	public readonly description: string;
	constructor(
		public readonly subscription: SubscriptionModels.Subscription,
		public readonly session: AzureSession,
	) {
		this.label = subscription.displayName;
		this.description = subscription.subscriptionId;
	}
}
