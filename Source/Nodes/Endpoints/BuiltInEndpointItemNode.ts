// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import type { INode } from "../INode";

export class BuiltInEndpointItemNode implements INode {
	public getTreeItem(): vscode.TreeItem {
		return {
			label: "events",
			contextValue: "events",
		};
	}

	public getChildren(): INode[] {
		return [];
	}
}
