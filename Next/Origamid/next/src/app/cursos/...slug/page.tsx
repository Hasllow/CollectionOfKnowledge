interface PageParms {
  params: {
    slug: string[];
  };
}

export default async function CursoPage({ params }: PageParms) {
  return (
    <main>
      <h1>{params.slug.join("/")}</h1>
    </main>
  );
}
