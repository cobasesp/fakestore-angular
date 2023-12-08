import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {

  constructor(private api:ApiService) { }

  @Output()
  onCheckBoxSelect: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  get Categories() {
    return this.api.getAllCategories();
  }

  public clickCheckBox(filter: string): void {
    this.onCheckBoxSelect.emit(filter);
  }

}
