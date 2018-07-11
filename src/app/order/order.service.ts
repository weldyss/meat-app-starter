import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShoppingCartService } from "../shopping-cart/shopping-cart.service";
import { CartItem } from "../shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/operator/map';

import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient ) {}

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }
  
  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  itemsValue(): number {
    return this.cartService.total()
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order).map(order => order.id)
  }

  clear() {
    this.cartService.clear()
  }
}