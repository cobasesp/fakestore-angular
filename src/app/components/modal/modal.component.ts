import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  public title: string = '';
  public modalBody: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  closeModal(): void {
    document.querySelector('#modal')?.classList.remove('is-active')
  }

}
