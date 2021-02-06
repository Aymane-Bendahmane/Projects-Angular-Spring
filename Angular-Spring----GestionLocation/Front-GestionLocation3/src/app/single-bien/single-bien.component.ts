import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourcesService} from '../services/resources.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-single-bien',
  templateUrl: './single-bien.component.html',
  styleUrls: ['./single-bien.component.css']
})
export class SingleBienComponent implements OnInit {
  bien:any;
  private selectedFiles: any;
  private progress: any;
  currentFileUpload:any
  private timestamp: any;
  private currentBien: any;
  constructor(private rt:ActivatedRoute,private route:Router,public service:ResourcesService) { }

  ngOnInit(): void {
    console.log(this.rt.snapshot.params.id)
    this.getBien('biens/'+this.rt.snapshot.params.id)
  }

  getBien(bien:string)
  {
    this.service.getResource(bien).subscribe(data=>{
      this.bien = data;
    },error => {
      console.log(error)
    })
  }
  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  onuUploadPhoto(bien: any) {
    this.currentBien = bien;
    this.uploadPhoto();
  }
  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.uploadPhoto(this.currentFileUpload, this.currentBien.refference,'uploadPhoto/').subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // @ts-ignore
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('Image Uploaded');
        //console.log(this.route.snapshot.params.p1 + '/' + this.route.snapshot.params.p2);
        this.timestamp = Date.now();
      }
    },error => {
      alert(error+'not Uploaded');
    });
  }


  getTS() {
    return this.timestamp;
  }
}
