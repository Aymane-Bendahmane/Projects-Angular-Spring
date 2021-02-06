import { Component, OnInit } from '@angular/core';
import {ServiceProduitService} from "../servicee/service-produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {
  public Produit;
  public categories: any;
  public currentProduit;
  constructor(private ps:ServiceProduitService,private rt:Router) { }

  ngOnInit(): void {
    this.getCategories() ;
  }

  getCategories(){

    this.ps.GetC().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
    });
  }
  submitProduit(value) {
  this.currentProduit = value ;
    this.ps.postProduit(value).subscribe(data => {

       alert('updated ');
        this.Produit = data;
      //this.rt.navigateByUrl("/afficherProduit");
      }, error => {
        console.log(error);
      });
  }


}
