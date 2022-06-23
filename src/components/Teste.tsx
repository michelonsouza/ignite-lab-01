import { useGetLessonsQuery } from '@/generated';

export function Teste(): JSX.Element {
  const { data } = useGetLessonsQuery();

  console.info({ data });

  return <h1 className="text-5xl">Teste</h1>;
}
