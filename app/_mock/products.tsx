
/* TODO: Quitar de aquí */
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Lajusticia colágeno con magnesio 450comp",
    price: 14.35,
    imageUrl: "/products/lajusticia-colageno.jpg",
  },
  {
    id: 2,
    name: "Xhekpon® crema facial 40ml",
    price: 6.49,
    imageUrl: "/products/xhekpon-crema.jpg",
  },
  {
    id: 3,
    name: "Cerave ® Crema Hidratante 340ml",
    price: 11.7,
    imageUrl: "/products/cerave-crema.jpg",
  },
  {
    id: 4,
    name: "Hyabak solución 10ml",
    price: 9.48,
    imageUrl: "/products/hyabak-solucion.jpg",
  },
  {
    id: 5,
    name: "Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml",
    price: 19.74,
    imageUrl: "/products/fotoprotector-isdin.jpg",
  },
  {
    id: 6,
    name: "Piz Buin® Allergy SPF50+ loción 200ml",
    price: 8.65,
    imageUrl: "/products/piz-buin.jpg",
  },
];
