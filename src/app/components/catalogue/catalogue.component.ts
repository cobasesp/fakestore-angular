import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {}

  get Products() {
    return this.api.getAllProducts();
  }

}
