import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubscribedCard } from './product-subscribed-card';

describe('ProductSubscribedCard', () => {
  let component: ProductSubscribedCard;
  let fixture: ComponentFixture<ProductSubscribedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSubscribedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSubscribedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
