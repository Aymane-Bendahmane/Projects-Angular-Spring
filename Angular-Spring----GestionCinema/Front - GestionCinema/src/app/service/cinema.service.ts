import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host:String="http://localhost:9000" ;
  constructor(private http:HttpClient) { }
  public getVilles(){
    return this.http.get(this.host+"/villes");
  }

  getCinemas(v) {
    return this.http.get(v._links.cinemas.href);
  }

  getSalle(c) {
    return this.http.get(c._links.salles.href);
  }

  getProjections(salle) {
    let url = salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");
  }

  getTickets(p) {
    console.log("service is launching");
    let url = p._links.tickets.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p2");

  }

  payerTicket(form) {
    return this.http.post(this.host + '/payerTickets',form) ;
  }
}
