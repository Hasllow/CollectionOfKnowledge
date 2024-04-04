"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  nome: string;
}

export default function ClientFetch() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.origamid.online/produtos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.nome}</li>
      ))}
    </ul>
  );
}
