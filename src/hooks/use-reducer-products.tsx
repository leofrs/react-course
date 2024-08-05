import { ReactNode, useReducer } from "react";

export type CounterState = {
  count: ReactNode;
  [id: number]: number;
};

export type CounterAction =
  | { id: number; type: "increment" }
  | { id: number; type: "decrement" };

export default function UseReducerProducts() {
  const initialState: CounterState = {
    count: undefined,
  };

  const countReducer = (state: CounterState, action: CounterAction) => {
    const { id, type } = action;
    const currentCount = state[id] || 0;

    switch (type) {
      case "increment":
        return { ...state, [id]: currentCount + 1 };
      case "decrement":
        return { ...state, [id]: Math.max(currentCount - 1, 0) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleButtonAdc = (id: number) => {
    dispatch({ id, type: "increment" });
  };

  const handleButtonDecre = (id: number) => {
    dispatch({ id, type: "decrement" });
  };

  return { state, handleButtonAdc, handleButtonDecre };
}
