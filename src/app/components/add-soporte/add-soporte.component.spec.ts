import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoporteComponent } from './add-soporte.component';

describe('AddSoporteComponent', () => {
  let component: AddSoporteComponent;
  let fixture: ComponentFixture<AddSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
