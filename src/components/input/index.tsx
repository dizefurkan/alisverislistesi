import React from "react";
import style from "./style.module.css";

function Input(props: React.ReactHTMLElement<HTMLInputElement>) {
  return <input className={style.input} {...props} />;
}

export default Input;
