
export const formatCurrency = (amount: number): string => {
  if(typeof amount !== 'number') return '0,00 €';
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}