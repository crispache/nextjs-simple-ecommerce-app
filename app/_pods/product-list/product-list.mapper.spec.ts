
import * as Utils from "./../../_common/format-currency.util";
import { ProductApi } from "./api";
import { mapProductListFromApiToVm } from "./product-list.mapper";
import { Product } from "./product-list.vm";

jest.mock('./../../_common/format-currency.util', () => ({
  __esModule: true,
    // @ts-ignore
    ...jest.requireActual('./../../_common/format-currency.util'),
}));


describe("Product-list: product-list.mapper.ts", () => {
  it("should return empty array when feeding undefined product list", () => {
    // Arrange
    const products: any = undefined;

    // Act
    const results = mapProductListFromApiToVm(products);

    // Assert
    expect(results).toEqual([]);
  });

  it("should return empty array when feeding null product list", () => {
    // Arrange
    const products: any = null;

    // Act
    const results = mapProductListFromApiToVm(products);

    // Assert
    expect(results).toEqual([]);
  });

  it("should return empty array when feeding empty array product list", () => {
    // Arrange
    const products: ProductApi[] = [];

    // Act
    const results = mapProductListFromApiToVm(products);

    // Assert
    expect(results).toEqual([]);
  });

  it("should return one item with values when passing one item with values", () => {
    // Arrange
    const products: ProductApi[] = [
      {
        id: 1,
        name: "Lajusticia colágeno con magnesio 450comp",
        price: 14.35,
        imageUrl: "/products/lajusticia-colageno.jpg",
      },
    ];

    const expectedResult: Product[] = [
      {
        id: 1,
        name: "Lajusticia colágeno con magnesio 450comp",
        price: "14,35 €",
        priceNoFormat: 14.35,
        imageUrl: "/products/lajusticia-colageno.jpg",
      },
    ];

    // Spy
    const formatCurrencySpyOn = jest.spyOn(Utils, 'formatCurrency');
  
    // Act
    const results = mapProductListFromApiToVm(products);

    // Remove non-breaking spaces => eliminar caracteres especiales que no son visibles en los test
    // y puede causar problemas a la hora de comparar...
    const normalizedResults = [{
      ...results[0],
      price: results[0].price.replace(/\u00A0/g, " "),
    }]

    // Assert
    expect(normalizedResults).toEqual(expectedResult);
    expect(formatCurrencySpyOn).toHaveBeenCalled();
    expect(formatCurrencySpyOn).toHaveBeenCalledTimes(1);
    expect(formatCurrencySpyOn).toHaveBeenCalledWith(products[0].price);
  });
});
