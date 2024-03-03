import { CategoryModel, ProductModel } from "src/model";
import ProductComponent from "../../atoms/product";

import { List } from "./list";
import { useProductList } from "src/hooks";

import style from "./style.module.css";
import { Header } from "src/components/atoms";
import { createContext, useContext, useEffect, useState } from "react";
import Tabs from "src/components/atoms/tabs";
import { AppContext } from "src/context";

type ProductListContextType = ReturnType<typeof useProductList>;
const ProductListContext = createContext<ProductListContextType>(
  {} as ProductListContextType
);

function useProductListContext() {
  const contextValue = useContext(ProductListContext);
  return contextValue;
}

type ProductListProps = {
  categories: CategoryModel[];
  products: ProductModel[];
};

function ProductList(props: ProductListProps) {
  const contextValue = useProductList(props);

  return (
    <ProductListContext.Provider value={contextValue}>
      <Header title="Alınacak Ürünleri Seç" />
      <Categories />
      <List ref={contextValue.listRef} />
      <Products />
    </ProductListContext.Provider>
  );
}

export default ProductList;

const Categories = () => {
  const { layoutRef } = useContext(AppContext);
  const {
    categories,
    selectedCategoryIndex,
    productsAndCategories,
    setSelectedCategoryIndex,
  } = useProductListContext();

  const onTabClick = (index: number) => {
    setSelectedCategoryIndex(index);

    const targetElement = layoutRef.current?.querySelector<HTMLElement>(
      `#category-${index}`
    );
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className={style.categoriesTab}>
      <Tabs
        items={productsAndCategories.map((pair, index) => ({
          selected: index === selectedCategoryIndex,
          label: pair.category.name,
          onClick: () => onTabClick(index),
        }))}
      />
    </div>
  );
};

const Products = () => {
  const {
    selectedCategoryIndex,
    setSelectedCategoryIndex,

    listRef,
    parentRef,
    productsAndCategories,
    addAudio,
    addProductToList,
    totalProductsCount,
  } = useProductListContext();

  return (
    <div style={{ paddingBottom: listRef.current?.offsetHeight + "px" }}>
      <ul ref={parentRef}>
        {productsAndCategories.map((data, index) => (
          <details
            open={selectedCategoryIndex === index}
            id={"category-" + index}
            key={data.category.id}
            className={style.productsAndCategory}
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategoryIndex(index);
            }}
          >
            <summary>
              <h2
                className={style.category}
                style={{
                  fontWeight:
                    selectedCategoryIndex === index ? "bold" : undefined,
                }}
              >
                {data.category.name} ({data.products.length})
              </h2>
            </summary>
            <div>
              <ul className={style.productList}>
                {data.products.map((product) => (
                  <li key={product.id}>
                    <button
                      className={style.product}
                      role="button"
                      onClick={() => {
                        addAudio.play();
                        addProductToList(product);
                      }}
                    >
                      <ProductComponent product={product} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </ul>
      {!!totalProductsCount && (
        <div className={style.totalProductCount}>
          Toplam {totalProductsCount} ürün gösteriliyor
        </div>
      )}
    </div>
  );
};
