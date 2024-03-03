import { createRef, useRef, useState } from "react";

type CurrentStateType = "select" | "shopping";

export function useApp() {
  const layoutRef = createRef<HTMLDivElement>();
  const [currentState, setCurrentState] = useState<CurrentStateType>("select");

  return {
    layoutRef,
    currentState,
    setCurrentState,
  };
}
