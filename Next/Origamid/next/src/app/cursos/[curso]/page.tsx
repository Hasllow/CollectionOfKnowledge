import { getCourse } from "@/api/cursos";
import Link from "next/link";

interface PageParms {
  params: {
    curso: string;
  };
}

export default async function ProductPage({ params }: PageParms) {
  const data = await getCourse(params.curso);
  console.log(params, data);
  return (
    <main className="bg-[#f5f5f5] w-3/4 rounded mx-auto my-4 p-4 text-black">
      <h1 className="font-bold text-4xl mb-4">{data.nome}</h1>
      <h2 className="font-bold text-2xl">{data.descricao}</h2>
      <h3>Total de aulas: {data.total_aulas}</h3>
      <h3>Total de horas: {data.total_horas}</h3>
      {data.aulas?.map((aula) => (
        <div key={aula.id} className="mb-4 bg-slate-200 w-3/4 py-4">
          <Link href={`/cursos/${params.curso}/${aula.slug}`}>
            <p className="cursor-pointer font-bold">{aula.nome}</p>
          </Link>
          <p>{aula.descricao}</p>
          <p>Ordem da aula:{aula.ordem}</p>
          <p>Tempo de aula: {aula.tempo}</p>
        </div>
      ))}
    </main>
  );
}
