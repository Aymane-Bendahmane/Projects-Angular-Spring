import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:String='http://localhost:8080' ;
  constructor(private http:HttpClient) { }

  public getResources(url:any ){
    return this.http.get(this.host + url );
  }
  public getProduct(url:any ):Observable<Product>{
    return this.http.get<Product>( url );
  }
  public updateProduct(product:Product,id:any){
    return this.http.patch(this.host+'/products/'+id,product);
}
  uploadPhotos(file: any,id:any) : Observable<HttpEvent<{}>>{
    let formdata = new FormData();
    formdata.append('file',file);
    const  req = new HttpRequest('POST',this.host +'/uploadPhoto/'+id,formdata,{
      reportProgress:true,
        responseType:'text'
    });
    return this.http.request(req) ;
  }
}
