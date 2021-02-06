import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceProduitService} from "../servicee/service-produit.service";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  public produit;
  public url;
  public categories;

  constructor(private activaterouter:ActivatedRoute,private ps:ServiceProduitService) {
    this.getproduit();
  }

  ngOnInit(): void {
  this.getCategorie();

  }

  getCategorie(){
    this.ps.GetC().subscribe(data => {
      this.categories = data ;
    }, error => {
      console.log(error);
    });
  }

  getproduit()
  {
    this.url = atob(this.activaterouter.snapshot.params.id);

   this.ps.consulterProduit(this.url+"?projection=p2").subscribe(data=>{
     this.produit = data;
   }, error => {
     console.log(error);
   })
  }

  updateProduite(value) {
    this.ps.updatePrd(this.url,value).subscribe(data=>{
      this.produit = data;
    }, error => {
      console.log(error);
    })
  }
}
