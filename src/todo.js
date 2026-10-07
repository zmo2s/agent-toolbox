export function addTodo(title) {
  if (!title?.trim()) {
    throw new Error("Todo title is required");
  }

  return {
    title: title.trim(),
    completed: false,
  };
}
