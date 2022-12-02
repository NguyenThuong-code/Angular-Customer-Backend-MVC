import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
 // @ts-ignore
customerForm: FormGroup;
 // @ts-ignore
 id: number;
 constructor(private customerService: CustomerService,
  private activatedRoute: ActivatedRoute,
              private router: Router){
                this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
                  // @ts-ignore
                  this.id = +paramMap.get('id');
                  this.getCustomer(this.id);
                });
              }
ngOnInit(): void {
  
}
getCustomer(id: number){
  return this.customerService.findById(id).subscribe(customer =>{
    this.customerForm = new FormGroup({
firstName: new FormControl(customer.firstName),
lastName: new FormControl(customer.lastName)
    });
  });
}
deleteCustomer(id: number){
  this.customerService.deleteCustomer(id).subscribe(()=>{
    this.router.navigate(['/customer/list']);
  }, e=>console.log(e))
}
}
