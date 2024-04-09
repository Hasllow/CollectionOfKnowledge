"use server";

import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  const res = await fetch("https://api.origamid.online/conta/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
  });

  if (!res.ok)
    return {
      autorizado: false,
      erro: "Usuário ou senha inválidos.",
    };

  const data = await res.json();
  cookies().set("token", data.token, { httpOnly: true, secure: true });

  return { autorizado: true };
}
