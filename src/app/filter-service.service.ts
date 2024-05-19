import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private products:string[] = ["aaa","bba","bcd"];

  constructor() { }

  getData()
  {
    return this.products;
  }

  addProduct(product: string): void {
    this.products.push(product);
  }

  filterProducts(filterText: string): string[] {
    return this.products.filter(product =>
      product.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
