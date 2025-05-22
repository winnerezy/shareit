# ShareIt

![ShareIt Demo](https://via.placeholder.com/800x400.png?text=ShareIt-Go+Demo)

A simple local file upload server built with Go’s standard library. Upload multiple files via a multipart form and save them to a local `uploads/` directory.

---

## ✨ Features

* **Multi-File Upload**  
  Handle one or more files in a single POST request via `multipart/form-data`.

* **HTTP Method Validation**  
  Reject non-POST uploads with a `405 Method Not Allowed` response.

* **Automatic Directory Creation**  
  Ensures `./uploads/` exists on startup before saving files.

* **Simple HTML Frontend**  
  Serves an `index.html` form for drag-and-drop or browse-and-select uploads.

---

## 🛠️ Tech Stack

![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)  
![Net/HTTP](https://img.shields.io/badge/net--http-000000?style=for-the-badge&logo=go&logoColor=white)

---

## 📋 Prerequisites

* Go 1.20+ installed

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/winnerezy/shareit.git
cd shareit-go

2. Build the server

go build -o shareit-go

🚀 Running the Server

./shareit

By default, the server will:

    Create ./uploads/ if it doesn’t exist.

    Listen on port 3000.

    Serve index.html at GET YOUR_PC_IP_ADDRESS.

    Accept file uploads at POST YOUR_PC_IP_ADDRESS.

📄 Usage Guide
🔼 Uploading Files

    Open your browser to YOUR_PC_IP_ADDRESS.

    Use the provided form to drag & drop or browse for files.

    Click Upload to submit.

    On success, files are saved to ./uploads/ and you’ll see a console log:

    File saved successfully: uploads/your-file-name.ext

🔽 Handling Errors

    405 Method Not Allowed
    Trying any method other than GET / or POST / will return a 405 status.

    Bad Form Data
    If the upload form is malformed, you’ll see an error logged in the console and a 400 response.

📂 Project Structure

.
├── index.html         # Simple upload form
├── main.go            # HTTP server & upload handler
└── uploads/           # Directory where files are saved

🤝 Contributing

Feel free to open issues or submit pull requests for improvements, such as:

    Adding file type validation

    Progress reporting on the frontend

    Authentication or access control
