/* eslint-disable */

import React from 'react';
import moment from 'moment-timezone';
import styles from './Dashboard.css';
import DashboardHeader from '../components/DashboardHeader';
import TimezonePanels from '../components/TimezonePanels';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
    this.removeTimezone = this.removeTimezone.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);

    const intervalId = setInterval(this.updateTime, 1000);
    this.state = {
      momentNow: moment(),
      intervalId: intervalId,
      timezones: [],
    };
  }

  componentDidMount() {
    this.addTimezone('Europe/Warsaw');
    this.addTimezone('GMT');
    this.addTimezone('America/Los_Angeles');
    this.addTimezone('America/North_Dakota/New_Salem');
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setCustomTime(momentTime) {
    debugger
    clearInterval(this.state.intervalId);
    this.setState({
      momentNow: momentTime,
      intervalId: null,
    });
  }

  addTimezone(timezoneName) {
    const timezoneObj = moment().tz(timezoneName);
    const timezoneInf = timezoneName.replace('_', ' ').split('/');

    const existingZones = this.state.timezones;
    existingZones.push({
      name: timezoneName,
      region: (timezoneInf.length > 1) ? timezoneInf[1] : timezoneInf[0],
      area: (timezoneInf.length > 1) ? `(${timezoneInf[0]})` : '',
      info: timezoneObj.format('z (Z)'),
    });
    this.setState({
      timezones: existingZones,
    });
  }

  removeTimezone(timezoneName) {
    this.setState({
      timezones: this.state.timezones.filter((tz) => tz.name !== timezoneName),
    });
  }

  updateTime() {
    this.setState({
      momentNow: moment(),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <DashboardHeader />
        <TimezonePanels
          timezones={this.state.timezones}
          momentNow={this.state.momentNow}
          removeTimezoneHandler={this.removeTimezone}
          setCustomTime={this.setCustomTime}
        />
      </div>
    );
  }
}

export default Dashboard;
