import { createContext } from "react";
import { useApp } from "src/hooks";

type AppContextData = ReturnType<typeof useApp>;
export const AppContext = createContext<AppContextData>({
  currentState: "select",
});
