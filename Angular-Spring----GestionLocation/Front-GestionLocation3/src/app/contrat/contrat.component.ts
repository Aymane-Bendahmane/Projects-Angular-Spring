import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourcesService} from '../services/resources.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {HttpEventType, HttpResponse} from '@angular/common/http';







@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  currentAffectation: any;
  currentBien:any
  currentLocataire:any;
  public selectedFiles: any;
  public progress: any;
  currentFileUpload:any

  // @ts-ignore
  public generated: boolean=false;

  constructor(private act: ActivatedRoute,
              public service: ResourcesService
  ) {
  }

  ngOnInit(): void {
    this.getAffectation();
  }
  openPDF():void
{
  let element = document.getElementById('contrat')

  if (element) {
    html2canvas(element).then((canvas) => {
      console.log(canvas);

      let imageData = canvas.toDataURL('image.png');
       let doc = new jsPDF();
       //let imgHeight = canvas.height * 208 / canvas.width ;
       doc.addImage(imageData,0,0,200,600)

      doc.save('contrat.pdf')
    });
  }
}

  getAffectation() {
    this.service.getAffectation(atob(this.act.snapshot.params.id)+'?projection=p2').subscribe(data => {
      this.currentAffectation = data;
      this.currentBien = this.currentAffectation.bien;
      this.currentLocataire = this.currentAffectation.locataire
    }, error => {
      console.log(error);
    });
  }


  onGenerated() {
    this.generated = true;
  }

  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  onuUploadPhoto() {

    this.uploadPhoto();
  }
  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.uploadPhoto(this.currentFileUpload, this.currentAffectation.id_aff,'uploadBail/').subscribe(event => { console.log(this.currentAffectation.id)
      if (event.type === HttpEventType.UploadProgress) {
        // @ts-ignore
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('File Uploaded');
      }
    },error => {
      alert(error+'not Uploaded');
    });
  }
}
