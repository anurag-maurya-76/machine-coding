import { useState } from "react";
import "./accordion.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

export function Accordion({ accordionData }) {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isExpanded={item.id === expandedId}
          onToggle={() => handleExpand(item.id)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isExpanded, onToggle }) {
  return (
    <section className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        <h3 className={isExpanded ? "accordion-expanded" : ""}>{item.title}</h3>
        <div className="accordion-icon">
          {isExpanded ? <FaMinus color="#5324FB" /> : <FaPlus />}
        </div>
      </button>
      {isExpanded && <p className="accordion-content">{item.content}</p>}
    </section>
  );
}
