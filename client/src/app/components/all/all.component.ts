import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  notes:Note[]=[];
  selectNote:Note;
  constructor(public dbService:DatabaseService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this.dbService.getNotes()
     .subscribe((notes:Note[]) => {
        this.notes = notes;
     }) 
  }

  editNote(note:Note){
    this.selectNote = note;
    console.log(this.selectNote.id);
  }
}
