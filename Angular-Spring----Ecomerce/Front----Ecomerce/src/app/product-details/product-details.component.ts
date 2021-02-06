import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../service/catalogue.service';
import {Product} from '../Model/Produit';
import {AuthenticationService} from '../service/authentication.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {errorObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public currentProduct: Product | undefined;

  public selectedFiles: any;
  public editphoto: any;
  public progress:any;
  public currentFileUpload:any;
  public timestamp: any;
  public quantityForm = new FormGroup({
    quantity : new FormControl()
  })

  public mode: boolean=false;
  constructor(private rt:ActivatedRoute,private service:CatalogueService,public ps:CatalogueService,public auth:AuthenticationService) { }

  ngOnInit(): void {
    let url = atob(this.rt.snapshot.params.url);

    this.service.getProduct(url).subscribe(data =>{
      this.currentProduct = data
      console.log(this.currentProduct);
    },error => {
      console.log(error)
    });


  }


  onEdite(pr: any) {
    this.editphoto = true;
  }

  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    // @ts-ignore
    this.ps.uploadPhotos(this.currentFileUpload, this.currentProduct.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // @ts-ignore
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        alert('Image Uploaded');
        //console.log(this.route.snapshot.params.p1 + '/' + this.route.snapshot.params.p2);
        this.timestamp = Date.now();
      }
    }, error => {
      alert('not Uploaded');
    });
  }
  getTS(){
    return this.timestamp;
  }

  onSubmit() {

  }

  changeMode() {

    this.mode = true ;

  }

  onModifyProduct(value:Product) {
    console.log(value)
    if(this.currentProduct){
      this.service.updateProduct(value,this.currentProduct.id).subscribe(data=>{
        console.log(data)
      },error => {
        console.log(error)
      })
    }


  }
}
