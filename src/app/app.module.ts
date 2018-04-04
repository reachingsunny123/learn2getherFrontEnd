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
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { RegisterService } from '../services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from './register/register.component';
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
    RegisterComponent,
    ViewAllCustomersComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FileUploadModule,
    RouterModule.forRoot(
      [{path: '', component: HomeComponent},
       {path: 'login', component: LoginComponent},
       {path: 'admin', component: AdminComponent},
       {path: 'courses', component: CourseDisplayComponent},
       {path: 'addCourses', component: CourseFormComponent},
       {path: 'register', component: RegisterComponent},
       {path: 'customers', component: ViewAllCustomersComponent}]
    )
  ],
  providers: [CoursesService,RegisterService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
