import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tariff-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff-card.component.html',
  styleUrl: './tariff-card.component.scss',
})
export class TariffCardComponent {
  @Input() tariff!: {
    id: number;
    name: string;
    downloadSpeed: number;
    uploadSpeed: number;
    benefits: string[];
    price: { amount: number; currency: string; formatted: string };
  };

  @Input() tariffName: string = 'Tariff Name';
  @Input() downloadSpeed: string = '12 Mbit/s';
  @Input() uploadSpeed: string = '6 Mbit/s';
  @Input() benefits: string[] = [
    'Tariff Benefit 1',
    'Tariff Benefit 2',
    'Tariff Benefit 3',
  ];
  @Input() price: string = '123,45 €';
  component:
    | {
        id: number;
        name: string;
        downloadSpeed: number;
        uploadSpeed: number;
        benefits: string[];
      }
    | undefined;
}
