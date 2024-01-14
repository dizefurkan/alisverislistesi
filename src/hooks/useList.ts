import { useState } from "react";
import { ProductModel } from "src/model";

export function useList() {
  const [listProducts, setListProducts] = useState<ProductModel[]>([]);

  const addProductToList = (product: ProductModel) => {
    setListProducts([...listProducts, product]);
  };

  const removeProductFromList = (productId: string) => {
    const _products = listProducts.filter(
      (product) => product.id !== productId
    );
    setListProducts(_products);
  };

  const productCategories = [
    ...new Set(listProducts.filter((p) => p.category).map((p) => p.category!)),
  ];

  const productsAndCategories = productCategories.map((category) => ({
    category,
    products: listProducts.filter((p) => p.categoryId === category.id),
  }));

  return {
    listProducts,
    productsAndCategories,
    addProductToList,
    removeProductFromList,
  };
}
