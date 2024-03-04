import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CataloguePage implements OnInit {

  constructor(private api:ApiService) { }

  filterList: string[] = [];

  ngOnInit(): void {}

  get Products() {
    return this.api.getAllProducts();
  }

  onCheckBoxSelect(filter: string): void {
    let index = this.filterList.indexOf(filter);
    if(index > -1) {
      this.filterList.splice(index, 1);
    } else {
      this.filterList.push(filter);
    }
  }

}
