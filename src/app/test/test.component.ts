import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service';
import { from, fromEvent, interval, of } from 'rxjs';
import { catchError, filter, map, retry, scan, switchMap, take, throttleTime } from 'rxjs/operators'; 
import {fromFetch} from 'rxjs/fetch'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private obj:DateService) {
    console.log("Test Component instantiated",obj.getTime_Date())
   }

  ngOnInit(): void {

    //RxJs

    // fromEvent(document,"click").subscribe((data)=>{
    //   console.log("clicked..",data)
    // })

    //----------------------------------------------------------------
    
    // fromEvent(document, 'click')
    // .pipe(
    //   throttleTime(1000),
    //   scan(count => count + 1, 0)
    // )
    // .subscribe(count => console.log(`Clicked ${count} times`))

    //----------------------------------------------------------------

    // of(1,2,3).subscribe(next =>console.log(next)),        
    // (err: any) => console.log(err),
    // () => {console.log("completed")}
  
    //----------------------------------------------------------------

    // from([10,11,12,13]).subscribe(next => console.log(next)),
    // (err: any) => {console.log(err)},
    // ()=>{console.log("finised")}

    //----------------------------------------------------------------

    // of(1,2,3,4,5,6,7,8).pipe(
    //   map(x=>{
    //     if(x==4){
    //       throw "Error occured"
    //     }
    //     return x
    //   }),
    //   catchError(err =>{
    //     console.log(err)
    //     return of(4,5,6,7,8)
    //   })
    // ).subscribe(next =>console.log(next),
    // err => console.log(err),
    // () => {console.log("completed..")})

//----------------------------------------------------------------

  //  interval(1000).pipe(take(6)).subscribe(x => console.log(x))

//----------------------------------------------------------------

    // of(1,2,3,4,5,6,7,8).pipe(map(x =>{
    //   if(x==4){
    //     throw "Error"
    //   }
    //   return x

    // }),
    // retry(3)).subscribe(next =>console.log(next),
    // err=> {console.log(err,"tried 3 times then quit..")},
    // () => {console.log('task complete')}
    // )

//----------------------------------------------------------------

    // value is not getting on the console 👇

    // fromFetch("https://jsonplaceholder.typicode.com/users").
    // pipe(switchMap(response=>{
    //   if(response.ok) {
    //     return from(response.json());
    //   }
    //   else{
    //     return of({error:true, message:`Error ${response.status}`})
    //   }
    // })).subscribe(x=>{
    //   console.log(x)
    // })
    

    const source = from([
      {name: 'Alex', age:32},
      {name: 'Akira', age:25},
      {name: 'Asin', age:22},

    ])

    const example = source.pipe(filter(person => person.age<=25)).
    subscribe(val => console.log(`Under the age of 25 ${val.name}`))
}

}
