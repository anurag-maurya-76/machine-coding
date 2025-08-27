import { Provider } from "react-redux";
import store from "./store";

export function ReduxContainer() {
  return <Provider store={store}></Provider>;
}
