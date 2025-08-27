import { AutoCompleteData } from "../../../constants/auto-complete-data";

export function fetchData(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("called with text: ", text);
      resolve(
        AutoCompleteData.filter((item) =>
          item.name.toLowerCase().startsWith(text.toLowerCase())
        )
      );
    }, [100]);
  });
}
