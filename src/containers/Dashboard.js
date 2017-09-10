import React from 'react';
import moment from 'moment-timezone';
import styles from './Dashboard.css';
import DashboardHeader from '../components/DashboardHeader';
import TimezonePanels from '../components/TimezonePanels';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
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

  updateTime() {
    this.setState({
      momentNow: moment(),
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

  render() {
    return (
      <div className={styles.container}>
        <DashboardHeader />
        <TimezonePanels timezones={this.state.timezones} momentNow={this.state.momentNow} />
      </div>
    );
  }
}

export default Dashboard;
