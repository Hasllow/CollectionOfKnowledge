import { cookies } from "next/headers";
import Link from "next/link";

export default async function Menu() {
  const token = cookies().get("token")?.value;
  const res = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    return (
      <ul className="flex p-5 gap-6 text-3xl">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    );
  }

  const user = await res.json();

  // return (
  //   <ul className="flex list-none p-0 gap-6">
  //     <li>
  //       <Link href={"/"}>Home</Link>
  //     </li>
  //     <li>
  //       <Link href={"/sobre"}>Sobre</Link>
  //     </li>
  //     <li>
  //       <Link href={"/contato"}>Contato</Link>
  //     </li>
  //     <li>
  //       <Link href={"/imc"}>IMC</Link>
  //     </li>
  //     <li>
  //       <Link href={"/produtos"}>Produtos</Link>
  //     </li>
  //     <li>
  //       <Link href={"/acoes"}>Ações</Link>
  //     </li>
  //   </ul>
  // );

  return <h1 className="text-3xl p-5">{user.usuario}</h1>;
}
