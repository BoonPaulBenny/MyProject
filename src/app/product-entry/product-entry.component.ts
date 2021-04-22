import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
    productForm = this.fb.group({
      pid : ["111", [Validators.required, Validators.minLength(3)]],
      name : ["",[Validators.required]],
      price : ["",[Validators.required]],
      description : ["",[Validators.required]]
    })

    add(){
      console.log(this.productForm.value)
    }
  ngOnInit(): void {
  }

}
