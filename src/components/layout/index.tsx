import React, { useContext } from "react";

import style from "./style.module.css";
import { ListContext } from "src/context";

function Layout(props: { children: React.ReactNode }) {
  const { products } = useContext(ListContext);

  return (
    <div
      className={style.layout}
      style={{
        ["--sidebar-width" as string]: products.length ? undefined : "0px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Layout;
