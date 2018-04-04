import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Form } from '@angular/forms/src/directives/form_interface';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  selectedFiles: FileList;
  currentFileUpload: File;
  
  constructor(private service: RegisterService) {}

  selectFile(event) {
    console.log(event);
    this.selectedFiles = event.target.files;
  }
  
  submit(form) {
   console.log(form.value);
   const formdata: FormData = new FormData();
   this.currentFileUpload = this.selectedFiles.item(0);
   formdata.append('image', this.currentFileUpload);
   formdata.append('firstName',form.value.firstName);
   formdata.append('lastName',form.value.lastName);
   formdata.append('dateOfBirth',form.value.dateOfBirth);
   formdata.append('street',form.value.street);
   formdata.append('town',form.value.town);
   formdata.append('state',form.value.state);
   formdata.append('postcode',form.value.state);
   formdata.append('country',form.value.country);
   formdata.append('email',form.value.email);
   formdata.append('phone',form.value.phone);
   formdata.append('password',form.value.password);
   this.service.submitRegisterData(formdata).subscribe(event => {
    if (event instanceof HttpResponse) {
       console.log('File is completely uploaded!');
     }
   });

   this.selectedFiles = undefined;
 }

}
