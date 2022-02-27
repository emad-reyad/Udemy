import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient){
  }

  ngOnInit(): void {
    this.GetUsers();
  }
  title = 'The Udemy App ';
  Users:any;

  GetUsers(){
    this.http.get('https://localhost:5000/api/Customer/GetAllCustomers').subscribe(
    (response)=>{
      this.Users=response
    },
    (error)=>{
      console.log(error.message); 
    });
  }
   
}


