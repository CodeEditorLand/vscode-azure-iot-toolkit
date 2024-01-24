// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import type { EventHubItem } from "../../Model/EventHubItem";
import type { INode } from "../INode";

export class EventHubItemNode implements INode {
	constructor(public eventHubItem: EventHubItem) {}

	public getTreeItem(): vscode.TreeItem {
		return this.eventHubItem;
	}

	public getChildren(): INode[] {
		return [];
	}
}
