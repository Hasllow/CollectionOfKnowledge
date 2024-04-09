import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const res = await fetch("https://api.origamid.online/conta/login", {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok)
    return Response.json({ erro: "Dados incorretos." }, { status: 401 });

  const data = await res.json();

  cookies().set("token", data.token, { httpOnly: true, secure: true });

  return Response.json({ message: "Login bem sucedido." }, { status: 200 });
}
