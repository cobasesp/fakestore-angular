import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.less']
})
export class ProductBoxComponent implements OnInit {

  @Input()
  public product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  public reduceTitle(title: string): string {
    if(title.length > 25) {
      title = `${title.slice(0, 25)}...`;
    }

    return title;
  }

}
