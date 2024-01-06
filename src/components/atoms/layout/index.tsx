import React from "react";

import style from "./style.module.css";

function Layout(props: { children: React.ReactNode }) {
  return <div className={style.layout}>{props.children}</div>;
}

export default Layout;
