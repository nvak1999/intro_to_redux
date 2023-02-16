export const ADD_COUNTER = "MUTI_COUNTER.ADD";
export const INCREMENT = "MUTI_COUNTER.INCREMENT";
export const DECREMENT = "MUTI_COUNTER.DECREMENT";

const initialSate = [{ count: 0 }];

const mutiCounterReducer = (state = initialSate, action) => {
  const index = action.payload?.index;
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, { count: 0 }];
    case INCREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count + 1 },
        ...state.slice(index + 1),
      ];
    case DECREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count - 1 }, // ???
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};
export default mutiCounterReducer;
