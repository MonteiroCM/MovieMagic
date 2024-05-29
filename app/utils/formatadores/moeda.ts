export function formatCurrency(value: number | undefined): string {
  if (!value) {
    return value as unknown as string;
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value).replace(/^(\R+)/, '');
}


