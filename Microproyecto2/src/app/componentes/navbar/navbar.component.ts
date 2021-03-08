import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: firebase.User = null;

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
    this.Auth.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }

  Salir(){
    this.Auth.logout()
  }

}
