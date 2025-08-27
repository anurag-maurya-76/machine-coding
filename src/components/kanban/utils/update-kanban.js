export function fetchNewKanbanData(
  kanbanData,
  taskId,
  sourceColumnId,
  targetColumnId
) {
  if (sourceColumnId === targetColumnId) {
    return kanbanData; // No change needed if the source and target are the same
  }

  const newKanbanData = kanbanData.map((column) => {
    // Remove the task from the source column
    if (column.id === sourceColumnId) {
      return {
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
      };
    }
    return column;
  });

  const taskToMove = kanbanData
    .find((column) => column.id === sourceColumnId)
    .tasks.find((task) => task.id === taskId);

  // Add the task to the target column
  return newKanbanData.map((column) => {
    if (column.id === targetColumnId) {
      return {
        ...column,
        tasks: [...column.tasks, taskToMove],
      };
    }
    return column;
  });
}
