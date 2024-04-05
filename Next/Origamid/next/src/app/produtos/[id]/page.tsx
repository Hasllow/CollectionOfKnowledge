interface PageParms {
  params: {
    id: string;
  };
}

interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
}

export default async function ProductPage({ params }: PageParms) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`
  );
  const data = (await response.json()) as Product;
  return (
    <main>
      <h1>{data.nome}</h1>
      <h2>{data.preco}</h2>
      <h1>{data.descricao}</h1>
    </main>
  );
}
