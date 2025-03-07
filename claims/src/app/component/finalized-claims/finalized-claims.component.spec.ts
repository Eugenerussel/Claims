import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedClaimsComponent } from './finalized-claims.component';

describe('FinalizedClaimsComponent', () => {
  let component: FinalizedClaimsComponent;
  let fixture: ComponentFixture<FinalizedClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizedClaimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
