/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

it('shallow renders without crashing', () => {
  shallow(
    <Button
      label="Some btn"
      clickHandler={() => {}}
    />);
});

it('renders the label', () => {
  const label = 'some button';
  const btn = mount(<Button
    label={label}
    clickHandler={() => {}}
  />);
  expect(btn.find('a').text()).toEqual(label);
});

it('fires handler on click', () => {
  const onClick = sinon.spy();
  const label = 'some button';
  const btn = mount(<Button
    label={label}
    clickHandler={onClick}
  />);
  btn.find('a').simulate('click');
  expect(onClick.calledOnce).toEqual(true);
});

it('does not fire handler on click when disabled', () => {
  const onClick = sinon.spy();
  const label = 'some button';
  const btn = mount(<Button
    label={label}
    clickHandler={onClick}
    disabled={true}
  />);
  btn.find('a').simulate('click');
  expect(onClick.callCount).toEqual(0);
});
