import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de débito', value: 'DEB'},
    {label: 'Cartão refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  delivery: number = 8;

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    return this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    return this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    return this.orderService.remove(item);
  }

}
