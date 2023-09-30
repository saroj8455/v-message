import { Component, OnInit } from '@angular/core';

export interface ICalcShippingCost {
  pickupPincode: string;
  deliveryPincode: string;
  orderValue: string;

  deliveryType?: string;
  deliveryMode?: string;

  pWeight: string;
  pLength: string;
  pBreadth: string;
  pHeight: string;
}

interface IDropdownItem {
  name: string;
  code: string;
}

@Component({
  selector: 'app-calc-shipping',
  templateUrl: './calc-shipping.component.html',
  styleUrls: ['./calc-shipping.component.css'],
})
export class CalcShippingComponent implements OnInit {
  calculateShipping: ICalcShippingCost = {
    pickupPincode: '560123',
    orderValue: '49', //in Rs  // in Kgs
    deliveryPincode: '560001',
    pBreadth: '89',
    pHeight: '80',
    pWeight: '78',
    pLength: '78',
  };

  deliveryTypes!: IDropdownItem[];
  deliveryModes!: IDropdownItem[];

  constructor() {
    this.initDropdownItems();
  }

  ngOnInit(): void {}

  calculateItemCost(calculateShipping:ICalcShippingCost) {
    console.log(calculateShipping);

  }

  initDropdownItems() {
    this.deliveryTypes = [
      {
        name: 'COD',
        code: 'COD',
      },
      {
        name: 'Prepaid',
        code: 'Prepaid',
      },
    ];
    this.deliveryModes = [
      {
        name: 'Standard',
        code: 'Standard',
      },
      {
        name: 'Express',
        code: 'Express',
      },
    ];
  }
}
