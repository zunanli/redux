const intialState = [
  {
    workName: "work 1"
  },
  {
    workName: "work 2"
  }
];

export default function(state = intialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];
    case "DELETE_TODO":
      const newState = state.filter((item, index) => {
        return index !== action.payload;
      });
      return newState;

    default:
      return state;
  }
}
