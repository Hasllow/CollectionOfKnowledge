"use client";

import { useEffect, useState } from "react";

export default function Width() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <h2 className={`${ativo ? "text-[#668800]" : "text-[#bb0000]"}`}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}
