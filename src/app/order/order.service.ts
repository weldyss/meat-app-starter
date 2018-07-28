import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ShoppingCartService } from "../shopping-cart/shopping-cart.service";
import { CartItem } from "../shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

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
    let headers = new HttpHeaders()
    
    return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers}).pipe(map(order => order.id))
  }

  clear() {
    this.cartService.clear()
  }
}