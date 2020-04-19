import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password' : ''};
  private loggedIn = false;
  constructor() { }

  onSubmit() {
    console.log('username'+this.credential.username);
  	if(this.credential.username=='admin' && this.credential.password=='admin')
  		{
        this.loggedIn = true;
      }
      else
      {
        this.loggedIn = false
      }
  	
  }
  ngOnInit() {
  }

}
