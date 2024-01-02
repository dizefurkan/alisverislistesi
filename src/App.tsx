import { ImageModel, ProductModel } from "./model";
import ProductList from "./components/product-list";
import { useApp, useList } from "./hooks";
import { ListContext } from "./context";
import { Sidebar } from "./components/sidebar";
import Layout from "./components/layout";

const products = [
  new ProductModel({
    name: "Acı Biber",
    image: new ImageModel({
      imageId: "/images/acibiber.png",
    }),
  }),
  new ProductModel({
    name: "Bal Kabağı",
    image: new ImageModel({
      imageId: "/images/balkabagi.png",
    }),
  }),
  new ProductModel({
    name: "Sivri biber",
    image: new ImageModel({
      imageId: "/images/biber.png",
    }),
  }),
  new ProductModel({
    name: "Kabak",
    image: new ImageModel({
      imageId: "/images/kabak.png",
    }),
  }),
  new ProductModel({
    name: "Çilek",
    image: new ImageModel({
      imageId: "/images/cilek.png",
    }),
  }),
  new ProductModel({
    name: "Kiraz",
    image: new ImageModel({
      imageId: "/images/kiraz.png",
    }),
  }),
  new ProductModel({
    name: "Patates",
    image: new ImageModel({
      imageId: "/images/patates.png",
    }),
  }),
  new ProductModel({
    name: "Portakal",
    image: new ImageModel({
      imageId: "/images/portakal.png",
    }),
  }),
];

function App() {
  // const { onProductSelect } = useApp();
  const _useList = useList();
  return (
    <>
      <ListContext.Provider value={_useList}>
        <Layout>
          <h1>Alınacak Ürünleri Seç</h1>
          <ProductList products={products} />
          {!!_useList.products.length && <Sidebar />}
        </Layout>
      </ListContext.Provider>
    </>
  );
}

export default App;
