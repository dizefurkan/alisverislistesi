import React, { createRef, useEffect } from "react";

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
  const tabsRef = createRef<HTMLUListElement>();

  useEffect(() => {
    let activeElement: HTMLElement | null = null;
    tabsRef.current?.childNodes.forEach((c) => {
      if ((c as HTMLElement).getAttribute("aria-selected") === "true") {
        activeElement = c as HTMLElement;
      }
    });

    if (!activeElement) return;
    (activeElement as HTMLElement).scrollIntoView({
      behavior: "smooth",
    });
  }, [props.items.findIndex((item) => item.selected === true)]);

  return (
    <ul ref={tabsRef} className={style.tabs}>
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
