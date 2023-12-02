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
    this._http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        this.products = data;
      });
    
    return this.products;
  }
}
