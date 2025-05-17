# ShareIt 🚀

![ShareIt Demo](https://via.placeholder.com/800x400.png?text=ShareIt+Demo) <!-- Add actual demo image -->

A lightning-fast local file sharing platform built with modern web technologies. Transfer files seamlessly between devices on the same network using WebSocket communication.

## Features ✨

* **Drag-and-Drop Interface**  
  Intuitive file upload with instant visual feedback

* **Real-time Progress Tracking**  
  Live updates for both sender and receiver during transfers

* **Chunk-based Transfers**  
  Reliable large file handling with 64KB chunking system

* **Cross-device Compatibility**  
  Web-based solution works on any modern browser

* **Instant Downloads**  
  Automatic file assembly and download prompting for receivers

## Tech Stack 🛠️

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Prerequisites 📋

- Node.js v18+
- Bun v1.0+ (or npm/yarn)
- WebSocket-enabled network environment

## Installation ⚙️

1. **Clone repository**
   ```bash
   git clone https://github.com/winnerezy/shareit.git
   cd shareit

   Install dependencies
```bash
bun install
Alternative with npm
npm install
```
Start development server
```bash

bun dev
Alternative with npm
npm run dev
```

Usage Guide 

## Sending Files
```
    Open ShareIt in your browser at http://localhost:3000

    Upload files using either:

        Drag-and-drop into the designated zone

        Click to browse local files

    Verify selected files in the preview list

    Click Send to initiate transfer

    Share your session ID with the receiver
```
## Receiving Files
```
    Connect to the same network

    Open ShareIt and wait for automatic download prompt

    Files will be automatically saved to your downloads folder
```