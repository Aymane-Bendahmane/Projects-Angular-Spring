import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourcesService} from '../services/resources.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  currentBien: any;
  total: number = 0;
  prix_taxes: number = 0;
  prix_syndic: number = 0;
  prix: number = 0;

  currentUser: any;
  currrentAffectation: any;
  private bien: any;

  constructor(private rt: ActivatedRoute,
              private service: ResourcesService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getBien();


  }

  getBien() {
    this.service.getResource('biens/' + this.rt.snapshot.params.id).subscribe(data => {
      this.currentBien = data;
      this.prix_taxes = this.currentBien.prix_taxes;
      this.prix_syndic = this.currentBien.prix_syndic;
      this.prix = this.currentBien.prix;
      this.calculeTotal();
    }, error => {
      console.log(error);
    });
  }

  calculeTotal() {
    this.total = this.prix_taxes + this.prix_syndic + this.prix;
    console.log('Total = ' + this.total);
  }

  onSubmit(value: any) {

    this.service.saveUser(value).subscribe(data => {

      this.currentUser = data;

    }, error => {
      console.log(error);
    });
  }

  onSubmitAffectation(value: any) {
    value.locataire = this.currentUser._links.self.href ;
    value.bien = this.currentBien._links.self.href ;
    console.log(value)
    this.service.saveAffectation(value).subscribe( data=> {
      this.editeBien()


      // @ts-ignore
      this.router.navigateByUrl('contrat/'+btoa(data["_links"].self.href));
    },error => {
      console.warn(error)
    })
  }

  editeBien()
  {
    let link = this.currentBien._links.self.href ;

     this.bien={
       "disponibilite" :false
     };
     console.log(this.bien)
    this.service.editBien(link, this.bien) .subscribe( data=>{
      console.log('edited bien : ' +data)
    },error => {
      console.log(error)
    });
  }
}
