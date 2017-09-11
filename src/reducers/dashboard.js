const initialState = {
  customTime: null,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CUSTOM_TIME':
      return Object.assign({}, state, {
        customTime: action.customTime,
      });

    case 'SHOW_CURRENT_TIME':
      return Object.assign({}, state, {
        customTime: null,
      });

    default:
      return state;
  }
};

export default dashboard;
