import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CaddyComponent} from './caddy/caddy.component';

const routes: Routes = [{
  path:'products/:p1/:p2',component:ProductComponent
}
,{
  path:'',redirectTo:'products/1/0',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'details/:url',component:ProductDetailsComponent
  },
  {
    path:'caddy',component:CaddyComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
