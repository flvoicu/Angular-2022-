import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirEmpleadosComponent } from './aniadir-empleados.component';

describe('AniadirEmpleadosComponent', () => {
  let component: AniadirEmpleadosComponent;
  let fixture: ComponentFixture<AniadirEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
