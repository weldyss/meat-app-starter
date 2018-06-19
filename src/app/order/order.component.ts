import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { importType } from '@angular/compiler/src/output/output_ast';

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

  constructor(private orderService: OrderService, private router: Router) { }

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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item:CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    )
    this.orderService.checkOrder(order).subscribe(
      (orderId: string) => {
        console.log('Compra concluida', orderId)
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
      }
    )
    console.log(order);
  }

}
