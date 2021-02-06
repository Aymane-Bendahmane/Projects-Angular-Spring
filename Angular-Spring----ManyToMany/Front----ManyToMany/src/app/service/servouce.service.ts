import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServouceService {
host:string="http://localhost:9001/" ;
  constructor(private http: HttpClient) { }
  GetResources(link:string){
    return this.http.get(this.host+link);
  }

}
