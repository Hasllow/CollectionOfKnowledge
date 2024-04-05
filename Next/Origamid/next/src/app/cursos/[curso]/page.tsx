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
    <main>
      <h1>{data.nome}</h1>
      <h1>{data.descricao}</h1>
      <h2>{data.total_aulas}</h2>
      <h2>{data.total_horas}</h2>
      {data.aulas?.map((aula) => (
        <div key={aula.id}>
          <Link href={`/cursos/${params.curso}/${aula.slug}`}>
            <p>{aula.nome}</p>
          </Link>
          <p>{aula.descricao}</p>
          <p>{aula.ordem}</p>
          <p>{aula.tempo}</p>
        </div>
      ))}
    </main>
  );
}
