import { ProductModel } from "../../../model";

import style from "./style.module.css";

function RGBcolor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return (alpha: number) => `rgba(${R},${G},${B},${alpha})`;
}

type Props = { product: ProductModel; showAddButton?: boolean };
function ProductComponent(props: Props) {
  const { product, showAddButton = false } = props;
  const rgb = RGBcolor();
  return (
    <div
      className={style.product}
      style={{ ["--product-bg-color" as string]: rgb(0.5) }}
    >
      <picture data-field="image">
        <img src={product.image?.imageId} alt={product.name} />
      </picture>
      <span data-field="name">{product.name}</span>
      {showAddButton && <AddBasketButton />}
    </div>
  );
}

export default ProductComponent;

const AddBasketButton = () => {
  return (
    <button className={style.addBasketButton}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      </svg>
    </button>
  );
};
