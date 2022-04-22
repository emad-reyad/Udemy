import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
RegisterMode=false;
Users:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetUser();
  }

  GetUser(){
    this.http.get('http://localhost:5001/api/GetAllCustomer').subscribe(users=>this.Users=users);
  }
  RegisterToggle(){
    this.RegisterMode=!this.RegisterMode;
  }
  CancelRegistrationMode(event:boolean){
    this.RegisterMode=false;
  }
}
