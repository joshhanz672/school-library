//import { Injectable } from '@angular/core';

//import { Http, Response } from "@angular/http";
//import { Headers, RequestOptions } from '@angular/http';
 
//@Injectable 
export class BooksService {
    //private apiUrl = 'http://localhost:8080/books';
    private apiUrl = 'http://localhost:8080';

    getBooks() {
       return ["Erbschaft", "Calcooloos", "Drowrings", "El Beeblo", 
        "PSYC 01A (Concepts of Psychology) Lecture Notes", "BIOL 04A (Botany 1st semester) Lecture Notes"];
       }


      // findAll(): {}

}