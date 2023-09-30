import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent {

  submitted: boolean = false;
  constructor(private router: Router) {
  }

  nextPage() {
      this.router.navigate(['delivery-fm']);
    }

}
