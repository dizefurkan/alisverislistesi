import { useState } from "react";
import { ListModel, ProductModel } from "src/model";

export function useList() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  // const [list] = useState<ListModel>(new ListModel());

  const addProduct = (product: ProductModel) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId: string) => {
    const _products = products.filter((product) => product.id !== productId);
    setProducts(_products);
  };

  return {
    products,
    addProduct,
    removeProduct,
  };
}
