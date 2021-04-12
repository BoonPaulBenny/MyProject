import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  myArray:string[] = ['boon','paul','benny']

  condition:boolean = true

  data:string = "my name is boon"

  myEvent(event:any){
    console.log("button clicked",event)
  }

  getData(event:any){
    console.log("input envnt triggered..",event)
    let data = event.target.value
    console.log(data)
  }
}
