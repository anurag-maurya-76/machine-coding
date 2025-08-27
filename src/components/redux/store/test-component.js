import { useDispatch, useSelector } from "react-redux";
import { increaseBy } from "./slice/count-slice";

export const TestComponent = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {value}
      <button onClick={dispatch(increaseBy(5))}></button>
    </div>
  );
};
