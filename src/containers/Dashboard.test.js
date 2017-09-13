/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timezoneApp from '../reducers';
import timezoneUtils from '../utils/timezone';
import Dashboard from './Dashboard';

const store = createStore(timezoneApp);

it('shallow renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>);
});

it('renders the expected ui', () => {
  const page = mount(
    <Provider store={store} >
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>);
  expect(page.find('[name="TimezonePanel"]').length).toEqual(2);
});
;
