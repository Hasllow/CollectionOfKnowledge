import { cookies } from "next/headers";

export async function GET() {
  const res = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "dog", password: "dog" }),
  });

  if (!res.ok) return Response.json({ error: "Erro na API." });

  const data = await res.json();

  cookies().set("token", data.token, { httpOnly: true, secure: true });

  return Response.json(data);
}
