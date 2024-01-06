import { v4 as uuidv4 } from "uuid";

class BaseModel {
  id: string;
  createdAt: string;
  updatedAt: string;

  constructor(data: Partial<BaseModel>) {
    this.id = data.id || uuidv4();
    this.createdAt = data.createdAt || new Date().toUTCString();
    this.updatedAt = data.updatedAt || new Date().toUTCString();
  }
}

export class ImageModel extends BaseModel {
  imageId: string;

  constructor(data: Partial<ImageModel>) {
    super(data);

    this.imageId = data.imageId || "";
  }
}

export class ProductModel extends BaseModel {
  name: string;
  image: ImageModel | null;

  categoryId: string | null;
  brandId: string | null;

  category: CategoryModel | null;

  constructor(data: Partial<ProductModel> = {}) {
    super(data);

    this.name = data.name || "";
    this.image = data.image || null;

    this.categoryId = data.categoryId || null;
    this.brandId = data.brandId || null;

    this.category = data.category || null;
  }
}

export class BrandModel extends BaseModel {
  name: string;
  image: ImageModel | null;

  constructor(data: Partial<BrandModel> = {}) {
    super(data);

    this.name = data.name || "";
    this.image = data.image || null;
  }
}

export class CategoryModel extends BaseModel {
  name: string;
  image: ImageModel | null;

  constructor(data: Partial<CategoryModel> = {}) {
    super(data);

    this.name = data.name || "";
    this.image = data.image || null;
  }
}

export class ListModel extends BaseModel {
  name: string | null;
  productIds: string[];
  products: ProductModel[];

  constructor(data: Partial<ListModel> = {}) {
    super(data);

    this.name = data.name || null;
    this.productIds = data.productIds || [];
    this.products = data.products || [];
  }
}

`
Ürün
  id
  adı
  açıklaması
  görseller
  kategorisi
  markaId
  kategoriId

Marka
  id
  adı
  görsel

Kategori
  id
  adı
  görsel


Liste
  adı
  ürünId
  tarih

Kişi
  id
  ad
  email

ListeKişiler
  listeId
  kişiId
`;
