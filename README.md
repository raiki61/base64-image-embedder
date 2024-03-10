## Base64 Image Embedder

This extension allows you to convert images in HTML files to binary data and embed them using Base64 encoding in Visual Studio Code.

### Installation

1. Open Visual Studio Code.
2. Open the Extensions view (Ctrl+Shift+X).
3. Search for "Base64 Image Embedder" and install it.

### Usage

1. Open an HTML file.
2. Open the command palette (Ctrl+Shift+P).
3. Type "Base64 Image Embedder: Convert Image to Binary" and press Enter.
4. The images will be converted to binary data, Base64 encoded, and embedded in the HTML file.

### Features

- Converts images in HTML files to binary data.
- Embeds binary data as Base64 encoding in HTML files.
- Easily accessible from the command palette.

### Note

- This extension applies only to HTML files.
- The converted Base64 data is embedded directly in the HTML file, and the original image files remain unchanged.

### License

Apache License Version 2.0

## Architecture Overview

This extension follows the principles of Clean Architecture, separating concerns into distinct layers:

### 1. Domain Layer

- **Image Class**: Represents an image entity, holding the path to the image and its Base64 encoded data.

### 2. Use Case Layer

- **ConvertImageToBase64UseCase Class**: Implements the use case to convert images to binary data, encode them using Base64, and embed them in HTML files. This class focuses on business rules independently of external frameworks.

### 3. Adapter Layer

- **VSCodeAdapter Class**: Wraps the Visual Studio Code API to handle requests from the use case layer. Specifically, it performs operations related to VSCode's editor and window. This adapter layer provides interfaces between external frameworks or toolkits and the use case layer, facilitating data exchange.

### 4. Presentation Layer

- **Extension's Entry Point**: Serves as the entry point for the VSCode extension, receiving user inputs and executing the appropriate use cases. It acts as the user interface component.

### 5. Data Layer

- This extension does not require a data layer. All data related to image conversion and encoding is processed in-memory.

By adopting Clean Architecture, each layer of the extension becomes loosely coupled, resulting in a robust design resilient to changes. Moreover, it ensures clear separation of business logic and application requirements, facilitating testing and maintenance.

## Environment Setup

* Developing VSCode Extensions:
  * [How to Develop VSCode Extensions](https://qiita.com/HelloRusk/items/073b58c1605de224e67e)

### Developer's Environment

* OS
  * Windows 11 (March 10, 2024)
* Node.js
  * v20.11.1

### Troubleshooting

* Error: Scripts are disabled on this system...
  * [Troubleshooting Guide](https://qiita.com/ponsuke0531/items/4629626a3e84bcd9398f)

Consider creating an English version of the README as well.