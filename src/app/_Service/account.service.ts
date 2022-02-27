import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import{map} from 'rxjs/operators';
import { User } from '../_Models/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly BaseUrl='https://localhost:5000/api/'; 
  private currentUserSource=new ReplaySubject<User>(1);
  currentUser$=this.currentUserSource.asObservable();
  constructor(private http:HttpClient ) { }
  Login(model:any){
    return this.http.post(this.BaseUrl+'Account/Login',model).pipe( 
      map((reponse:User)=>{
        const user=reponse;
        if(user)
          localStorage.setItem('user',JSON.stringify(user));
          this.SetCurrentUser(user);
      })
    );
  }

  SetCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  Logout(){
    localStorage.removeItem('User');
    this.currentUserSource.next(null);
  } 
}
