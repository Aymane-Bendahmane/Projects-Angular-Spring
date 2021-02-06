import {Component, OnInit, Output} from '@angular/core';
import {ServiceProduitService} from "../servicee/service-produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affichage-produit',
  templateUrl: './affichage-produit.component.html',
  styleUrls: ['./affichage-produit.component.css']
})
export class AffichageProduitComponent implements OnInit {
  public produits;
  public size:number=5;
  public currentPage:number=0;
  public pages:Array<number> ;
  private currentKeyword: string="";

  constructor(private ps:ServiceProduitService , private rt: Router) {

  }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(){
    this.ps.getPr(this.size,this.currentPage).subscribe(data => {
      console.log(data);
      this.produits = data ;
      this.pages  = new Array<number>(data["page"].totalPages) ;
    }, error => {
      console.log(error);
    });
  }

  supprimerProduit(produit) {
    this.ps.delete(produit).subscribe(data => {

      this.produits = data ;
      this.getProduit();
    }, error => {
      console.log(error);
    });

  }

  modifierProduit(p) {
    //this.produit.emit(p);
    let  href = p._links.self.href ;
    console.log(href);
    this.rt.navigateByUrl("/update/"+btoa(href));
  }

  onPage(y: number) {
    this.currentPage = y;
    this.search();
  }

  onSearch(keyword){
    this.currentPage = 0 ;
    this.currentKeyword = keyword.keyword;
    this.search();

  }

  search() {

    this.ps.searchProduct(this.currentKeyword,this.currentPage,this.size).subscribe(data =>{
      this.produits = data ;
      this.pages  = new Array<number>(data["page"].totalPages);
    }, error => {
      console.log(error);
    })
  }
}
