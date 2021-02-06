import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './service/catalogue.service';
import {errorObject} from 'rxjs/internal-compatibility';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';
import {CadyService} from './service/cady.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public Categories: any;
  public current_category:any;
  constructor(public caddyService:CadyService,private ps:CatalogueService,private route:Router,private auth:AuthenticationService) {
  }
  ngOnInit(): void {
    this.getCategories();
    this.auth.loadAuthenticatedUserFromLocalStorage();
  }
  title = 'Ecomerce';

  public getCategories() {
  this.ps.getResources('/categories').subscribe(data=>{
    this.Categories = data ;
    //console.log(data);
  },error => {
    console.log(error);
  })
  }

  ongetProductsbyCategories(c: any) {
    this.current_category = c ;
    this.route.navigateByUrl('/products/2/'+c.id);
  }

  onselectAll() {
    this.current_category = undefined ;
    this.route.navigateByUrl('/products/1/0')
  }

  getPromotions() {

    this.current_category = undefined ;
    this.route.navigateByUrl('/products/3/0')
  }

  getDisponible() {

    this.current_category = undefined ;
    this.route.navigateByUrl('/products/4/0')
  }

  onLogout() {
    localStorage.removeItem('authToken');
    this.route.navigateByUrl('/login')
  }
}
