import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOprationComponent } from './player-opration.component';

describe('PlayerOprationComponent', () => {
  let component: PlayerOprationComponent;
  let fixture: ComponentFixture<PlayerOprationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerOprationComponent]
    });
    fixture = TestBed.createComponent(PlayerOprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
