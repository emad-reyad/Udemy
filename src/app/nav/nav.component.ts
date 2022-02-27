import { Component, OnInit } from '@angular/core';
import { User } from '../_Models/User';
import { AccountService } from '../_Service/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService:AccountService) { 

  }
  LoginModel:any={};
  Logedin:boolean;
  ngOnInit(): void {
    this.setCurrentUser();
    this.CheckCurrentUser();
    
  }
 login(){
  this.accountService.Login(this.LoginModel).subscribe(Response=>{
    console.log(Response);
    this.Logedin=true;
    console.log(Response);
    
  },error =>{
    console.log(error); 
  })
   console.log(this.LoginModel);
 }
 Logout(){
   this.Logedin=false;
 }

CheckCurrentUser(){
  
  this.accountService.currentUser$.subscribe(user=>{
    this.Logedin=!!user;
  },  error=>{
    console.log(error);    
  });
}

setCurrentUser(){
  const user:User =JSON.parse(localStorage.getItem('user'));
  this.accountService.SetCurrentUser(user);
}
}
