import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCommanderComponent } from './file-commander.component';

describe('FileCommanderComponent', () => {
  let component: FileCommanderComponent;
  let fixture: ComponentFixture<FileCommanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileCommanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
