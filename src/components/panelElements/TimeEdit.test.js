/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TimeEdit from './TimeEdit';

it('shallow renders without crashing', () => {
  shallow(<TimeEdit
    timeValue="11:30:04"
    updateTimeValue={() => {}}
    cancelEdit={() => {}}
    setCustomTime={() => {}}
  />);
});

it('renders all the given data', () => {
  const timeValue = '11:30:04';
  const timeEdit = mount(<TimeEdit
    timeValue={timeValue}
    updateTimeValue={() => {}}
    cancelEdit={() => {}}
    setCustomTime={() => {}}
  />);
  expect(timeEdit.find('input').props().value).toEqual(timeValue);
});

it('fires update action correctly', () => {
  const onClick = sinon.spy();
  const timeValue = '11:30:04';
  const timeEdit = mount(<TimeEdit
    timeValue={timeValue}
    updateTimeValue={onClick}
    cancelEdit={() => {}}
    setCustomTime={() => {}}
  />);
  timeEdit.find('input').simulate('change');
  expect(onClick.calledOnce).toEqual(true);
});

it('buttons fire epxected hanlders', () => {
  const onCancelClick = sinon.spy();
  const onSubmitClick = sinon.spy();
  const timeValue = '11:30:04';
  const timeEdit = mount(<TimeEdit
    timeValue={timeValue}
    updateTimeValue={() => {}}
    cancelEdit={onCancelClick}
    setCustomTime={onSubmitClick}
  />);
  timeEdit.find("a").forEach( el => el.simulate('click'));
  expect(onCancelClick.calledOnce).toEqual(true);
  expect(onSubmitClick.calledOnce).toEqual(true);
});

it('does not allow submit for invalid values', () => {
  const onSubmitClick = sinon.spy();
  const timeValue = 'aaa:30:04';
  const timeEdit = mount(<TimeEdit
    timeValue={timeValue}
    updateTimeValue={() => {}}
    cancelEdit={() => {}}
    setCustomTime={onSubmitClick}
    isValid={false}
  />);
  timeEdit.find("a").forEach( el => el.simulate('click'));
  expect(onSubmitClick.callCount).toEqual(0);
});
