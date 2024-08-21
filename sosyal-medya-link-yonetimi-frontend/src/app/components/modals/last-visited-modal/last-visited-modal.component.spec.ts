import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVisitedModalComponent } from './last-visited-modal.component';

describe('LastVisitedModalComponent', () => {
  let component: LastVisitedModalComponent;
  let fixture: ComponentFixture<LastVisitedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastVisitedModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastVisitedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
