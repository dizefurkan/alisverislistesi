import { ProductModel } from "../../model";

import style from "./style.module.css";

function RGBcolor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return (alpha: number) => `rgba(${R},${G},${B},${alpha})`;
}

function ProductComponent({ product }: { product: ProductModel }) {
  const rgb = RGBcolor();
  return (
    <div
      className={style.product}
      style={{ ["--product-bg-color" as any]: rgb(0.5) }}
    >
      <picture data-field="image">
        <img src={product.image?.imageId} alt={product.name} />
      </picture>
      <span data-field="name">{product.name}</span>
    </div>
  );
}

export default ProductComponent;
