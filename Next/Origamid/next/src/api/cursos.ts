interface Course {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}

interface Aula {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

interface CourseDetail extends Course {
  aulas: Aula[];
}

export const getAllCourses = async (): Promise<Course[]> => {
  const res = await fetch("https://api.origamid.online/cursos");
  return await res.json();
};

export const getCourse = async (courseName: string): Promise<CourseDetail> => {
  const res = await fetch(`https://api.origamid.online/cursos/${courseName}`);
  return await res.json();
};

export const getClassDetail = async (
  courseName: string,
  className: string
): Promise<Aula> => {
  const res = await fetch(
    `https://api.origamid.online/cursos/${courseName}/${className}`
  );
  return await res.json();
};
