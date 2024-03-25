export const formatCurrency = (amount: number): string => {
  if (!isValidAmount(amount)) return "0,00 €";
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

const isValidAmount = (value: number): boolean => {
  if (typeof value === "number" && !isNaN(value)) {
    return true;
  } else {
    return false;
  }
};