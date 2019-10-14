import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly URL_API = 'http://localhost:3000/notes';
  
  constructor(public http: HttpClient) { }

  getNotes(){
    return this.http.get(this.URL_API);
  }
  getOneNote(id:string){
    return this.http.get(this.URL_API+`/${id}`);
  }
  deleteNote(id:string){
    return this.http.delete(this.URL_API+`/${id}`);
  }
  editNote(id:string, note:Note){
    return this.http.put(this.URL_API+`/${id}`, note);
  }
  createNote(note: Note){
    return this.http.post(this.URL_API, note);
  }
}
