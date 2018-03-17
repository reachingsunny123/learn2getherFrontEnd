import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesService } from './../services/courses.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { DataService } from '../services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CourseDisplayComponent } from './course-display/course-display.component';
import { HomeComponent } from './home/home.component';
import { MyFileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
//import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CourseFormComponent,
    NavbarComponent,
    JumbotronComponent,
    SubscribeComponent,
    CourseDisplayComponent,
    HomeComponent,
    MyFileUploadComponent
   // UploadComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(
      [{path: '', component: HomeComponent},
       {path: 'courses', component: CourseDisplayComponent},
       {path: 'addCourses', component: CourseFormComponent},
       {path: 'upload', component: MyFileUploadComponent}]
    )
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
