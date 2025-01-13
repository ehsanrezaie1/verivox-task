import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { CommonModule } from '@angular/common';
import { TariffCardComponent } from '../tariff-card/tariff-card.component';
import { Tariff } from '../../models/tariff.model';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule, TariffCardComponent],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.scss',
})
export class ResultListComponent implements OnInit {
  tariffs: Tariff[] = [];
  filteredTariffs: Tariff[] = [];
  sortKey = '';

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe((data) => {
      this.tariffs = data;
      this.filteredTariffs = data;
    });
  }

  onSortChange(e: Event): void {
    const key = (e.target as HTMLSelectElement).value as
      | 'price'
      | 'downloadSpeed'
      | 'uploadSpeed';

    this.filteredTariffs = [...this.tariffs].sort((a, b) => {
      if (key === 'price') {
        return a.price.amount - b.price.amount;
      }
      return a[key] - b[key];
    });
  }
}
