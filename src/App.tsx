import { useList } from "./hooks";
import { ListContext } from "./context";

import ProductList from "./components/molecules/product-list";
import { Sidebar } from "./components/molecules/sidebar";
import Layout from "./components/atoms/layout";
import { categories, products } from "./helpers/mock-data";

function App() {
  const _useList = useList();

  return (
    <ListContext.Provider value={_useList}>
      <Layout>
        <h1>Alınacak Ürünleri Seç</h1>
        <ProductList products={products} categories={categories} />
        {!!_useList.products.length && <Sidebar />}
      </Layout>
    </ListContext.Provider>
  );
}

export default App;
