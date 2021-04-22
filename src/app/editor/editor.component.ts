import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  myform = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    address : new FormControl({
      house : new FormControl(''),
      dist : new FormControl('')
    })
  })

  save(){
    console.log(this.myform.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
