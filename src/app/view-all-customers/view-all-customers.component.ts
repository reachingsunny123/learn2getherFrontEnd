import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  customers = [];

  constructor(private service:RegisterService) { }

  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.service.getAll()
    .subscribe(customers =>{
                console.log(customers);
                this.customers= customers;
              },
             error=>console.log(error.json()));
  }
}
