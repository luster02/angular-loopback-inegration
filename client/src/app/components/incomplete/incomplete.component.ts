import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.scss']
})
export class IncompleteComponent implements OnInit {
  notes:Note[]=[];
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

}
