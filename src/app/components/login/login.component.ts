import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


export interface IUserAuth {
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userauth :IUserAuth ={
    username:"",
    password:""
   }

  loadingText="Loading......"
  headingMessage = "Welcome to Shipping INDIA"
  inProgress = false;
  visible = false;
  constructor(private messageService: MessageService) {}

  shippingAuth() {
    if(this.userauth.username.trim().toString().length <= 0 || this.userauth.password.trim().length <= 0 ) {
      this.visible = true;
      return;
    }
    this.inProgress = true
    if(this.userauth.username.trim().toString() === "a") {

      setTimeout(()=>{
        this.inProgress = false
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Login Successful : ${this.userauth.username} ` });
      },4000)
    } else {
      this.inProgress = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `Invalid Credentials: ${this.userauth.username} ` });
    }
  }

  resetAuthForm() {
    this.userauth.username = ""
    this.userauth.password =""
  }

}
