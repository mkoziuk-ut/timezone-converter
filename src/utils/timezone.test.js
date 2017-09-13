/* eslint-disable */
import timezoneUtils from './timezone';

it('provides correct info for a given timezone name', () => {
  const info = timezoneUtils.getTimezoneInfo('Europe/Warsaw');
  expect(info.name).toEqual('Europe/Warsaw');
  expect(info.region).toEqual('Warsaw');
  expect(info.area).toEqual('(Europe)');
  expect(info.info).toEqual('CEST (+02:00)');
});

it('correctly handles invalid names', () => {
  expect(() => {
    timezoneUtils.getTimezoneInfo('__invalid_timezone__');
  }).toThrow();

  expect(() => {
    timezoneUtils.getTimezoneInfo();
  }).toThrow();

  expect(() => {
    timezoneUtils.getTimezoneInfo('');
  }).toThrow();
});
