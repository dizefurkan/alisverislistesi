import Input from "../input";
import { useState } from "react";
import SVGComponent from "src/assets/svg";
import style from "./style.module.css";

type Props = {
  title: string;
};

export function Header(props: Props) {
  const [isInputVisible, setInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <header className={style.header}>
      {isInputVisible ? (
        <Input
          block
          placeholder={props.title}
          prefix={
            <button
              className={style["search-icon-button"]}
              onClick={() => setInput(false)}
            >
              <SVGComponent svg="close.svg" />
            </button>
          }
          value={inputValue}
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setInputValue(e.currentTarget.value);
          }}
        />
      ) : (
        <>
          <h1>{props.title}</h1>
          <button
            className={style["search-icon-button"]}
            onClick={() => setInput((value) => !value)}
          >
            <SVGComponent svg="search.svg" />
          </button>
        </>
      )}
    </header>
  );
}
