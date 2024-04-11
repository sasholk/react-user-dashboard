export async function fetchCourses() {
  const response = await fetch('./api/courses.json');
  const data = await response.json();
  return data;
}
