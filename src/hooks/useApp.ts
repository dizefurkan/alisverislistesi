import { useContext, useEffect, useState } from "react";
import { ListContext } from "src/context";
import { CategoryModel, ProductModel } from "src/model";

type Props = {
  categories: CategoryModel[];
  products: readonly ProductModel[];
};

export function useApp(props: Props) {
  const { products: listProducts } = useContext(ListContext);
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    if (props.categories.length) {
      setProducts(
        props.products
          .filter(
            (product) =>
              listProducts.findIndex((p) => p.id === product.id) === -1
          )
          .map((product) => {
            if (product.categoryId) {
              const category = props.categories.find(
                (c) => c.id === product.categoryId
              );
              if (category) product.category = category;
            }

            return product;
          })
      );
    }
  }, [props.products, props.categories, listProducts]);

  return {
    products,
  };
}
