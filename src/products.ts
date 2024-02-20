interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  { name: "chicken", price: 10 },
  { name: "beef", price: 12 },
  { name: "lamb", price: 15 },
];

function calcAverageProductPrice(products: Product[]) {
  if (products.length === 0) {
    return 0;
  } else {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total / products.length;
  }
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

export { Product, calcAverageProductPrice };
