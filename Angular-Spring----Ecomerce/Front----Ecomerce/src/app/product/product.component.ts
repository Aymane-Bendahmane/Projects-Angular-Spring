import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../service/catalogue.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {AuthenticationService} from '../service/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../Model/Produit';
import {CadyService} from '../service/cady.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public Products: any;
  public editphoto: boolean = false;
  public currentProduct: any;
  public selectedFiles: any;
  public progress: number = 0;
  public currentFileUpload: any;
  public title: String = '';
  public timestamp:number=0;
  quantityForm = new FormGroup({
    quantity : new FormControl()
  })
  constructor(public caddyService:CadyService,public ps: CatalogueService, private  route: ActivatedRoute, private rt: Router,public auth:AuthenticationService) {

  }

  ngOnInit(): void {

    this.route.params.subscribe(paras => {

      let p1 = paras.p1;

      if (p1 == 1) {
        this.title = 'Selection';
        this.getProduct('/products/search/selectedProducts');
      } else if (p1 == 2) {
        this.title = 'Produit de Categorie';
        let p2 = paras.p2;
        this.getProduct('/categories/' + p2 + '/products');

      } else if (p1 == 3) {
        this.title = 'Promotion 🔥🔥🔥';
        this.getProduct('/products/search/promotion');
      } else if (p1 == 4) {
        this.title = 'Disponible 👏👏👏';
        this.getProduct('/products/search/disponible');
      }
    });


  }

  public getProduct(url: String) {
    this.ps.getResources(url).subscribe(data => {
      this.Products = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  onEdite(pr: any) {
    this.editphoto = true;
    this.currentProduct = pr;
  }

  onSelectedFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
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

  onSubmit(product:Product) {
    this.caddyService.addProductToCAddy(product);
  }

  onGetDetails(pr:any) {
    let url = btoa(pr._links.self.href);
    this.rt.navigateByUrl('details/'+url);
  }
}
