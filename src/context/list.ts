import { createContext } from "react";
import { useList } from "src/hooks/useList";

type ListContextData = ReturnType<typeof useList>;
export const ListContext = createContext<ListContextData>({
  listProducts: [],
  productsAndCategories: [],
  addProductToList: () => {},
  removeProductFromList: () => {},
});
