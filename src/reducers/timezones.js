import moment from 'moment-timezone';
import timezoneUtils from '../utils/timezone';

// the timezones state is an array of timezone objects
const initialState = [
  timezoneUtils.getTimezoneInfo('GMT'),
  timezoneUtils.getTimezoneInfo(moment.tz.guess()),
];

const timezones = (state = initialState, action) => {
  switch (action.type) {
    // ads a timezone object to the array
    case 'ADD_TIMEZONE': {
      const hasTimezone = state.filter((t) => t.name === action.timezone.name).length === 0;
      return hasTimezone ? [...state, action.timezone] : state;
    }

    // removes a timezone object to the array
    case 'REMOVE_TIMEZONE':
      return state.filter((timezone) => (timezone.name !== action.timezoneName));

    default:
      return state;
  }
};

export default timezones;
