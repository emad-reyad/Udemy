import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_Models/User';
import { AccountService } from '../_Service/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService:AccountService) { 

  }
  LoginModel:any={}; 
  ngOnInit(): void { 
    this.setCurrentUser(); 
  }

 login(){
   this.accountService.Login(this.LoginModel).subscribe( response=>{

   },error=>{

   })
 }
 Logout(){
  this.accountService.Logout();
 }

CheckCurrentUser(){ 
  this.accountService.currentUser$.subscribe(user=>{ 
     
  },  error=>{
    console.log(error);    
  });
}

setCurrentUser(){
  const user:User =JSON.parse(localStorage.getItem('user'));
  this.accountService.SetCurrentUser(user);
}
}
