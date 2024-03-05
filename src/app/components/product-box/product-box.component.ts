import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.less']
})
export class ProductBoxComponent {

  @Input()
  public product!: Product;

  constructor(private loginService: LoginService, private cartService: CartService) { }

  public reduceTitle(title: string): string {
    if(title.length > 25) {
      title = `${title.slice(0, 25)}...`;
    }

    return title;
  }

  public addToCart(): void {
    // Check if user is loged
    if(!this.loginService.isLogged()) {
      alert("You need to be loged in to do this action!")
      return;
    }

    this.cartService.addProductToCart(this.product, 1)
    document.querySelector('#modal')?.classList.add('is-active')
  }

}
