import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.css']
})
export class CourseDisplayComponent implements OnInit {
 
  courses = [];

  constructor(private service:CoursesService) { }

  ngOnInit(){
    this.getAllCourses();
  }

  getAllCourses(){
    this.service.getAll()
    .subscribe(courses =>{
                this.courses= courses;
              },
             error=>console.log(error.json()));
  }

}
