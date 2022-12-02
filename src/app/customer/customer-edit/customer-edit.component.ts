import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  
 // @ts-ignore
 customerForm:FormGroup;
  // @ts-ignore
 id: number;
 constructor(private customerService: CustomerService,
  private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }
  ngOnInit() {
    
  }
  getCustomer(id:number){
    return this.customerService.findById(id).subscribe(customer =>{
      this.customerForm=new FormGroup({
        first:new FormControl(customer.firstName),
        lastName:new FormControl(customer.lastName)
      });
    });
  }
  updateCustomer(id: number){
    const customer=this.customerForm.value;
    this.customerService.updateCustomer(id,customer).subscribe(()=>{
      alert('Update Success');
    });
  }
}
