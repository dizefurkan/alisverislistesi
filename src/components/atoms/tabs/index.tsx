import React from "react";

import style from "./style.module.css";

type TabItem = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

type Props = {
  items: TabItem[];
};

function Tabs(props: Props) {
  return (
    <ul className={style.tabs}>
      {props.items.map((item, index) => (
        <TabItem key={index} {...item} />
      ))}
    </ul>
  );
}

export default Tabs;

function TabItem(props: TabItem) {
  return (
    <li
      aria-selected={props.selected}
      className={style["tab-item"]}
      onClick={(e: any) => {
        e.target.parentNode.scrollBy({
          top: 0,
          left: e.target.offsetLeft - e.target.parentNode.offsetWidth / 2,
          behavior: "smooth",
        });
        props.onClick();
      }}
    >
      {props.label}
    </li>
  );
}
