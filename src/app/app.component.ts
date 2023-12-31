import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {HttpClient} from "@angular/common/http";


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent  implements OnInit{
  title = 'v-message';
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
    this.initNavbarMenu()
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

  initNavbarMenu() {
    this.items_menu = [
      {
        label:"Home",
        icon:"pi pi-fw pi-home",
        routerLink:"/home"
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Sign In',
            icon: 'pi pi-fw pi-lock',
            routerLink:"/sign-in"
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Table',
        icon: 'pi pi-fw pi-table',
        routerLink:"/od-table"
      },
      {
        label: 'Demo',
        icon: 'pi pi-fw pi-box',
        routerLink:"/demo-comp"
      },
      {
        label: 'Order',
        icon: 'pi pi-fw pi-pencil',
        routerLink:"/create-od"
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}

