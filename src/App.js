import { useDispatch } from "react-redux";
import {
  asyncDecrement,
  asyncIncrement,
  decrement,
  increment,
} from "./features/Counter/counterSlice";
import Counter from "./features/Counter/Counter";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Counter />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(asyncIncrement())}>
        async increment
      </button>
      <button onClick={() => dispatch(asyncDecrement())}>
        async decrement
      </button>
    </div>
  );
}

export default App;
