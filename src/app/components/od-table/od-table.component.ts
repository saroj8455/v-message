import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/productservice";

interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-od-table',
  templateUrl: './od-table.component.html',
  styleUrls: ['./od-table.component.css']
})
export class OdTableComponent implements OnInit{
  tableData: People[] = [];
  cols: any[] = [];

  // display product list
  products!: Product[];
  colsp!: Column[];

  _selectedColumns!: Column[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    // table 2
    // this.productService.getProductsMini().then((data) => {
    //   this.products = data;
    // });
    this.products = this.productService.getProductsData()

    this.colsp = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'description', header: 'Description' },
      { field: 'inventoryStatus', header: 'InventoryStatus' },
      { field: 'price', header: 'Price' }
    ];

    this._selectedColumns = this.colsp;

    // table 1
    this.cols = [
      { field: 'firstname', header: 'First Name' },
      { field: 'lastname', header: 'Last Name' },
      { field: 'age', header: 'Age' },
    ];
    this.tableData = [
      {
        firstname: 'David',
        lastname: 'ace',
        age: '40',
      },
      {
        firstname: 'AJne',
        lastname: 'west',
        age: '40',
      },
      {
        firstname: 'Mak',
        lastname: 'Lame',
        age: '40',
      },
      {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
      },
      {
        firstname: 'Kane',
        lastname: 'James',
        age: '40',
      },
    ];
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }

}
