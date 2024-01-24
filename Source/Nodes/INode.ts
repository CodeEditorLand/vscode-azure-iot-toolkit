// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";

export interface INode {
	getTreeItem(): Promise<vscode.TreeItem> | vscode.TreeItem;

	getChildren(
		context?: vscode.ExtensionContext,
		iotHubConnectionString?: string,
	): Promise<INode[]> | INode[];
}
