import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
    this.start();
  }

  start() {

    setTimeout(() => {
      console.log('Navigating to Login');
      this.router.navigate(['/', 'login']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }, 5000);


  }
}
