import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-steper-form',
  templateUrl: './steper-form.component.html',
  styleUrls: ['./steper-form.component.css']
})
export class SteperFormComponent {

  items: MenuItem[];

  subscription!: Subscription;

  constructor(public messageService: MessageService) {
    this.items = [
      {
        label: 'Pickup',
        routerLink: 'pickup-fm'
      },
      {
        label: 'Delivery',
        routerLink: 'delivery-fm'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];
  }

  ngOnInit() {


    // this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) => {
    //   this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
    // });
  }

}
