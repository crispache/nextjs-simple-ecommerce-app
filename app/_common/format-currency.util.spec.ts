import { formatCurrency } from ".";

// TODO: Se podría hacer más comprobaciones

describe("Format-currency: format-currency.utils.ts", () => {
  it("should return '0,00 €' when you pass as a parameter a value that is null", () => {
    // Arrange
    const amount: any = null;

    // Act
    const result = formatCurrency(amount);

    // Assert
    expect(result).toBe("0,00 €");
  });

  it("should return '0,00 €' when you pass as a parameter a value that is undefined", () => {
    // Arrange
    const amount: any = undefined;

    // Act
    const result = formatCurrency(amount);

    // Assert
    expect(result).toBe("0,00 €");
  });

  it("should return '0,00 €' when you pass as a parameter a value that is string", () => {
    // Arrange
    const amount: any = "24.00";

    // Act
    const result = formatCurrency(amount);

    // Assert
    expect(result).toBe("0,00 €");
  });

  it("should return '0,00 €' when you pass as a parameter a value that is NaN", () => {
    // Arrange
    const amount = NaN;

    // Act
    const result = formatCurrency(amount);

    // Assert
    expect(result).toBe("0,00 €");
  });

  it("should return formatted price when you pass as a parameter a value that is number", () => {
    // Arrange
    const amount = 24.0;

    // Act
    const result = formatCurrency(amount);

    // Remove non-breaking spaces => eliminar caracteres especiales que no son visibles en los test
    // y puede causar problemas a la hora de comparar...
    const normalizedResult = result.replace(/\u00A0/g, " ");

    // Assert
    expect(normalizedResult).toBe("24,00 €");
  });
});
