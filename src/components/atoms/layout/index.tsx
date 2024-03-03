import React, { useContext } from "react";

import style from "./style.module.css";
import { AppContext } from "src/context";

function Layout(props: { children: React.ReactNode }) {
  const { layoutRef } = useContext(AppContext);

  return (
    <div ref={layoutRef} className={style.layout}>
      {props.children}
    </div>
  );
}

export default Layout;
