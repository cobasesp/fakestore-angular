import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  /**
   * Receive a product and quantity and create or update the cart
   * 
   * @param product 
   * @param quantity 
   * @returns 
   */
  addProductToCart(product: Product, quantity: number): void {
    let currentCart: Cart[] = [];

    let newItem = {
      product,
      'quantity': quantity
    }

    // Check if exist a cart in local storage
    // Create new cart with the item
    if(localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', JSON.stringify([newItem]))
      return;
    }

    // Update existing cart
    currentCart = JSON.parse(localStorage.getItem('cart')!);
    currentCart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  /**
   * Return all products from the cart
   * 
   * @returns 
   */
  getProductsFromCart(): Cart[] {
    let currentCart = [];
    if(localStorage.getItem('cart') != null) {
      currentCart = JSON.parse(localStorage.getItem('cart')!);
    }

    return currentCart;
  }

  /**
   * Clear the cart by removing the local storage item
   */
  emptyCart(): void {
    if(localStorage.getItem('cart') != null) {
      localStorage.removeItem('cart')
    }
  }

  /**
   * Delete an item from the cart by index
   * 
   * @param index 
   */
  deleteFromCart(index: number): void {
    let currentCart = this.getProductsFromCart();
    currentCart = currentCart.filter((item, i) => {
      return index != i;
    })

    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }
}
