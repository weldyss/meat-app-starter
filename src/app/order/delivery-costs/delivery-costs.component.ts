import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styles: []
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery:number = 8
  @Input() itemsValue: number = 0

  constructor() { }

  ngOnInit() {
  }

  total() : number {
    return this.delivery + this.itemsValue;
  }

}
