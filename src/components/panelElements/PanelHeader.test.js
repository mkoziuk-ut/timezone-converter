/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import PanelHeader from './PanelHeader';

const tzConfig = {
  region: '(Europe)',
  area: 'Warsaw',
  info: 'CEST (+02:00)',
  name: 'Europ/Warsaw',
};

it('shallow renders without crashing', () => {
  shallow(<PanelHeader
    timezone={tzConfig}
    removeTimezone={() => {}}
  />);
});

it('renders all the given data', () => {
  const header = mount(<PanelHeader
    timezone={tzConfig}
    removeTimezone={() => {}}
  />);
  expect(header.html()).toContain(tzConfig.area);
  expect(header.html()).toContain(tzConfig.region);
  expect(header.html()).toContain(tzConfig.info);
});

it('fires remove timezone handler on click', () => {
  const onClick = sinon.spy();
  const header = mount(<PanelHeader
    timezone={tzConfig}
    removeTimezone={onClick}
  />);
  header.find('[role="button"]').simulate('click');
  expect(onClick.calledOnce).toEqual(true);
});
