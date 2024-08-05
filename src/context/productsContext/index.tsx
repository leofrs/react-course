import React, { createContext, useContext } from "react";

import UseReducerProducts, {
  //CounterAction,
  CounterState,
} from "../../hooks/use-reducer-products";

type CustomCardProps = {
  children: React.ReactNode;
};

const initialState: CounterState = {
  count: 0,
};

export const ProductContext = createContext<{
  state: CounterState;
  //dispatch: React.Dispatch<CounterAction>;
  handleButtonAdc: (id: number) => void;
  handleButtonDecre: (id: number) => void;
}>({
  state: initialState,
  //dispatch: () => undefined,
  handleButtonAdc: () => {},
  handleButtonDecre: () => {},
});

export default function ProductState({ children }: CustomCardProps) {
  const { state, handleButtonAdc, handleButtonDecre } = UseReducerProducts();

  return (
    <ProductContext.Provider
      value={{ state, handleButtonAdc, handleButtonDecre }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useContextProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
