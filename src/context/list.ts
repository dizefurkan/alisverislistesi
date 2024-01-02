import { createContext, useState } from "react";
import { useList } from "src/hooks/useList";
import { ListModel } from "src/model";

type ListContextData = ReturnType<typeof useList>;
export const ListContext = createContext<ListContextData>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});
