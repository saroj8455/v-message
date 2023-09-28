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

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
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

  productDialog = false;
  selectProduct!:Product
  ratingStar:number = 4;
  events: EventItem[];

  constructor(private productService: ProductService) {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
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

  editProduct(product: Product) {
    console.log(product)
    this.selectProduct = product
    this.productDialog = true;
  }

}
