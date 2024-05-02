import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  FirstQuestion:boolean = false;
  SecondQuestion:boolean = false;
  ThirdQuestion:boolean = false;
  FourthQuestion:boolean = false;

  Plus:boolean = true;

  OpenFirstQuestion(){
    this.Plus = false;
    this.FirstQuestion = true;
  }

  CloseFirstQuestion(){
    this.Plus = true;
    this.FirstQuestion = false;
  }
  OpenSecondQuestion(){
    this.Plus = false;
    this.SecondQuestion = true;
  }

  CloseSecondQuestion(){
    this.Plus = true;
    this.SecondQuestion = false;
  }

  OpenThirdQuestion(){
    this.Plus = false;
    this.ThirdQuestion = true;
  }

  CloseThirdQuestion(){
    this.Plus = true;
    this.ThirdQuestion = false;
  }

  OpenFourthQuestion(){
    this.Plus = false;
    this.FourthQuestion = true;
  }

  CloseFourthQuestion(){
    this.Plus = true;
    this.FourthQuestion = false;
  }
}
