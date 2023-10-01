import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OdTableComponent} from "./components/od-table/od-table.component";
import {ErrorCompComponent} from "./components/error-comp/error-comp.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {PickupComponent} from "./components/form/pickup/pickup.component";
import {DeliveryComponent} from "./components/form/delivery/delivery.component";
import { DemoCompComponent } from './components/demo-comp/demo-comp.component';
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"demo-comp",component:DemoCompComponent,
  children:[
    {path:"pickup-fm",component:PickupComponent},
    {path:"delivery-fm",component:DeliveryComponent},
  ]
},
  {path:"od-table",component:OdTableComponent},
  {path:"create-od",component:CreateOrderComponent},
  // {path:"pickup-fm",component:PickupComponent},
  // {path:"delivery-fm",component:DeliveryComponent},
  {path:"**",component:ErrorCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
