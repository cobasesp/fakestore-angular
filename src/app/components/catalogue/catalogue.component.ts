import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  constructor(private api:ApiService) { }

  filterList: string[] = [];

  ngOnInit(): void {}

  get Products() {
    return this.api.getAllProducts();
  }

  public reduceTitle(title: string): string {
    if(title.length > 25) {
      title = `${title.slice(0, 25)}...`;
    }

    return title;
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
