import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultListComponent } from './result-list.component';
import { TariffService } from '../../services/tariff.service';
import { of } from 'rxjs';
import { TariffCardComponent } from '../tariff-card/tariff-card.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;
  let mockTariffService: jasmine.SpyObj<TariffService>;

  beforeEach(async () => {
    const tariffsMock = [
      {
        id: 1,
        name: 'Plan A',
        downloadSpeed: 100,
        uploadSpeed: 50,
        price: { amount: 20, currency: '€' },
      },
      {
        id: 2,
        name: 'Plan B',
        downloadSpeed: 200,
        uploadSpeed: 100,
        price: { amount: 40, currency: '€' },
      },
      {
        id: 3,
        name: 'Plan C',
        downloadSpeed: 50,
        uploadSpeed: 25,
        price: { amount: 10, currency: '€' },
      },
    ];

    mockTariffService = jasmine.createSpyObj('TariffService', ['getTariffs']);
    mockTariffService.getTariffs.and.returnValue(of(tariffsMock));

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ResultListComponent, TariffCardComponent],
      providers: [{ provide: TariffService, useValue: mockTariffService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load tariffs on initialization', () => {
    expect(component.tariffs.length).toBe(3);
    expect(component.tariffs[0].name).toBe('Plan A');
  });

  it('should sort tariffs by price', () => {
    const event = { target: { value: 'price' } } as unknown as Event;
    component.onSortChange(event);

    expect(component.filteredTariffs[0].name).toBe('Plan C');
    expect(component.filteredTariffs[1].name).toBe('Plan A');
    expect(component.filteredTariffs[2].name).toBe('Plan B');
  });

  it('should sort tariffs by download speed', () => {
    const event = { target: { value: 'downloadSpeed' } } as unknown as Event;
    component.onSortChange(event);

    expect(component.filteredTariffs[0].name).toBe('Plan C');
    expect(component.filteredTariffs[1].name).toBe('Plan A');
    expect(component.filteredTariffs[2].name).toBe('Plan B');
  });

  it('should sort tariffs by upload speed', () => {
    const event = { target: { value: 'uploadSpeed' } } as unknown as Event;
    component.onSortChange(event);

    expect(component.filteredTariffs[0].name).toBe('Plan C');
    expect(component.filteredTariffs[1].name).toBe('Plan A');
    expect(component.filteredTariffs[2].name).toBe('Plan B');
  });
});
