import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit{

  classes!: any[];

  vagons!: any[];

  seats!: any[];

  seatInformation: any;

  constructor(private router: Router,private _location: Location) {
    this.classes = [
      {name: 'First Class', code: 'A', factor: 1},
      {name: 'Second Class', code: 'B', factor: 2},
      {name: 'Third Class', code: 'C', factor: 3}
    ];
  }



  ngOnInit() {

  }


    prevPage() {
      // this.router.navigate(['pickup-frm']);
      this._location.back();
  }

  nextPage() {
    this.router.navigate(['home']);
  }
}
