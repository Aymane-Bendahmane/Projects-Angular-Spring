import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../services/resources.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-display-bien',
  templateUrl: './display-bien.component.html',
  styleUrls: ['./display-bien.component.css']
})
export class DisplayBienComponent implements OnInit {

  biens:any;
  private timeStamp: any;
  constructor(public service:ResourcesService,
              private rt:Router) { }

  ngOnInit(): void {
    this.getBiens();
    this.timeStamp = Date.now();
  }

  getBiens(){
    this.service.getResource('biens/search/availableBien').subscribe( data=>{
      // @ts-ignore
      this.biens = data['_embedded'].biens ;
    },error => {
      console.log(error)
    })
  }

  viewBien(refference: any) {
    this.rt.navigateByUrl('infoBien/'+refference);
  }

  getTS() {
    return this.timeStamp;
  }

  onReservation(refference: any) {
    this.rt.navigateByUrl('reservation/'+refference);
  }
}
