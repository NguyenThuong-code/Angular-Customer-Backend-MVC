import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit{
customerForm:FormGroup =new FormGroup({
firstName: new FormControl(),
lastName: new FormControl()
});
constructor(private customerService:CustomerService
  ){

  }
  ngOnInit() {
  
  }
  submit(){
    const customer =this.customerForm.value;
    this.customerService.saveCustomer({customer: customer}).subscribe(()=>{
      alert('create success!');
      this.customerForm.reset();
    }, e => console.log(e));
  }
 
}
