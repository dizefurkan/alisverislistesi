import React, { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { AppContext, ListContext } from "src/context";

import styles from "./style.module.css";
import ProductComponent from "../../../atoms/product";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAudio } from "src/hooks";
import audioUrls from "src/helpers/audio-urls";
import Button from "src/components/atoms/button";

import SVGComponent from "src/assets/svg";

// TODO - fix me
export const Basket: any = React.forwardRef<HTMLDivElement, React.ReactNode>(
  (_, ref) => {
    const [isBasketVisible, setBasketVisibility] = useState(false);

    const { listProducts, removeProductFromList } = useContext(ListContext);
    const { setCurrentState } = useContext(AppContext);
    const [autoAnimateRef] = useAutoAnimate();

    // const removeAudio = useAudio({
    //   volume: 0.1,
    //   audioUrl: audioUrls.productRemoveFromList3,
    // });

    return (
      <>
        <button
          className={styles["basket-float"]}
          onClick={() => setBasketVisibility(true)}
        >
          <div className={styles["basket-float-badge"]}>
            {listProducts.length}
          </div>
          <SVGComponent
            width="1.5rem"
            height="1.5rem"
            svg="fa-basket-shopping.svg"
          />
        </button>

        <CSSTransition
          in={isBasketVisible}
          timeout={0}
          classNames={{
            enter: styles["basket-enter"],
            enterActive: styles["basket-enter-active"],
            exit: styles["basket-exit"],
            exitActive: styles["basket-exit-active"],
          }}
          unmountOnExit
        >
          <div>
            <div
              className={styles.basketOverlay}
              onClick={() => setBasketVisibility(false)}
            />
            <div className={styles.basket}>
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
                      // removeAudio.play();
                      removeProductFromList(product.id);
                    }}
                  >
                    <ProductComponent product={product} />
                  </li>
                ))}
              </ul>

              <Button
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setCurrentState("shopping");
                }}
              >
                Alisveris Listesini Olustur
              </Button>
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
);
