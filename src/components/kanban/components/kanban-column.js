import { fetchNewKanbanData } from "../utils/update-kanban";
import { TaskCard } from "./task-card";

export function KanbanColumn({ column, setKanbanData }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, taskId, columnId) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ taskId, columnId }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { taskId, columnId } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );
    setKanbanData((prevData) => {
      return fetchNewKanbanData(prevData, taskId, columnId, column.id);
    });
  };

  return (
    <div
      className="kanban-column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3 className="kanban-column-title">{column.title}</h3>
      <div className="kanban-tasks">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            columnId={column.id}
            handleDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
}
