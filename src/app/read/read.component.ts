import { Component, OnInit } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorials.action';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})


export class ReadComponent implements OnInit {

tutorials:Observable <Tutorial[]> ;

  constructor(private store: Store<AppState>) { 

    this.tutorials=store.select('tutorial')
  }

  deleteTutorial(index){
    window.alert("ARE YOU SURE YOU WANT TO DELETE THIS TUUTORIAL"+ this.tutorials[index]);
this.store.dispatch(new TutorialActions.RemoveTutorial(index))

  }
  

  ngOnInit() {
  }








}
