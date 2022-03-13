import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_Models/User';
import { AccountService } from './_Service/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
  }

  ngOnInit(): void {
    
  }
  title = 'The Udemy App ';

}


