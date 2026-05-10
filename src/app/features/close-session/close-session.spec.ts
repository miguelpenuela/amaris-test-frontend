import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSession } from './close-session';

describe('CloseSession', () => {
  let component: CloseSession;
  let fixture: ComponentFixture<CloseSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
