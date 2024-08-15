import React from "react";
import style from "./style.module.css";

type Props = {
  block?: boolean; // full width ?;
  prefix?: React.ReactNode;
} & Omit<React.HTMLProps<HTMLInputElement>, "children" | "ref" | "prefix">;

function Input(props: Props) {
  const { block, prefix, ...inputProps } = props;

  return (
    <React.Suspense fallback={<div />}>
      <div className={style.inputWrapper} style={{ width: "100%" }}>
        <input autoFocus className={style.input} {...inputProps} />
        {!!props.prefix && <div className={style.prefix}>{props.prefix}</div>}
      </div>
    </React.Suspense>
  );
}

export default Input;
