import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.less']
})
export class ProductBoxComponent implements OnInit {

  @Input()
  public product!: Product;

  constructor(private loginService: LoginService, private cartService: CartService) { }

  ngOnInit(): void {
  }

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
    alert("product purchased successfuly!")
  }

}
