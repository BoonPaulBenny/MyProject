import { Ishapes } from './ishapes';
import { Component } from '@angular/core';
import {faAmbulance, faAward} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  amb:any=faAmbulance
  award:any = faAward

  myColor:string ="blue"

  Condition:boolean=true

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

  setColor(event:any){
    this.myColor=event.target.value
  }

  myStyle:any = {'color':'green','font-size':'30px'}
}

// Canvas 👇



