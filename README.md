# Base64 Image Embedder

This extension allows you to convert images within HTML files to binary data and embed them using Base64 encoding in Visual Studio Code.

## Installation

1. Open Visual Studio Code.
2. Open the Extensions view (`Ctrl+Shift+X`).
3. Search for "Base64 Image Embedder" and install it.

## Usage

1. Open an HTML file.
2. Open the command palette (`Ctrl+Shift+P`).
3. Type "Base64 Image Embedder: Convert Image to Binary" and press Enter.
4. The images will be converted to binary data and embedded in the HTML file using Base64 encoding.

## Features

- Converts images within HTML files to binary data.
- Embeds binary data as Base64 encoded images in HTML files.
- Easily accessible from the command palette.

## Notes

- This extension applies only to HTML files.
- The converted Base64 data is directly embedded in the HTML file, and the original image files are not modified.
- Please note that this extension only applies to local image files.

## License

Apache License Version 2.0

## Architecture Design Explanation

The architecture of this extension is based on the Clean Architecture. Clean Architecture focuses on placing business rules and application behavior at the center, avoiding dependencies on frameworks or external libraries. Below, we explain the architecture of this extension:

### 1. Domain Layer

- **Image Class**: Represents an entity for images, holding the path of the image and its Base64 encoded data.

### 2. Use Case Layer

- **ConvertImageToBase64UseCase Class**: Implements the use case of converting images to binary data, encoding them as Base64, and embedding them in HTML files. This class focuses on business rules and is independent of external frameworks.

### 3. Adapter Layer

- **VSCodeAdapter Class**: Wraps the Visual Studio Code API to handle requests from the use case layer. Specifically, it handles operations related to VSCode editors and windows. This adapter layer provides an interface between external frameworks or toolkits and the use case layer, facilitating data exchange.

### 4. Presentation Layer

- **Extension Entry Point**: Serves as the entry point for the VSCode extension, accepting user input and executing the appropriate use cases. It plays the role of a user interface.

### 5. Data Layer

- There is no data layer required for this extension. All data related to image conversion and encoding is processed in memory.

By adopting Clean Architecture, each layer of the extension becomes loosely coupled, resulting in a robust design that is resilient to changes. Additionally, separating business logic and application requirements enhances testability and maintainability.

## Environment Setup

* How to develop VSCode extensions
  * [Link to the article](https://qiita.com/HelloRusk/items/073b58c1605de224e67e)

### Developer Environment

* Operating System
  * Windows 11 (as of 2024/3/10)
* Node.js
  * Version 20.11.1

### Errors and Solutions

* Due to the restrictions of this system, script execution is disabled. ...
  * [Link to the article](https://qiita.com/ponsuke0531/items/4629626a3e84bcd9398f)

You may also consider providing a README in Japanese for users who prefer that language.