import { useEffect, useRef, useState } from "react";
import { fetchData } from "./utils/fetch-data";
import { debounce } from "./utils/debounce";

export function AutoComplete() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (text) => {
    const s = await fetchData(text);
    setSuggestions(s);
  };

  const debouncedFetch = useRef(
    debounce((text) => {
      fetchSuggestions(text);
    }, 1000),
    []
  ).current;

  useEffect(() => {
    if (input) {
      debouncedFetch(input);
    } else {
      setSuggestions([]);
    }
  }, [debouncedFetch, input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {suggestions.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
