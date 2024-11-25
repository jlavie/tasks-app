import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestHeaderComponent } from './invest-header.component';

describe('InvestHeaderComponent', () => {
  let component: InvestHeaderComponent;
  let fixture: ComponentFixture<InvestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
