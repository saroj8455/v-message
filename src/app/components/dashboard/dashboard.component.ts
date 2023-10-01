import { Component } from '@angular/core';

export interface IDashCard {
  index:number;
  header:string;
  image?:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  cards: IDashCard[]= [
    {index:1,header:"Wallet Balance", image:"../../../assets/walleta.0d5a8214.gif"},
    {index:2,header:"In Transist",image:"../../../assets/delivery.854b0d4f.gif"},
    {index:3,header:"COD Orders", image:"../../../assets/cash.ffabf577.gif"},
    {index:4,header:"Prepaid Orders",image:"../../../assets/prepaid.ca8e7297.gif"},
    {index:5,header:"Wallet Balance", image:"../../../assets/walleta.0d5a8214.gif"},
    {index:6,header:"In Transist",image:"../../../assets/delivery.854b0d4f.gif"},
    {index:7,header:"COD Orders", image:"../../../assets/cash.ffabf577.gif"},
    {index:8,header:"Prepaid Orders",image:"../../../assets/prepaid.ca8e7297.gif"},
    {index:9,header:"Prepaid Orders",image:"../../../assets/prepaid.ca8e7297.gif"},
    {index:10,header:"Prepaid Orders",image:"../../../assets/prepaid.ca8e7297.gif"},
  ];

}
