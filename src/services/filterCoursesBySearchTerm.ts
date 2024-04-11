import { Course } from '../types/Course';

export const filterCoursesBySearchTerm = (items: Course[], searchTerm: string) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()));
};
