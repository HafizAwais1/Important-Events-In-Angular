import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName='Blogger'; 

  myEvent(evt: any)
  {
    console.warn(evt)
  }

}
