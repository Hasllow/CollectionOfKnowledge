import Acesso from "@/components/Acesso";
import ClientFetch from "@/components/ClienteFetch";
import ServerFetch from "@/components/ServerFetch";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Acesso />
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}
