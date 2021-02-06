import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  public host:String="http://localhost:9000" ;
  constructor(private http:HttpClient) {

  }

  postProduit(data) {
    return this.http.post(this.host+"/produits",data);
  }

  GetC() {
    return this.http.get(this.host+"/categories");
  }

  getPr(size:number,page:number) {
    return this.http.get(this.host+"/produits?projection=p2"+"&page="+page+"&size="+size);
  }

  delete(produit) {
    return this.http.delete(produit._links.self.href);
  }

  consulterProduit(p) {
    return this.http.get(p);
  }

  updatePrd(url,value) {
    console.log('url : '+url + " -  obj : " +value.name + " - "+ value.prix + " - "+ value.categorie );

    return this.http.patch(url,value);
  }

  searchProduct(value,page,size){
    return this.http.get(this.host+"/produits/search/findByName?"+"page="+page+"&size="+size+"&projection=p2&mc="+value);
  }
}
