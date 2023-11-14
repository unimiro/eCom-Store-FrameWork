import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutSuccesComponent } from './checkout-succes/checkout-succes.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent},
  {path: 'succes', component: CheckoutSuccesComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
