/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timezoneApp from '../reducers';
import AddTimezone from './AddTimezone';

const store = createStore(timezoneApp);

it('shallow renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <AddTimezone />
      </BrowserRouter>
    </Provider>);
});

it('renders the expected ui', () => {
  const page = mount(<Provider store={store}>
    <BrowserRouter>
      <AddTimezone />
    </BrowserRouter>
  </Provider>);
  expect(page.find('.Select-control').length).toEqual(1);
  expect(page.html()).toContain('Add selected timezone');
});

it('button does nothing without a value selected', () => {
  const dispatchMock = sinon.spy();
  const page = mount(<Provider store={store}>
    <BrowserRouter>
      <AddTimezone dispatch={dispatchMock} />
    </BrowserRouter>
  </Provider>);
  let initialTimezonesLength = store.getState().timezones.length;
  page.find('a').first().simulate('click');
  expect(dispatchMock.calledOnce).toEqual(false);
  expect(initialTimezonesLength).toEqual(store.getState().timezones.length);
});

/*
it('button adds a new timezone', () => {
  const dispatchMock = sinon.spy();
  const page = mount(<Provider store={store}>
    <BrowserRouter>
      <AddTimezone dispatch={dispatchMock} />
    </BrowserRouter>
  </Provider>);
  // can't figure out how to trigger value change callback from React-select
});
*/
