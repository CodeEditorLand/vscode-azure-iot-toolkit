// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import type { INode } from "./INode";

export class InfoNode implements INode {
	constructor(private readonly label: string) {}

	public getTreeItem(): vscode.TreeItem {
		return {
			label: this.label,
		};
	}

	public getChildren(): INode[] {
		return [];
	}
}
