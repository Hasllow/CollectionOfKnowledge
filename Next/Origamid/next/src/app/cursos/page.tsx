import { getAllCourses } from "@/api/cursos";
import Link from "next/link";

export default async function CursosPage() {
  const data = await getAllCourses();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {data.map((course) => (
          <li key={course.id}>
            <Link href={`/cursos/${course.slug}`}>{course.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
