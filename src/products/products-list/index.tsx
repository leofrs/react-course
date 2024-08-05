import { useContextProducts } from "../../context/productsContext";

export type ProductList = {
  id: number;
  nome: string;
  detalhes: string;
};

export default function ProductsList({ nome, detalhes, id }: ProductList) {
  const { state, handleButtonAdc, handleButtonDecre } = useContextProducts();

  return (
    <div key={id}>
      <h3>{nome}</h3>
      <p>{detalhes}</p>
      <div style={{ display: "flex", marginBottom: 16 }}>
        <button type="button" onClick={() => handleButtonAdc(id)}>
          adicionar
        </button>
        <p style={{ marginInline: 8 }}>{state.count}</p>
        <button type="button" onClick={() => handleButtonDecre(id)}>
          remover
        </button>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
}
