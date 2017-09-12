// the timezones state is an array of timezone objects
const timezones = (state = [], action) => {
  switch (action.type) {
    // ads a timezone object to the array
    case 'ADD_TIMEZONE':
      return [...state, action.timezone];

    // removes a timezone object to the array
    case 'REMOVE_TIMEZONE':
      return state.filter((timezone) => (timezone.name !== action.timezoneName));

    default:
      return state;
  }
};

export default timezones;
