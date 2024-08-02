import { useContextProducts } from "../../context/productsContext";

export type ProductList = {
  id: number;
  nome: string;
  detalhes: string;
};

export default function ProductsList({ nome, detalhes, id }: ProductList) {
  const { initial, handleButtonAdc, handleButtonDecre } = useContextProducts();

  return (
    <div key={id}>
      <h3>{nome}</h3>
      <p>{detalhes}</p>
      <div style={{ display: "flex", marginBottom: 16 }}>
        <button type="button" onClick={handleButtonAdc}>
          adicionar
        </button>
        <p style={{ marginInline: 8 }}>{initial}</p>
        <button type="button" onClick={handleButtonDecre}>
          remover
        </button>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
}
