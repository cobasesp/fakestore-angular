import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  rate: number = 0;

  @Input()
  count: number = 0;

  ngOnInit(): void {
    this.rate = Math.round(this.rate);
  }

  public getFillByRating(max: number): string {
    let fill = "fill:#ED8A19;";
    if (this.rate > max) return fill;
    return "fill: #ccc;";
  }
}
