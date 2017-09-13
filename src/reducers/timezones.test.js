/* eslint-disable */
import moment from 'moment-timezone';
import { addTimezone } from '../actions';
import { removeTimezone } from '../actions';
import timezoneUtils from '../utils/timezone';
import timezones from './timezones';

const initialState = [
  timezoneUtils.getTimezoneInfo('GMT'),
  timezoneUtils.getTimezoneInfo('Europe/Warsaw'),
];

it('correctly adds a new timezone', () => {
  const timezone = timezoneUtils.getTimezoneInfo('Europe/Madrid');
  const action = addTimezone(timezone);
  const ret = timezones(initialState, action);
  expect(ret.length).toEqual(3);
});

it('does not add duplicate timezones', () => {
  const timezone = timezoneUtils.getTimezoneInfo('Europe/Warsaw');
  const action = addTimezone(timezone);
  const ret = timezones(initialState, action);
  expect(ret.length).toEqual(2);
});

it('correctly removes a timezone', () => {
  const action = removeTimezone('Europe/Warsaw');
  const ret = timezones(initialState, action);
  expect(ret.length).toEqual(1);
});

it('does not break if a non-existing timezone is to be removed', () => {
  const action = removeTimezone('Europe/Madrid');
  const ret = timezones(initialState, action);
  expect(ret.length).toEqual(2);
});
