import { useDispatch, useSelector } from "react-redux";
import {type AppDispatch, type RootState } from "../state/store.ts";
// import { increment } from "../state/counter/counterSlice.ts";
import { decrement } from "../state/counter/counterSlice.ts";
import { incrementByAmount } from "../state/counter/counterSlice.ts";
import { incrementAsync } from "../state/counter/counterSlice.ts";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
