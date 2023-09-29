import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {

  orderNumber!: string;
  name!: string;
  addressLine1!:string;
  addressLine2!:string;
  landMark!:string;
  pincode!:string;
  state!:string;
  city!:string;
  mobileNumber:string  | undefined;
  value2: string | undefined;

  customerName: string | undefined;
  dLandmark: string | undefined;



}
