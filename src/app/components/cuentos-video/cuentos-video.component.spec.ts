import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosVideoComponent } from './cuentos-video.component';

describe('CuentosVideoComponent', () => {
  let component: CuentosVideoComponent;
  let fixture: ComponentFixture<CuentosVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentosVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentosVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
