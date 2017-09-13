/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timezoneApp from '../reducers';
import timezoneUtils from '../utils/timezone';
import TimezonePanel from './TimezonePanel';

const store = createStore(timezoneApp);

it('shallow renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <TimezonePanel />
      </BrowserRouter>
    </Provider>);
});

it('ui correctly toggles edit mode on click', () => {
  const tzObj = timezoneUtils.getTimezoneInfo('Europe/Warsaw');
  const page = mount(
    <Provider store={store} >
      <BrowserRouter>
        <TimezonePanel
          timezone={tzObj}
          time={"11:30:04"}
          setCustomTime={() => {}}
        />
      </BrowserRouter>
    </Provider>);

  expect(page.find('[name="TimeEdit"]').length).toEqual(0);
  page.find('[name="Clock"]').simulate('click');
  expect(page.find('[name="TimeEdit"]').length).toEqual(1);
  expect(page.find('[name="btn-Cancel"]').length).toEqual(1);
  page.find('[name="btn-Cancel"]').simulate('click');
  expect(page.find('[name="TimeEdit"]').length).toEqual(0);
});
