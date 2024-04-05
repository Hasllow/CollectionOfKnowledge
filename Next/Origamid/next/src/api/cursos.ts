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
  const data = await res.json();
  return data;
};

export const getCourse = async (courseName: string): Promise<CourseDetail> => {
  const res = await fetch(`https://api.origamid.online/cursos/${courseName}`);
  const data = await res.json();
  return data;
};

export const getClassDetail = async (
  courseName: string,
  className: string
): Promise<Aula> => {
  const res = await fetch(
    `https://api.origamid.online/cursos/${courseName}/${className}`
  );
  const data = await res.json();
  return data;
};
