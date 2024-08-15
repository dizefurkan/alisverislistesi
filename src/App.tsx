import { useApp, useList } from "./hooks";
import { AppContext, ListContext } from "./context";

import ProductList from "./components/molecules/product-list";
import Layout from "./components/atoms/layout";
import { categories, products } from "./helpers/mock-data";
import ShoppingList from "./components/molecules/shopping-list";

function App() {
  const _useList = useList();
  const _useApp = useApp();

  const currentState = _useApp.currentState;

  return (
    <AppContext.Provider value={_useApp}>
      <ListContext.Provider value={_useList}>
        <Layout>
          {currentState === "select" && (
            <ProductList products={products} categories={categories} />
          )}
          {currentState === "shopping" && <ShoppingList />}
        </Layout>
      </ListContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
