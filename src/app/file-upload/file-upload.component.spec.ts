import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: MyFileUploadComponent;
  let fixture: ComponentFixture<MyFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
