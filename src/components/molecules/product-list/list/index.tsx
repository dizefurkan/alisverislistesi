import React, { useContext } from "react";
import { ListContext } from "src/context";

import styles from "./style.module.css";
import ProductComponent from "../../../atoms/product";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";
import Button from "../../../atoms/button";

// TODO - fix me
export const List: any = React.forwardRef<HTMLDivElement, React.ReactNode>(
  (_, ref) => {
    const { products, removeProduct } = useContext(ListContext);
    const [autoAnimateRef] = useAutoAnimate();

    const removeAudio = useAudio({
      volume: 0.1,
      audioUrl: audioUrls.productRemoveFromList3,
    });

    if (!products.length) return null;

    return (
      <div ref={ref} className={styles.sidebar}>
        <h2 className={styles.title}>
          Listende {`${products.length}`} ürün var
        </h2>
        <ul ref={autoAnimateRef} className={styles.products}>
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

        <Button>Alisveris Listesini Olustur</Button>
      </div>
    );
  }
);
