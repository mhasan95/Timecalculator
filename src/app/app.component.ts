import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time-calculator';
  startdate = new Date();
  enddate = new Date();
  name = 'Hi';
  TotalDays='';
  calculate(){
    this.TotalDays= '';
    console.log('clicked');
    let difference = this.enddate.getTime() - this.startdate.getTime();
    let Days = Math.ceil(difference / (1000 * 3600 * 24));
    console.log(Days);
   this.TotalDays = this.TotalDays + Days;
  } 
}
