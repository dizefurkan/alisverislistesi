import React, { useContext } from "react";
import { ListContext } from "src/context";

import styles from "./style.module.css";
import ProductComponent from "../product";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";

export function Sidebar() {
  const { products, removeProduct } = useContext(ListContext);
  const [parent] = useAutoAnimate();

  const removeAudio = useAudio({
    volume: 0.1,
    audioUrl: audioUrls.productRemoveFromList3,
  });

  return (
    <div ref={parent} className={styles.sidebar}>
      <h2 className={styles.title}>Listende {`${products.length}`} ürün var</h2>
      <ul className={styles.products}>
        {products.map((product) => (
          <li
            key={product.id}
            className={styles.product}
            role="button"
            tabIndex={0}
            onClick={() => {
              removeAudio.play();
              removeProduct(product.id);
            }}
          >
            <ProductComponent product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
