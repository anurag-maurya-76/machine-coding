export function TaskCard({ task, handleDragStart, columnId }) {
  return (
    <div
      className="task-card"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, task.id, columnId)}
    >
      <h4 className="task-title">{task.title}</h4>
      <p className="task-description">{task.description}</p>
    </div>
  );
}
