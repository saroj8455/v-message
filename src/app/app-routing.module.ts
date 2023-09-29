import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OdTableComponent} from "./components/od-table/od-table.component";
import {ErrorCompComponent} from "./components/error-comp/error-comp.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"od-table",component:OdTableComponent},
  {path:"create-od",component:CreateOrderComponent},
  {path:"**",component:ErrorCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
