import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionDiasComponent } from './peticion-dias.component';

describe('PeticionDiasComponent', () => {
  let component: PeticionDiasComponent;
  let fixture: ComponentFixture<PeticionDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
