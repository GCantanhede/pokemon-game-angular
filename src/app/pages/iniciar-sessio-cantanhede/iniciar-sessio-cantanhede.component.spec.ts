import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioCantanhedeComponent } from './iniciar-sessio-cantanhede.component';

describe('IniciarSessioCantanhedeComponent', () => {
  let component: IniciarSessioCantanhedeComponent;
  let fixture: ComponentFixture<IniciarSessioCantanhedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioCantanhedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioCantanhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
