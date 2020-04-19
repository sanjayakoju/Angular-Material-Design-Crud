import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn = false;

  constructor(private router:Router) { }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    
  }

}
