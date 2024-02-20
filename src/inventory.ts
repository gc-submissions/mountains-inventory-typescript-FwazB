import { Product } from "../src/products";

interface InventoryItem {
  product: Product;
  quantity: number;
}
let inventory: InventoryItem[] = [
  { product: { name: "Motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  if (inventory.length === 0) {
    return 0;
  }

  let totalValue = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].product.price * inventory[i].quantity;
  }

  return totalValue;
}
let value = calcInventoryValue(inventory);
console.log(value);

export { InventoryItem, calcInventoryValue };
