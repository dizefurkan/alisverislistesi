import { ProductModel } from "src/model";

import style from "./style.module.css";
import ProductComponent from "../product";
import { ListContext } from "src/context";
import { useContext, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";

type ProductListProps = {
  products: ProductModel[];
};

function ProductList(props: ProductListProps) {
  const { products, addProduct } = useContext(ListContext);
  const [parent] = useAutoAnimate();
  const addAudio = useAudio({
    audioUrl: audioUrls.productClick,
  });

  console.log(products);

  return (
    <ul ref={parent} className={style.productList}>
      {props.products
        .filter(
          (product) => products.findIndex((p) => p.id === product.id) === -1
        )
        .map((product) => (
          <li
            key={product.id}
            className={style.product}
            role="button"
            tabIndex={0}
            onClick={() => {
              addAudio.play();
              addProduct(product);
            }}
          >
            <ProductComponent product={product} />
          </li>
        ))}
    </ul>
  );
}

export default ProductList;

useAutoAnimate;
