import { useMemo } from 'react';
import { Course } from '../types/Course';

export function useSearch(items: Course[], searchTerm: string) {
  return useMemo(() =>
    items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [items, searchTerm]);
}
