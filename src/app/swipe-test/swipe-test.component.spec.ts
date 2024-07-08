import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeTestComponent } from './swipe-test.component';

describe('SwipeTestComponent', () => {
  let component: SwipeTestComponent;
  let fixture: ComponentFixture<SwipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwipeTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
