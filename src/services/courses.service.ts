import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { DataService } from './data.service';
import { environment } from '../environments/environment';

@Injectable()
export class CoursesService extends DataService{
  
  constructor(http:Http) {
    super(environment.endPoint +"/courses",http);
   }

}
