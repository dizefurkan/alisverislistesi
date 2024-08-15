import React from "react";

export type SVGProps = Omit<React.SVGProps<SVGElement>, "children" | "ref">;

const SearchSVG = React.lazy(() => import("./search.svg"));
const CloseSVG = React.lazy(() => import("./close.svg"));
const FaBasketShopping = React.lazy(() => import("./fa-basket-shopping.svg"));

type Props = {
  svg: "close.svg" | "search.svg" | "fa-basket-shopping.svg";
  width?: string; // 1rem;
  height?: string; // 1rem;
};

function SVGComponent(props: Props) {
  const { width = "2rem", height = "2rem" } = props;
  let icon: React.ReactNode = null;

  switch (props.svg) {
    case "search.svg":
      icon = <SearchSVG width={width} height={height} />;
      break;
    case "close.svg":
      icon = <CloseSVG width={width} height={height} />;
      break;
    case "fa-basket-shopping.svg":
      icon = <FaBasketShopping width={width} height={height} />;
      break;
  }

  return <React.Suspense fallback={<div />}>{icon}</React.Suspense>;
}

export default SVGComponent;
