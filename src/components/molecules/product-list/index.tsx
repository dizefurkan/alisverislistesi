import { useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { CategoryModel, ProductModel } from "src/model";
import ProductComponent from "../../atoms/product";
import { ListContext } from "src/context";

import { useApp, useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";

import style from "./style.module.css";

type ProductListProps = {
  categories: CategoryModel[];
  products: ProductModel[];
};

function ProductList(props: ProductListProps) {
  const { products } = useApp(props);
  const { addProduct } = useContext(ListContext);
  const [parent] = useAutoAnimate();
  const addAudio = useAudio({
    audioUrl: audioUrls.productClick,
  });

  return (
    <ul ref={parent} className={style.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <button
            className={style.product}
            role="button"
            tabIndex={0}
            onClick={() => {
              addAudio.play();
              addProduct(product);
            }}
          >
            <ProductComponent product={product} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

useAutoAnimate;
