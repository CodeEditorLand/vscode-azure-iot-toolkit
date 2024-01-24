// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import { CustomEndpointItem } from "../../Model/CustomEndpointItem";
import type { INode } from "../INode";

export class CustomEndpointItemNode implements INode {
	constructor(private name: string) {}

	public getTreeItem(): vscode.TreeItem {
		return new CustomEndpointItem(this.name);
	}

	public getChildren(): INode[] {
		return [];
	}
}
