export interface Product {
  quantity: number;
  id: number;
  name: string;
  description: string;
  current_price: number;
  promotion: boolean;
  selected: boolean;
  available: boolean;
  photoName: string;
  _links: {
    self: {
      href: string
    },
    product: {
      href: string
    },
    category: {
      'href': string
    }
  }
}
