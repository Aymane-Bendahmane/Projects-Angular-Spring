import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = [
    {
      login: 'admin',
      password: 'admin',
      roles: ['ADMIN', 'USER']
    },
    {
      login: 'user',
      password: 'user',
      roles: ['USER']
    }
  ];
  public token:any;
  public isAuthenticated: boolean = false;
  public userAuthenticated: any;

  constructor() {
  }

  public login(username: string, password: string) {
    let user = undefined;
    this.users.forEach(u => {
      if (u.login == username && u.password == password) {
        user = u;
        this.token = {
          username : u.login,
          roles : u.roles
        }
      }
    });

    if (user) {
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    } else {
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
  }

  public isAdmin() {
    if (this.userAuthenticated) {
      if(this.userAuthenticated.roles.indexOf('ADMIN')>-1)
        return true;


    }
    return false
  }
  public saveLocalUser(){
    if(this.userAuthenticated)
    {
      localStorage.setItem('authToken',btoa(JSON.stringify(this.token)));
    }
  }
  public loadAuthenticatedUserFromLocalStorage(){
    let token = localStorage.getItem('authToken');
    if (token != null) {
      let user = JSON.parse(atob(token));
      this.userAuthenticated =  user ;
      this.isAuthenticated = true ;
    }
  }
}
