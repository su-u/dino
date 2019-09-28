package main

import (
    "fmt"
    "net/http"
    "log"
    "html/template"
    
    "github.com/gorilla/mux"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
    t := template.Must(template.ParseFiles("templates/temp001.html.tpl"))
    str := "unko"

    // テンプレートを描画
    if err := t.ExecuteTemplate(w, "temp001.html.tpl", str); err != nil {
        log.Fatal(err)
    }

    fmt.Println("Hello world!")
}

func main() {

    r := mux.NewRouter()
    r.HandleFunc("/", rootHandler)

    http.Handle("/", r)
    http.ListenAndServe(":9000", nil)
}
