/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Clock from './Clock';

it('shallow renders without crashing', () => {
  shallow(<Clock
    time="11:30:04"
    enableEditMode={() => {}}
  />);
});

it('renders the given time', () => {
  const clock = mount(<Clock
    time="11:30:04"
    enableEditMode={() => {}}
  />);
  expect(clock.html()).toContain('11:30:04');
});

it('enables edit mode on click', () => {
  const onClick = sinon.spy();
  const clock = mount(<Clock
    time="11:30:04"
    enableEditMode={onClick}
  />);
  clock.simulate('click');
  expect(onClick.calledOnce).toEqual(true);
});
