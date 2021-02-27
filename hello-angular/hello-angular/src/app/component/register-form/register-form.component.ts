import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    

Fruits=['apple','orange','banana','grapes'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
login()
{
  this.router.navigate([''])
}
}
