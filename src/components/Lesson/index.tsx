import { useMemo } from 'react';

import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';

import { LessonProps } from './types';

export function Lesson({
  title,
  availableAt,
  slug,
  type,
}: LessonProps): JSX.Element {
  const isLessonAvailable: boolean = useMemo(() => {
    return isPast(availableAt);
  }, [availableAt]);

  const formattedDate: string = useMemo(() => {
    return format(availableAt, "EEEE' • 'dd' de 'MMMM' • 'HH'h'mm", {
      locale: ptBR,
    });
  }, [availableAt]);

  return (
    <a href={`#${slug}`}>
      <span className="text-gray-300">{formattedDate}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
