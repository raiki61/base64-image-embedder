// vscodeAdapter.ts

import * as vscode from 'vscode';
import * as fs from 'fs';

export class VSCodeAdapter {
    static async showErrorMessage(message: string): Promise<void> {
        await vscode.window.showErrorMessage(message);
    }

    static async showInformationMessage(message: string): Promise<void> {
        await vscode.window.showInformationMessage(message);
    }

    static async getActiveTextEditor(): Promise<vscode.TextEditor | undefined> {
        return vscode.window.activeTextEditor;
    }

    static async readFile(filePath: string): Promise<string> {
        return fs.promises.readFile(filePath, 'utf8');
    }

    static async writeFile(filePath: string, content: string): Promise<void> {
        await fs.promises.writeFile(filePath, content, 'utf8');
    }
}
