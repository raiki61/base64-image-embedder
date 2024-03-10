import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { Image } from '../entities/image';
import { VSCodeAdapter } from '../adapters/vscodeAdapter';

export class ConvertImageToBase64UseCase {
    async execute(): Promise<void> {
        const activeEditor = await VSCodeAdapter.getActiveTextEditor();
        if (!activeEditor || activeEditor.document.languageId !== 'html') {
            await VSCodeAdapter.showErrorMessage('Please open an HTML file.');
            return;
        }

        const document = activeEditor.document;
        const htmlContent = await this.getHtmlFileContent(document);
        const imagePaths = this.extractImagePath(htmlContent);
        const images = await this.convertImagesToBase64(imagePaths);
        const newHtmlContent = this.replaceImagesInHtml(htmlContent, images);
        await this.updateHtmlFile(document, newHtmlContent);
        await VSCodeAdapter.showInformationMessage(`Successfully replaced ${images.length} image(s) with base64 encoded data.`);
    }

    private async convertImagesToBase64(imagePaths: string[]): Promise<Image[]> {
        const images: Image[] = [];
        for (const imagePath of imagePaths) {
            const absoluteImagePath = path.join(vscode.workspace.rootPath || '', imagePath);
            try {
                const binaryData = await this.imageToBinary(absoluteImagePath);
                const base64Data = binaryData.toString('base64');
                const image = new Image(imagePath, `data:image/${path.extname(imagePath).substring(1)};base64,${base64Data}`);
                images.push(image);
            } catch (error) {
                console.error('Error reading image file:', error);
            }
        }
        return images;
    }

    private async imageToBinary(filePath: string): Promise<Buffer> {
        return fs.promises.readFile(filePath);
    }

    private async updateHtmlFile(document: vscode.TextDocument, newHtmlContent: string): Promise<void> {
        const edit = new vscode.WorkspaceEdit();
        edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newHtmlContent);
        await vscode.workspace.applyEdit(edit);
    }

    private extractImagePath(htmlContent: string): string[] {
        const imgSrcRegex = /<img\s+src="([^"]+)"[^>]*>/g;
        const imagePaths: string[] = [];
        let match;
        while ((match = imgSrcRegex.exec(htmlContent)) !== null) {
            imagePaths.push(match[1]);
        }
        return imagePaths;
    }

    private async getHtmlFileContent(document: vscode.TextDocument): Promise<string> {
        return document.getText();
    }

    private replaceImagesInHtml(htmlContent: string, images: Image[]): string {
        let newHtmlContent = htmlContent;
        for (const image of images) {
            newHtmlContent = newHtmlContent.replace(image.path, image.base64Data);
        }
        return newHtmlContent;
    }
}
