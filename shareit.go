package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func handleUpload(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Println("Method not allowed")
		return
	}

	err := r.ParseMultipartForm(200 << 20)

	if err != nil {
		fmt.Println(err)
	}

	files := r.MultipartForm.File["file"]

	for _, fileHeader := range files {

		file, err := fileHeader.Open()

		if err != nil {
			fmt.Println("Errpr opening file: ", err)
		}
		defer file.Close()

		dest, err := os.Create("./uploads/" + fileHeader.Filename)

		if err != nil {
			fmt.Println("Error creating file: ", err)
			return
		}

		_, err = io.Copy(dest, file)

		if err != nil {
			fmt.Println("Error copying file: ", err)
			return
		}

		dest.Close()
	}

	fmt.Println("File saved successfully")
}

func main() {

	os.MkdirAll("./uploads", os.ModePerm)

	fmt.Println("Listening to port 3000")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodGet {

			http.ServeFile(w, r, "index.html")
			return
		}
		if r.Method == http.MethodPost {

			handleUpload(w, r)
			return
		}
	})

	// http.HandleFunc("/upload", )
	http.ListenAndServe(":3000", nil)

}
