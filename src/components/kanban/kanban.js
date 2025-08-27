import "./kanban.css";
import { useState } from "react";
import { KanbanColumn } from "./components/kanban-column";

export function Kanban({ kanbanData: initialData }) {
  const [kanbanData, setKanbanData] = useState(initialData);
  return (
    <div className="kanban-container">
      {kanbanData.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          setKanbanData={setKanbanData}
        />
      ))}
    </div>
  );
}
