import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescriptionModalComponent } from './edit-description-modal.component';

describe('EditDescriptionModalComponent', () => {
  let component: EditDescriptionModalComponent;
  let fixture: ComponentFixture<EditDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
