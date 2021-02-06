import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  public host:string='http://localhost:9001/'
  constructor(private http:HttpClient) { }

  getResource(link:string){
    return this.http.get(this.host+link);
  }

  uploadPhoto(file: any,id:any,link:any) : Observable<HttpEvent<{}>>{
    let formdata = new FormData();
    formdata.append('file',file);
    const  req = new HttpRequest('POST',this.host +link+id,formdata,{
      reportProgress:true,
      responseType:'text'
    });
    return this.http.request(req) ;
  }
  saveUser(value:any)
  {
    return this.http.post(this.host + 'locataires',value);
  }
  saveAffectation(value:any)
  {
    return this.http.post(this.host + 'affectations',value)
  }

  editBien(link:any,value:any)
  {
     return this.http.patch(link,value);
  }
  getAffectation(link:any)
  {
    return this.http.get(link);
  }

}
