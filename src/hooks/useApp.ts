import { useContext } from "react";
import { ListContext } from "src/context/list";
import { ProductModel } from "src/model";

export function useApp() {
  const { addProduct } = useContext(ListContext);

  const onProductSelect = (product: ProductModel) => {
    addProduct(product);
  };

  return {
    onProductSelect,
  };
}
