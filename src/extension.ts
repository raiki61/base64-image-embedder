import * as vscode from 'vscode';
import { ConvertImageToBase64UseCase } from './usecase/convertImageToBase64UseCase';

export async function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "base64-image-embedder" is now active!');

    const convertImageToBase64UseCase = new ConvertImageToBase64UseCase();

    let disposable = vscode.commands.registerCommand('extension.convertImageToBase64', async () => {
        await convertImageToBase64UseCase.execute();
    });

    context.subscriptions.push(disposable);

    // 右クリックメニューにコマンドを追加する
    const disposableContextMenu = vscode.commands.registerCommand('extension.convertImageToBase64ContextMenu', async (uri: vscode.Uri) => {
        await convertImageToBase64UseCase.execute();
    });

    context.subscriptions.push(
        vscode.commands.registerCommand('base64-image-embedder.convertImageToBase64', async (uri: vscode.Uri) => {
            await vscode.commands.executeCommand('extension.convertImageToBase64ContextMenu', uri);
        })
    );

    context.subscriptions.push(disposableContextMenu);
}

export function deactivate() {}
