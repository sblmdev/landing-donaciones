import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta1ComponenteComponent } from './tarjeta1-componente.component';

describe('Tarjeta1ComponenteComponent', () => {
  let component: Tarjeta1ComponenteComponent;
  let fixture: ComponentFixture<Tarjeta1ComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta1ComponenteComponent]
    });
    fixture = TestBed.createComponent(Tarjeta1ComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
