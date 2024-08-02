import { createContext, useContext, useState } from "react";

type CustomCardProps = {
  children: React.ReactNode;
};

interface IProductContext {
  initial: number;
  setInitial: React.Dispatch<React.SetStateAction<number>>;
  handleButtonAdc: () => void;
  handleButtonDecre: () => void;
}
export const ProductContext = createContext<IProductContext>({
  initial: 0,
  setInitial: () => {},
  handleButtonAdc: () => {},
  handleButtonDecre: () => {},
} as IProductContext);

export default function ProductState({ children }: CustomCardProps) {
  const [initial, setInitial] = useState<number>(0);
  const handleButtonAdc = () => {
    setInitial(initial + 1);
  };
  const handleButtonDecre = () => {
    if (initial !== 0) setInitial(initial - 1);
  };

  return (
    <ProductContext.Provider
      value={{ initial, setInitial, handleButtonAdc, handleButtonDecre }}
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
