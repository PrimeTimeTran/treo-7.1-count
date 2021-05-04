import { useSelector, useDispatch } from "react-redux";

import { Container } from "react-bootstrap";

// import { incrementCount } from "./redux/actions";

import './App.css'

// console.log({ incrementCount });

// 1. Wrap application with Provider.
// 2. Define store, which we pass to the Provider.
// 3. Define reducer, which is passed to the store.
// 3.1 Show state in the app.
// 4. Conditionally change state based on actions that the reducer receives.
// 5. Programmatically dispatch actions when necessary.
// 6. Actions will describe changes to our state/store.

function App() {
  const { count, color, boxColors } = useSelector((state) => state);
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({ type: "INCREMENT" });
  }

  function decrementCount() {
    dispatch({ type: "DECREMENT" });
  }

  function onChangeColor(e, idx) {
    console.log({ idx });
    if (!idx) {
      dispatch({ type: "CHANGE_COLOR", payload: e.target.value });
    } else {
      console.log('hi!')
      dispatch({ type: "CHANGE_COLOR_OF_BOX_INDEX", idx, payload: e.target.value });
    }
  }

  return (
    <Container className="App">
      <h1>Count App</h1>
      <h3>{count}</h3>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
      <input onChange={onChangeColor} />
      {Array.from(Array(count)).map((c, idx) => {
        const boxColor = boxColors[idx] || color
        return (
          <div
            key={idx}
            className="border m-5 p-5 box"
            style={{ backgroundColor: boxColor }}
          >
            Box {idx + 1}
            <input onChange={(e) => onChangeColor(e, idx)} />
          </div>
        );
      })}
    </Container>
  );
}

export default App;
