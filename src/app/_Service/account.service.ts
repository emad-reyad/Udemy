import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly BaseUrl='https://localhost:5000/api/'; 
  constructor(private http:HttpClient ) { }
  Login(model:any){
    return this.http.post(this.BaseUrl+'Account/Login',model);
  }
}
