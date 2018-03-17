import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit{

  courses = [];

  constructor(private service:CoursesService) { }

  ngOnInit(){
    this.getAllCourses();
  }

  createCourse(courseForm){
    console.log(courseForm);
    this.service.create(courseForm.value)
    .subscribe(newCourse => {
          this.courses.splice(0,0,newCourse);
          },
          error=>console.log(error.json()));
  }

  getAllCourses(){
    this.service.getAll()
    .subscribe(courses =>{
                this.courses= courses;
              },
             error=>console.log(error.json()));
  }

  /**fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        //let options = new RequestOptions({ headers: headers });
        this.service.create(formData)
        .subscribe(newCourse => {
          this.courses.splice(0,0,newCourse);
          },
          error=>console.log(error.json()));
    }
  }*/
}
