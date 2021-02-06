import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../service/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  public villes;
  public cinemas;
  public salles;
  public currentCinema;
  public currentVille;
  public tickets;
  public currentProjection;
  private listTicket;
  private sel;
  constructor(public cinemaservice: CinemaService) {}

  ngOnInit(): void {

    this.cinemaservice.getVilles()
      .subscribe(data => {
        this.villes = data;
      }, error => {
      console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  onGetCinema(v) {
    this.currentVille = v;
    this.salles = undefined;
    this.cinemaservice.getCinemas(v)
      .subscribe(data => {
        this.cinemas = data;
      }, error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  onGetSalle(c) {
    this.currentCinema = c;
    this.cinemaservice.getSalle(c)
      .subscribe(data => {
        this.salles = data;
        this.salles._embedded.salles.forEach(salle => {
          this.cinemaservice.getProjections(salle)
            // tslint:disable-next-line:no-shadowed-variable
            .subscribe( data => {
              salle.projection = data;
            }, error => {
              console.log(error);
            });
        });
      }, error => {
        console.log(error);
      });
  }

  onGetTickets(p) {
    this.currentProjection = p;
    this.cinemaservice.getTickets(p)
      .subscribe(data => {
        this.tickets = data;
        this.listTicket = [];
      });
  }

 onSelectTicket(t) {
    if (!t.sel){
      t.sel = true;
      this.listTicket.push(t);
    }else {
      t.sel = false;
      this.listTicket.splice(this.listTicket.indexOf(t), 1);
    }
    console.log(this.listTicket);
  }

  getclass(t) {
    let str = 'btn ';

    if ( t.reserve ) {
      str += 'btn-danger' ;
    }
    else if (t.sel) {
      str += 'btn-warning' ;
 }
    else {
      str += 'btn-success' ;

 }

    return str + ' m-1';
  }

  onPayTickets(form) {


  const tickets = [];
  this.listTicket.forEach( t => {
     tickets.push(t.id) ;
   });
  form.tickets = tickets ; console.log(form);

  this.cinemaservice.payerTicket(form)
    .subscribe (data => {
        alert('Reserved ');
        this.onGetTickets(this.currentProjection);
    }, error => {
      console.log(error);
    });

  }
}
