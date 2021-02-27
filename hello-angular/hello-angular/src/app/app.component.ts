import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//UI for this logic file is app.component.
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title="hello angular";
Email:Observable<any[]>;
constructor(db:AngularFireDatabase)
{
  this.Email=db.list('Email').valueChanges();
}
}
