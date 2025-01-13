import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  private tariffs: Tariff[] = [
    {
      id: 1,
      name: 'Provider pure fiber internet 100',
      downloadSpeed: 70,
      uploadSpeed: 35,
      price: { amount: 49.9, currency: '€', formatted: '€ 49.90' },
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    },
    {
      id: 2,
      name: 'Provider pure fiber internet 25',
      downloadSpeed: 25,
      uploadSpeed: 5,
      price: { amount: 19.9, currency: '€', formatted: '€ 19.90' },
      benefits: [
        'Unlimited internet flat rate',
        'Download up to 25 Mbit/s ',
        'Upload up to 5 Mbit/s ',
        'Only 3 months contract term ',
        'Exchange service included ',
      ],
    },
    {
      id: 3,
      name: 'Provider pure fiber internet 50',
      downloadSpeed: 145,
      uploadSpeed: 20,
      price: { amount: 29.9, currency: '€', formatted: '€ 29.90' },
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    },
  ];

  getTariffs(): Observable<any[]> {
    return of(this.tariffs);
  }
}
