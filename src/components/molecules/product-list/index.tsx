import { CategoryModel, ProductModel } from "src/model";
import ProductComponent from "../../atoms/product";

import { List } from "./list";
import { useProductList } from "src/hooks";

import style from "./style.module.css";
import { Header } from "src/components/atoms";

type ProductListProps = {
  categories: CategoryModel[];
  products: ProductModel[];
};

function ProductList(props: ProductListProps) {
  const {
    productsAndCategories,
    totalProductsCount,
    listRef,
    parentRef,
    addAudio,
    addProductToList,
  } = useProductList(props);

  return (
    <>
      <Header title="Alınacak Ürünleri Seç" />
      <List ref={listRef} />
      <div style={{ paddingBottom: listRef.current?.offsetHeight + "px" }}>
        <ul ref={parentRef}>
          {productsAndCategories.map((data) => (
            <details
              key={data.category.id}
              open
              className={style.productsAndCategory}
            >
              <summary>
                <h2 className={style.category}>
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
    </>
  );
}

export default ProductList;
