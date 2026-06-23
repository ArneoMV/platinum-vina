// Croatian price formatting: comma decimal separator, always 2 decimals,
// trailing euro sign. e.g. 3.05 -> "3,05€", 12 -> "12,00€".
export function formatPrice(value: number): string {
  const formatted = value.toLocaleString("hr-HR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatted}€`;
}
