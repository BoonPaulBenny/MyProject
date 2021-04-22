import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1 : string=""
  value2 : string=""
  result : number = 0
  operator = ""
  eq_opr = ""
  clrButon : boolean = true
  
  constructor() { }

  ngOnInit(): void {
  }

  // getValue1($event:any){
  //   this.value1 = $event.target.value
  // } 

  // getValue2($event:any){
  //   this.value2 = $event.target.value
  // } 

  // add(){
  //   this.result = parseInt(this.value1) + parseInt(this.value2)
  // }

  setValue(num:string){
    this.operator==""? this.value1 += num : this.value2 += num
    
  }

  setOpr(opr:string){
    if(opr=="="){
     this.eq_opr = opr
    
     if(this.operator == '+'){
       this.result = parseInt(this.value1) + parseInt(this.value2)
     }
     if(this.operator == '-'){
      this.result = parseInt(this.value1) - parseInt(this.value2)
    }
    if(this.operator == '*'){
      this.result = parseInt(this.value1) * parseInt(this.value2)
    }
    if(this.operator == '/'){
      this.result = parseInt(this.value1) / parseInt(this.value2)
    }
    }
    else{
      this.operator = opr
    }
   
    }

    setClr(){
       this.value1 = ""
       this.value2 = ""
       this.result = 0
       this.operator = ""
       this.eq_opr = ""
       this.clrButon = false
    }


}
