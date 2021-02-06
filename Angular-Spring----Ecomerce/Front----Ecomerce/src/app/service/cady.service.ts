import {Injectable} from '@angular/core';
import {Caddy} from '../Model/Caddy';
import {Product} from '../Model/Produit';
import {ProductItem} from '../Model/Product.item';

@Injectable({
  providedIn: 'root'
})
export class CadyService {
  currentCaddyName: string = 'caddy1';
  public caddies: Map<string, Caddy> = new Map();

  constructor() {
    let storedcaddies = localStorage.getItem('caddies');
    if(storedcaddies)
    {
      console.log('json local  : ' + storedcaddies)

      this.caddies = new Map(JSON.parse(storedcaddies))




    }
    else {
      let caddy = new Caddy(this.currentCaddyName);
      this.caddies.set(this.currentCaddyName, caddy);
    }

  }

  public addProductToCAddy(product: Product) {
    let caddy = this.caddies.get(this.currentCaddyName);

    // @ts-ignore
    let productItem: ProductItem = caddy.items.get(product.id);
    if (productItem) {
      // @ts-ignore
      productItem.quantity += product.quantity;
    } else {
      productItem = new ProductItem();
      productItem.price = product.current_price;
      productItem.quantity = product.quantity;
      productItem.product = product;
      // @ts-ignore
      caddy.items.set(product.id, productItem);
      this.saveCaddies();
    }

  }

  public saveCaddies() {
    // @ts-ignore
    //console.log('here'+this.caddies.get(this.currentCaddyName).name);


    localStorage.setItem('caddies', JSON.stringify(Array.from(this.caddies)));

    //localStorage.setItem('caddies', JSON.stringify((this.caddies)));
  }

  public getCurrentCaddy() {
    return this.caddies.get(this.currentCaddyName);
  }

  // @ts-ignore
  getTotal(): number {
    let total = 0;
    // @ts-ignore
    let items: IterableIterator<ProductItem> = this.getCurrentCaddy().items.values();
    for (let pi of items) {
      // @ts-ignore
      total += pi.price * pi.quantity;
    }
    return total;
  }

}
