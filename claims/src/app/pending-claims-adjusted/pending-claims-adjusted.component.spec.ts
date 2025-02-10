import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingClaimsAdjustedComponent } from './pending-claims-adjusted.component';

describe('PendingClaimsAdjustedComponent', () => {
  let component: PendingClaimsAdjustedComponent;
  let fixture: ComponentFixture<PendingClaimsAdjustedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingClaimsAdjustedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingClaimsAdjustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
