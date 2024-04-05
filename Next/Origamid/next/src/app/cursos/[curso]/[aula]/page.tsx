import { getClassDetail } from "@/api/cursos";

interface PageParms {
  params: {
    curso: string;
    aula: string;
  };
}

export default async function ProductPage({ params }: PageParms) {
  const data = await getClassDetail(params.curso, params.aula);

  return (
    <main className="bg-[#f5f5f5] w-3/4 rounded mx-auto my-4 p-4 text-black">
      <h1 className="font-bold text-4xl mb-4">Detalhes Aula</h1>
      <h1 className="font-bold text-2xl">Titulo: {data.nome}</h1>
      <h2>Descrição: {data.descricao}</h2>
      <h3>Ordem playlist: {data.ordem}</h3>
      <h3>Minutos: {data.tempo}</h3>
    </main>
  );
}
