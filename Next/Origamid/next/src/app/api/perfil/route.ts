import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("token")?.value;
  const res = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) return Response.json({ error: "Erro na API." });

  const data = await res.json();

  return Response.json(data);
}
