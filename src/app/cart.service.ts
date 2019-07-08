import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(product) {
    var index = this.items.findIndex(product);
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}