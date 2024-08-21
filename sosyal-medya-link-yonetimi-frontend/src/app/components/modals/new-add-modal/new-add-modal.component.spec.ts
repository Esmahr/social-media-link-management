import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddModalComponent } from './new-add-modal.component';

describe('NewAddModalComponent', () => {
  let component: NewAddModalComponent;
  let fixture: ComponentFixture<NewAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAddModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
