import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-succes',
  templateUrl: './checkout-succes.component.html',
  styleUrls: ['./checkout-succes.component.scss']
})
export class CheckoutSuccesComponent {
  order?: Order;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.order = navigation?.extras?.state as Order
  }
}
