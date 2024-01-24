// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import { TreeUtils } from "../Utility/treeUtils";
import { Utility } from "../utility";
import type { INode } from "./INode";

export class IoTHubLabelNode implements INode {
	constructor(private iotHubConnectionString: string) {}

	public getTreeItem(): vscode.TreeItem {
		return {
			label: Utility.getIoTHubName(this.iotHubConnectionString),
			contextValue: "iothub-label",
			iconPath: TreeUtils.getThemedIconPath("iothub"),
		};
	}

	public async getChildren(): Promise<INode[]> {
		return [];
	}
}
