import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() UsersComeFromHome: any;
  Modle:any={};

  constructor() { }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.Modle);
  }
Cancel(){
  console.log('Canceled');
}

}
