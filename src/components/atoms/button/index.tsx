import React from "react";
import styles from "./style.module.css";

type Props = {
  block?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: Props) {
  return (
    <button
      className={styles.button}
      style={{ width: props.block ? "100%" : "", ...props.style }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
