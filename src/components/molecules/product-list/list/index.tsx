import React, { useContext } from "react";
import { AppContext, ListContext } from "src/context";

import styles from "./style.module.css";
import ProductComponent from "../../../atoms/product";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";
import Button from "../../../atoms/button";

// TODO - fix me
export const List: any = React.forwardRef<HTMLDivElement, React.ReactNode>(
  (_, ref) => {
    const { listProducts, removeProductFromList } = useContext(ListContext);
    const { setCurrentState } = useContext(AppContext);
    const [autoAnimateRef] = useAutoAnimate();

    const removeAudio = useAudio({
      volume: 0.1,
      audioUrl: audioUrls.productRemoveFromList3,
    });

    if (!listProducts.length) return null;

    return (
      <div ref={ref} className={styles.sidebar}>
        <h2 className={styles.title}>
          Listende {`${listProducts.length}`} ürün var
        </h2>
        <ul ref={autoAnimateRef} className={styles.products}>
          {listProducts.map((product) => (
            <li
              key={product.id}
              className={styles.product}
              role="button"
              tabIndex={0}
              onClick={() => {
                removeAudio.play();
                removeProductFromList(product.id);
              }}
            >
              <ProductComponent product={product} />
            </li>
          ))}
        </ul>

        <Button
          onClick={() => {
            setCurrentState("shopping");
          }}
        >
          Alisveris Listesini Olustur
        </Button>
      </div>
    );
  }
);
