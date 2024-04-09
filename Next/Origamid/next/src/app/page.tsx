"use client";

import { getCookie } from "@/actions/GetCookies";
import { setCookie } from "@/actions/SetCookies";
import { useState } from "react";

export default function HomePage() {
  const [data, setData] = useState<string | undefined>("");

  function handleClick() {
    setCookie("segredo", "1234");
  }

  async function handleGetCookieClick() {
    const data = await getCookie("token");
    setData(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home</h1>
      <button onClick={handleClick} className="bg-slate-500 p-4 rounded">
        Definir Cookie
      </button>
      <button
        onClick={handleGetCookieClick}
        className="bg-slate-500 p-4 rounded"
      >
        Pegar Cookie
      </button>
      <p>{data}</p>
    </main>
  );
}
