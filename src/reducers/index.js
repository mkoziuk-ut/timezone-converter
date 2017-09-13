import { combineReducers } from 'redux';
import timezones from './timezones';
import dashboard from './dashboard';

const timezoneApp = combineReducers({
  timezones,
  dashboard,
});

export default timezoneApp;
