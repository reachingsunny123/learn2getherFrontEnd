import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'my-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class MyFileUploadComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'http://localhost:8080/api/upload'});

  constructor() { }

  ngOnInit() {
  }

}
