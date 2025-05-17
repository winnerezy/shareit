# ShareIt 🚀

![ShareIt Demo](https://via.placeholder.com/800x400.png?text=ShareIt+Demo)

A lightning-fast local file sharing platform built with modern web technologies. Transfer files seamlessly between devices on the same network using WebSocket communication.

---

## ✨ Features

* **Drag-and-Drop Interface**
  Intuitive file upload with instant visual feedback.

* **Real-time Progress Tracking**
  Live updates for both sender and receiver during transfers.

* **Chunk-based Transfers**
  Reliable large file handling with 64KB chunking system.

* **Cross-device Compatibility**
  Web-based solution works on any modern browser.

* **Instant Downloads**
  Automatic file assembly and download prompting for receivers.

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge\&logo=socket.io\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

---

## 📋 Prerequisites

* Node.js v23+
* Bun v1.0+ (or npm/yarn)
* WebSocket-enabled network environment

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/winnerezy/shareit.git
cd shareit
```

### 2. Install Dependencies

Using **Bun**:

```bash
bun install
```

Or with **npm**:

```bash
npm install
```

### 3. Start Development Server

Using **Bun**:

```bash
bun dev
```

Or with **npm**:

```bash
npm run dev
```

---

## 📄 Usage Guide

### 🔼 Sending Files

1. Open ShareIt in your browser using your device's IP address.
2. Upload files using either:

   * Drag-and-drop into the designated zone
   * Click to browse and select files
3. Verify selected files in the preview list.
4. Click **Send** to initiate transfer.
5. Share your **session ID** with the receiver.

---

### 🔽 Receiving Files

1. Connect to the **same network** as the sender.
2. Open ShareIt in your browser.
3. Wait for the **automatic download prompt**.
4. Files will be automatically saved to your **Downloads** folder.

---
