
const initialState = {
  counter: 0
};

// default value
export default function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'counter/increment':
      return {
        ...state,
        counter: 1 * state.counter + 1
      }
    case 'counter/decrement':
      return {
        ...state,
        counter: 1 * state.counter - 1
      }
    case 'counter/set-number':
      return {
        ...state,
        counter: action.payload
      }
    default:
    return state;
  }
};
