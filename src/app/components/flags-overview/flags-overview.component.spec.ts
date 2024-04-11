import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsOverviewComponent } from './flags-overview.component';

describe('FlagsOverviewComponent', () => {
  let component: FlagsOverviewComponent;
  let fixture: ComponentFixture<FlagsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
