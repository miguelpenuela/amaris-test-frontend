import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementInfoCard } from './movement-info-card';

describe('MovementInfoCard', () => {
  let component: MovementInfoCard;
  let fixture: ComponentFixture<MovementInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementInfoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
