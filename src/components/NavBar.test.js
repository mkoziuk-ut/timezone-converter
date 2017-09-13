/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import sinon from 'sinon';
import NavBar from './NavBar';

it('shallow renders without crashing', () => {
  shallow(<NavBar />);
});

it('renders required links', () => {

  const navBar = mount(<BrowserRouter>
    <NavBar />
  </BrowserRouter>);

  expect(navBar.find('Link').get(0).props.to).toEqual('/');
  expect(navBar.find('Link').get(1).props.to).toEqual('/add');
});
