import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}


@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.css']
})
export class ProductShowcaseComponent implements OnInit {

  items_menu: MenuItem[] | undefined;
  products:IProduct[]=[]
  priceRange:number = 10;
  visible: boolean = false;

  items: MenuItem[] = [
    {
      icon: 'pi pi-pencil',
      command: () => {
        this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
    },
    {
      icon: 'pi pi-refresh',
      command: () => {
        this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
    },
    {
      icon: 'pi pi-trash',
      command: () => {
        this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
    },
    {
      icon: 'pi pi-upload',
      routerLink: ['/fileupload']
    },
    {
      icon: 'pi pi-external-link',
      target: '_blank',
      url: 'http://angular.io'
    }
  ];
  constructor(private http:HttpClient,private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getProducts().subscribe((resp)=>{
      this.products = resp
    })
  }

  getProducts() {
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products");
  }

  showDialog() {
    this.visible = true;
  }
}
