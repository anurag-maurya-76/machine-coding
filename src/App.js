import "./App.css";
import { Kanban } from "./components/kanban/kanban";
import { kanbanData } from "./constants/kanban-data";

function App() {
  return (
    <div className="App">
      <Kanban kanbanData={kanbanData} />
    </div>
  );
}

export default App;
