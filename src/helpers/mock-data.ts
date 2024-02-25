import { CategoryModel, ImageModel, ProductModel } from "src/model";

let id = 0;
const getId = () => "" + id++;
const C_ID = {
  FruitsVeg: getId(),
  MilkDairy: getId(),
  BakedGoods: getId(),
  Beverages: getId(),
  HomeCare: getId(),

  MeatPoultryFish: getId(),
  Snacks: getId(),
  PersonalCare: getId(),
};

export const categories = [
  new CategoryModel({
    id: C_ID.FruitsVeg, // TODO
    name: "Meyve & Sebze",
  }),
  new CategoryModel({
    id: C_ID.MilkDairy, // TODO
    name: "Süt ve Süt Ürünleri",
  }),
  new CategoryModel({
    id: C_ID.BakedGoods, // TODO
    name: "Unlu Mamüller",
  }),
  new CategoryModel({
    id: C_ID.Beverages, // TODO
    name: "İçecekler",
  }),
  new CategoryModel({
    id: C_ID.Snacks, // TODO
    name: "Atıştırmalık",
  }),
  new CategoryModel({
    id: C_ID.HomeCare, // TODO
    name: "Ev Bakım",
  }),
];

export const products = [
  {
    name: "Acı Biber",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/acibiber.png",
  },
  {
    name: "Bal Kabağı",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/balkabagi.png",
  },
  {
    name: "Sivri biber",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/biber.png",
  },
  {
    name: "Kabak",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/kabak.png",
  },
  {
    name: "Çilek",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/cilek.png",
  },
  {
    name: "Kiraz",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/kiraz.png",
  },
  {
    name: "Patates",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/patates.png",
  },
  {
    name: "Portakal",
    categoryId: C_ID.FruitsVeg,
    imageId: "/images/portakal.png",
  },
  {
    name: "Süt",
    categoryId: C_ID.MilkDairy,
    imageId: "/images/n_a.png",
  },
  {
    name: "Soda",
    categoryId: C_ID.Beverages,
    imageId: "/images/n_a.png",
  },
  {
    name: "Meyvesuyu",
    categoryId: C_ID.Beverages,
    imageId: "/images/n_a.png",
  },
  {
    name: "Fındık Ezmesi",
    categoryId: C_ID.Snacks,
    imageId: "/images/n_a.png",
  },
  {
    name: "Tuzlu Çekirdek",
    categoryId: C_ID.Snacks,
    imageId: "/images/n_a.png",
  },
  {
    name: "Şampuan",
    categoryId: C_ID.PersonalCare,
    imageId: "/images/n_a.png",
  },
  {
    name: "Deterjan",
    categoryId: C_ID.HomeCare,
    imageId: "/images/n_a.png",
  },
].map(
  (data) =>
    new ProductModel({
      name: data.name,
      categoryId: data.categoryId,
      image: new ImageModel({ imageId: data.imageId }),
    })
);
