/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { addTimezone, removeTimezone } from '../actions';
import moment from 'moment-timezone';
import timezoneUtils from '../utils/timezone';
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
    };

    this.addTimezone('GMT');
    this.addTimezone('Europe/Warsaw');
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
    let timezoneObj = timezoneUtils.getTimezoneInfo(timezoneName);
    this.props.dispatch(addTimezone(timezoneObj));
  }

  removeTimezone(timezoneName) {
    this.props.dispatch(removeTimezone(timezoneName));
  }

  updateTime() {
    this.setState({
      momentNow: moment(),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <TimezonePanels
          timezones={this.props.timezones}
          momentNow={this.state.momentNow}
          removeTimezoneHandler={this.removeTimezone}
          setCustomTime={this.setCustomTime}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timezones: state.timezones,
  };
};

export default connect(mapStateToProps)(Dashboard);
