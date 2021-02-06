import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileFrom = new FormGroup({
    login : new FormControl(),
    password : new FormControl()
  })
  constructor(private auth:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
      console.log(this.profileFrom.value)
    this.auth.login(this.profileFrom.value.login,this.profileFrom.value.password)
    if(this.auth.isAuthenticated == true)
      this.auth.saveLocalUser();
      this.route.navigateByUrl('');
  }
}
