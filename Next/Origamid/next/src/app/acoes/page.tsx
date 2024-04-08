"use client";

import { useEffect, useState } from "react";

interface Acao {
  simbolo: string;
  atualizada: string;
}
export default function AcoesPage() {
  const [data, setDate] = useState<Acao | null>(null);

  useEffect(() => {
    fetch("https://api.origamid.online/acoes/lua")
      .then((res) => res.json())
      .then((res) => setDate(res));
  }, []);

  if (!data) return null;

  return (
    <main>
      <h1>Ações</h1>
      <h1>{data.simbolo}</h1>
      <h1>{data.atualizada}</h1>
    </main>
  );
}
