/* eslint-disable */
const timezones = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TIMEZONE':
      return [...state, action.timezone];

    case 'REMOVE_TIMEZONE':
      return state.filter((timezone) => (timezone.name !== action.timezoneName));

    default:
      return state;
  }
};

export default timezones;
