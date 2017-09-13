/* eslint-disable */
import moment from 'moment-timezone';
import { updateTime } from '../actions';
import { toggleEditMode } from '../actions';
import { updateEditFieldValue } from '../actions';
import { showCustomTime } from '../actions';
import dashboard from './dashboard';

const initialState = {
  showingCustomTime: false,
  momentNow: moment('10:00:00', 'HH:mm:ss'),
  editedTimezone: null,
  editFieldValue: null,
  valueIsValid: true,
};

it('correctly updates time', () => {
  const newTime = '12:40:00';
  const action = updateTime(moment(newTime, 'HH:mm:ss'));
  const ret = dashboard(initialState, action);
  expect(ret.momentNow.format('HH:mm:ss')).toEqual(newTime);
});

it('correctly enables edit mode', () => {
  const fieldValue = '12:40:00';
  const timezoneName = 'GMT';
  const action = toggleEditMode(timezoneName, true, fieldValue);
  const ret = dashboard(initialState, action);
  expect(ret.editFieldValue).toEqual(fieldValue);
  expect(ret.editedTimezone).toEqual(timezoneName);
  expect(ret.valueIsValid).toEqual(true);
});

it('correctly disables edit mode', () => {
  const timezoneName = 'GMT';
  const action = toggleEditMode(timezoneName, false);
  const ret = dashboard(initialState, action);
  expect(ret.editFieldValue).toEqual(null);
  expect(ret.editedTimezone).toEqual(null);
  expect(ret.valueIsValid).toEqual(true);
});

it('correctly updates edit field value', () => {
  const fieldValue = '12:41:00';
  const action = updateEditFieldValue(fieldValue);
  const ret = dashboard(initialState, action);
  expect(ret.editFieldValue).toEqual(fieldValue);
  expect(ret.valueIsValid).toEqual(true);
});

it('correctly indicates invalid edit field values', () => {
  const fieldValue = '12:41:99';
  const action = updateEditFieldValue(fieldValue);
  const ret = dashboard(initialState, action);
  expect(ret.editFieldValue).toEqual(fieldValue);
  expect(ret.valueIsValid).toEqual(false);
});

it('correctly sets state to display custom time', () => {
  const fieldValue = '18:00:00';
  const action = showCustomTime(moment(fieldValue, 'HH:mm:ss'));
  const ret = dashboard(initialState, action);
  expect(ret.momentNow.format('HH:mm:ss')).toEqual(fieldValue);
  expect(ret.showingCustomTime).toEqual(true);
});
