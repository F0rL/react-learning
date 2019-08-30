const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }
  if(action.type === "add_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push({content: newState.inputValue})
    newState.inputValue = ''
    return newState
  }
  if(action.type === "delete_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.id, 1)
    return newState
  }
  return state;
};
