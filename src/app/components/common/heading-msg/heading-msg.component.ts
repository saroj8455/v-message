import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-msg',
  templateUrl: './heading-msg.component.html',
  styleUrls: ['./heading-msg.component.css']
})
export class HeadingMsgComponent implements OnInit {


@Input() headingMessage:string="Heading Message"

constructor(){

}

  ngOnInit(): void {

  }
}
