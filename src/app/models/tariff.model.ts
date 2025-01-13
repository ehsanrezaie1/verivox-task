export interface Price {
  amount: number;
  currency: string;
  formatted: string;
}

export interface Tariff {
  id: number;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  price: Price;
  benefits: string[];
}
