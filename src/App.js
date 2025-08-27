import "./App.css";
import { Accordion } from "./components/accordion/accordion";
import { accordionData } from "./constants/accordion-data";

function App() {
  return (
    <div className="App">
      <Accordion accordionData={accordionData} />
    </div>
  );
}

export default App;
