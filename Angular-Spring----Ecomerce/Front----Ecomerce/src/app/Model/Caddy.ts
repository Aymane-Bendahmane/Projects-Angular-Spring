import {ProductItem} from './Product.item'
import {Client} from './Client';
export class Caddy{
  public name:string='';
  public items:Map<number,ProductItem> = new Map();
  public client:Client | undefined ;

  constructor( name:string) {
    this.name = name;
  }
}
