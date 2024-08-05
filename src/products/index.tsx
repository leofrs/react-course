import ProductsList from "./products-list";

// eslint-disable-next-line react-refresh/only-export-components
export const dataFake = [
  {
    id: 1,
    nome: "Cama",
    datalhes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel magni debitis cum! Aliquid quam provident accusamus ut fugit soluta facere dignissimos dolor nostrum qui iste autem, explicabo, ex ratione!",
  },
  {
    id: 2,
    nome: "Mesa",
    datalhes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel magni debitis cum! Aliquid quam provident accusamus ut fugit soluta facere dignissimos dolor nostrum qui iste autem, explicabo, ex ratione!",
  },
];

export default function Products() {
  return (
    <div>
      <h1>Página de produtos</h1>
      <ul>
        {dataFake.map((product) => (
          <li key={product.id}>
            <ProductsList
              nome={product.nome}
              detalhes={product.datalhes}
              id={product.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
