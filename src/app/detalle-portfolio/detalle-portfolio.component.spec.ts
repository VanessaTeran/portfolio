import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePortfolioComponent } from './detalle-portfolio.component';

describe('DetallePortfolioComponent', () => {
  let component: DetallePortfolioComponent;
  let fixture: ComponentFixture<DetallePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
