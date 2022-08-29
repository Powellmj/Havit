const sidebar_reducer = (state = { visible: false }, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, visible: true, component: action.component };
    case "HIDE":
      return { ...state, visible: false, component: undefined };
    default:
      return state;
  }
};

export default sidebar_reducer;