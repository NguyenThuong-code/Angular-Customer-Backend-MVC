import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
customers: Customer[]=[];
constructor(private customerService: CustomerService){

}
ngOnInit() {
  this.getAll();
}
getAll() {
  this.customerService.getAll().subscribe(customers => {
    this.customers = customers;
  });
}
}
