import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffCardComponent } from './tariff-card.component';

describe('TariffCardComponent', () => {
  let component: TariffCardComponent;
  let fixture: ComponentFixture<TariffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffCardComponent);
    component = fixture.componentInstance;

    // Mock input data
    component.tariff = {
      id: 1,
      name: 'Plan A',
      downloadSpeed: 100,
      uploadSpeed: 50,
      price: { amount: 12.9, formatted: '€ 19.90', currency: '€' },
      benefits: ['Unlimited data', 'Free router', 'No contract'],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tariff name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Plan A');
  });

  it('should display the tariff ID', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tariffNumberElement = compiled.querySelector('.tariff-number span');
    expect(tariffNumberElement?.textContent).toBe('1');
  });

  it('should list all benefits', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const benefitElements = compiled.querySelectorAll('.benefits li');
    expect(benefitElements.length).toBe(3);
    expect(benefitElements[0].textContent).toBe('Unlimited data');
    expect(benefitElements[1].textContent).toBe('Free router');
    expect(benefitElements[2].textContent).toBe('No contract');
  });
});
