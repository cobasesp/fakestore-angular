import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

// Interfaces
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  constructor(private api:ApiService) { }

  public products: Product[] = [];

  ngOnInit(): void {
    
  }

  get Products() {
    return this.api.getAllProducts();
  }

}
