import { CategoryModel, ImageModel, ProductModel } from "src/model";

let id = 0;
const getId = () => "" + id++;
const C_ID = {
  Beverages: getId(),
  MeatPoultryFish: getId(),
  FruitsVeg: getId(),
  BakedGoods: getId(),
  MilkDairy: getId(),
  Snacks: getId(),
};

export const categories = [
  new CategoryModel({
    id: C_ID.FruitsVeg, // TODO
    name: "Meyve & Sebze",
  }),
  new CategoryModel({
    id: C_ID.Beverages, // TODO
    name: "İçecekler",
  }),
];

export const products = [
  new ProductModel({
    name: "Acı Biber",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/acibiber.png",
    }),
  }),
  new ProductModel({
    name: "Bal Kabağı",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/balkabagi.png",
    }),
  }),
  new ProductModel({
    name: "Sivri biber",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/biber.png",
    }),
  }),
  new ProductModel({
    name: "Kabak",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/kabak.png",
    }),
  }),
  new ProductModel({
    name: "Çilek",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/cilek.png",
    }),
  }),
  new ProductModel({
    name: "Kiraz",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/kiraz.png",
    }),
  }),
  new ProductModel({
    name: "Patates",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/patates.png",
    }),
  }),
  new ProductModel({
    name: "Portakal",
    categoryId: C_ID.FruitsVeg,
    image: new ImageModel({
      imageId: "/images/portakal.png",
    }),
  }),
];
