import { useState } from "react";

type CurrentStateType = "select" | "shopping";

export function useApp() {
  const [currentState, setCurrentState] = useState<CurrentStateType>("select");

  return {
    currentState,
    setCurrentState,
  };
}
