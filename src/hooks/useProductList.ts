import { useContext, useEffect, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { CategoryModel, ProductModel } from "src/model";
import { ListContext } from "src/context";
import audioUrls from "src/helpers/audio-urls";
import { useAudio } from "src/hooks";

type Props = {
  categories: CategoryModel[];
  products: readonly ProductModel[];
};

type ProductsCategoryPair = {
  category: CategoryModel;
  products: ProductModel[];
};

export function useProductList(props: Props) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [searchValue] = useState();
  const { listProducts } = useContext(ListContext);
  const [productsAndCategories, setProducts] = useState<ProductsCategoryPair[]>(
    []
  );

  const listRef = useRef<HTMLDivElement>(null);
  const { addProductToList } = useContext(ListContext);
  const [parentRef] = useAutoAnimate();
  const addAudio = useAudio({
    audioUrl: audioUrls.productClick,
  });

  useEffect(() => {
    if (props.categories.length) {
      const productCategories = [
        ...new Set(
          props.products.filter((p) => p.category).map((p) => p.category!)
        ),
      ];

      const _products = props.products
        .filter(
          (product) => listProducts.findIndex((p) => p.id === product.id) === -1
        )
        .map((product) => {
          if (product.categoryId) {
            const category = props.categories.find(
              (c) => c.id === product.categoryId
            );
            if (category) product.category = category;
          }

          return product;
        });
      const productsAndCategories: ProductsCategoryPair[] = [];

      productCategories.forEach((category) => {
        const products = _products.filter((p) => p.categoryId === category.id);
        if (!products.length) return;
        productsAndCategories.push({ category, products });
      });
      setProducts(productsAndCategories);
    }
  }, [props.products, props.categories, listProducts]);

  const totalProductsCount = productsAndCategories.reduce(
    (sum, data) => (sum += data.products.length),
    0
  );

  return {
    selectedCategoryIndex,
    setSelectedCategoryIndex,

    productsAndCategories,
    totalProductsCount,
    listRef,
    categories: props.categories,
    parentRef,
    addProductToList,
    addAudio,
  };
}
