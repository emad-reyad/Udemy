import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../_Models/User';
import { AccountService } from '../_Service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  @Output() CancelRegisteration=new EventEmitter();
  Modle:any={};
  RegUsers:User;
  constructor(private http:HttpClient,private accountService:AccountService) { }

  ngOnInit(): void {
    //this.GetUser();
  }

  Register(){
    this.accountService.Register(this.Modle).subscribe(response=>{
    console.log(response)
    },eror=>{
       {
      console.log(eror);  
      }
    })
  }
 
    //GetUser(){
    //  this.http.get('http://localhost:5001/api/GetAllCustomer').subscribe(users=>this.RegUsers=users);
   // }


Cancel(){
  this.CancelRegisteration.emit(false)
  console.log('Canceled'); 
}

}
