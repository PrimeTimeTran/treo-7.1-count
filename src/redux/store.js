import { createStore } from "redux";

const initialState = {
  count: 1,
  color: 'red',
  boxColors: []
}

function rootReducer(state = initialState, action) {
  if (action.type === 'INCREMENT') {
    return {...state, count: state.count + 1}
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "CHANGE_COLOR") {
    return { ...state, color: action.payload };
  }
  if (action.type === "CHANGE_COLOR_OF_BOX_INDEX") {
    const boxColors = state.boxColors
    boxColors[action.idx] = action.payload
    return { ...state, boxColors };
  }
  return state;
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store