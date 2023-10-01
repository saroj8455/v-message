import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OdTableComponent} from "./components/od-table/od-table.component";
import {ErrorCompComponent} from "./components/error-comp/error-comp.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {PickupComponent} from "./components/form/pickup/pickup.component";
import {DeliveryComponent} from "./components/form/delivery/delivery.component";
import { DemoCompComponent } from './components/demo-comp/demo-comp.component';
import { LoginComponent } from './components/login/login.component';
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes: Routes = [
  {path:"home",component:HomeComponent,
  children:[
    {path:"pickup-fm",component:PickupComponent},
    {path:"delivery-fm",component:DeliveryComponent},
  ]
},
{path:"demo-comp",component:DemoCompComponent
},
{path:"od-table",component:OdTableComponent},
{path:"create-od",component:CreateOrderComponent},
{path:"sign-in",component:LoginComponent},
// {path:"pickup-fm",component:PickupComponent},
// {path:"delivery-fm",component:DeliveryComponent},
{path:"",redirectTo:"home", pathMatch:"full"},
  {path:"**",component:ErrorCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
