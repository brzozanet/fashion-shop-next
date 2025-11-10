type CurrencyAmount = {
  PLN: number;
  EUR: number;
  // [key: string]: number;
};

export const SHIPPING_COST: CurrencyAmount = { PLN: 29, EUR: 5.5 };
export const SHIPPING_FREE: CurrencyAmount = { PLN: 500, EUR: 100 };
