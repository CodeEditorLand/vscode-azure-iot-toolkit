// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { exec, execSync } from "node:child_process";
import * as vscode from "vscode";

export class Executor {
	public static runInTerminal(
		command: string,
		terminal = "Azure IoT Hub",
	): void {
		if (Executor.terminals[terminal] === undefined) {
			Executor.terminals[terminal] =
				vscode.window.createTerminal(terminal);
		}
		Executor.terminals[terminal].show();
		Executor.terminals[terminal].sendText(command);
	}

	public static exec(command: string) {
		return exec(command);
	}

	public static execSync(command: string) {
		return execSync(command, { encoding: "utf8" });
	}

	public static onDidCloseTerminal(closedTerminal: vscode.Terminal): void {
		delete Executor.terminals[closedTerminal.name];
	}

	private static terminals: { [id: string]: vscode.Terminal } = {};
}
