import { LessonType } from '@/generated';

export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: LessonType;
}
