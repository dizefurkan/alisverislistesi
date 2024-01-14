import React, { useContext } from "react";
import { Header } from "src/components/atoms";
import Button from "src/components/atoms/button";
import ProductComponent from "src/components/atoms/product";
import { AppContext, ListContext } from "src/context";

import style from "./style.module.css";

function ShoppingList() {
  const { productsAndCategories } = useContext(ListContext);
  const { setCurrentState } = useContext(AppContext);

  return (
    <>
      <Header title="Alışveriş Listen" />
      <section>
        {productsAndCategories.map((data) => (
          <React.Fragment>
            <div>
              {data.category.name} ({data.products.length})
            </div>
            <ul className={style.list}>
              {data.products.map((product) => (
                <li key={product.id}>
                  <ProductComponent product={product} />
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>

      <Button
        onClick={() => {
          setCurrentState("select");
        }}
      >
        Listeye geri don
      </Button>
    </>
  );
}

export default ShoppingList;
