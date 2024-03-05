import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.less']
})
export class MiniCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get cartItems() {
    return this.cartService.getProductsFromCart()
  }

  openMiniCart(): void {
    document.querySelector('#mini-cart')?.classList.add('open');
  }

  closeMiniCart(): void {
    document.querySelector('#mini-cart')?.classList.remove('open');
  }

  emptyCart(): void {
    this.cartService.emptyCart();
  }

  removeFromCart(index: number): void {
    this.cartService.deleteFromCart(index);
  }

}
