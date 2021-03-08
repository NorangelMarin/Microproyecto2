import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import firebase from 'firebase';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  user: firebase.User = null;

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
    this.Auth.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }

}
