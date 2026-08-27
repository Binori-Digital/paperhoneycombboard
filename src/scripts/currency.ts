// Shared currency config for the savings calculator.
// rate = typical air freight cost per KG in that currency (editable by the user).

export const CURRENCIES: Record<string, { label: string; symbol: string; rate: number }> = {
  RM:  { label: 'RM – Malaysian Ringgit',   symbol: 'RM ',  rate: 20 },
  USD: { label: 'USD – US Dollar',          symbol: '$',    rate: 4.5 },
  SGD: { label: 'SGD – Singapore Dollar',   symbol: 'S$',   rate: 6 },
  THB: { label: 'THB – Thai Baht',          symbol: '฿',    rate: 160 },
  KRW: { label: 'KRW – Korean Won',         symbol: '₩',    rate: 6000 },
  JPY: { label: 'JPY – Japanese Yen',       symbol: '¥',    rate: 670 },
  CNY: { label: 'CNY – Chinese Yuan',       symbol: 'CN¥',  rate: 32 },
  HKD: { label: 'HKD – Hong Kong Dollar',   symbol: 'HK$',  rate: 35 },
  IDR: { label: 'IDR – Indonesian Rupiah',  symbol: 'Rp ',  rate: 70000 },
  EUR: { label: 'EUR – Euro',               symbol: '€',    rate: 4.2 },
};

const COUNTRY_TO_CURRENCY: Record<string, string> = {
  MY: 'RM', SG: 'SGD', TH: 'THB', KR: 'KRW', JP: 'JPY', CN: 'CNY', HK: 'HKD', ID: 'IDR', US: 'USD',
  // Eurozone
  DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR', BE: 'EUR', AT: 'EUR', PT: 'EUR',
  IE: 'EUR', FI: 'EUR', GR: 'EUR', LU: 'EUR', SK: 'EUR', SI: 'EUR', LV: 'EUR', LT: 'EUR',
  EE: 'EUR', CY: 'EUR', MT: 'EUR', HR: 'EUR',
};

export function currencyForCountry(cc: string | null | undefined): string | null {
  if (!cc) return null;
  return COUNTRY_TO_CURRENCY[cc.toUpperCase()] ?? null;
}

export function fmt(code: string, v: number): string {
  const c = CURRENCIES[code] ?? CURRENCIES.RM;
  return c.symbol + v.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

/** Ask our own edge for the visitor's country (Cloudflare CF-IPCountry). */
export async function detectCurrency(): Promise<string | null> {
  try {
    const res = await fetch('/api/geo', { signal: AbortSignal.timeout(2500) });
    if (!res.ok) return null;
    const data = await res.json();
    return currencyForCountry(data.country);
  } catch {
    return null;
  }
}
