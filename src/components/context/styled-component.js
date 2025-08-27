import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./theme-context";
import "./styled-component.css";
function StyledComponent() {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <div className={`${mode}`}>
      <button className="toggle-button" onClick={toggleMode}>
        Toggle theme
      </button>
    </div>
  );
}

export function ThemeContainer() {
  return (
    <ThemeProvider>
      <StyledComponent />
    </ThemeProvider>
  );
}
