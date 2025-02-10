import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingClaimsNewComponent } from './pending-claims-new.component';

describe('PendingClaimsNewComponent', () => {
  let component: PendingClaimsNewComponent;
  let fixture: ComponentFixture<PendingClaimsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingClaimsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingClaimsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
