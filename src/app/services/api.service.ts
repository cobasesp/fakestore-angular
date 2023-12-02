import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products: Product[] = [];

  constructor(private _http:HttpClient) { }

  getAllProducts(): Product[] {
    if (this.products.length > 0) return this.products;

    this.getAllProductsApiRequest('https://fakestoreapi.com/products')
    
    return this.products;
  }

  getAllProductsApiRequest(url: string):void {
    this._http.get<Product[]>(url)
    .subscribe(data => {
      this.products = data;
    });
  }
}
