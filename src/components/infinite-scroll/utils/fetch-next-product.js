import { productData } from "../../../constants/product.data";

export function fetchNextProduct(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * 10;
      const end = start + 10;
      const products = productData.slice(start, end);
      resolve(products);
    }, 1000);
  });
}
