// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type * as vscode from "vscode";
import type { ModuleItem } from "../Model/ModuleItem";
import type { INode } from "./INode";
import type { ModuleLabelNode } from "./ModuleLabelNode";

export class ModuleItemNode implements INode {
	constructor(
		public readonly moduleItem: ModuleItem,
		public readonly moduleLabelNode: ModuleLabelNode,
	) {}

	public getTreeItem(): vscode.TreeItem {
		return this.moduleItem;
	}

	public getChildren(): INode[] {
		return [];
	}
}
