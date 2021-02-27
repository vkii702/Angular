import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
    Email:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  validatelogin(){
    this.router.navigate(['/iframe'])

  }
  Register()
  {
    this.router.navigate(['/Register'])
  }
}
