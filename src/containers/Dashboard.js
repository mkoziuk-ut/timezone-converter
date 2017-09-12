import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import { addTimezone, updateTime, showCustomTime } from '../actions';
import timezoneUtils from '../utils/timezone';
import styles from './Dashboard.css';
import TimezonePanel from './TimezonePanel';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);
    this.resumeCurrentTime = this.resumeCurrentTime.bind(this);

    this.addTimezone('GMT');
    this.addTimezone(moment.tz.guess());

    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setCustomTime(customTime) {
    clearInterval(this.intervalId);
    this.props.dispatch(showCustomTime(customTime));
  }

  addTimezone(timezoneName) {
    const timezoneObj = timezoneUtils.getTimezoneInfo(timezoneName);
    this.props.dispatch(addTimezone(timezoneObj));
  }

  resumeCurrentTime() {
    updateTime();
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.props.dispatch(updateTime(moment()));
  }

  renderTickingStoppedMessage() {
    return this.props.dashboard.showingCustomTime ? (
      <div
        className={styles.customTimeMessage}
        onClick={this.resumeCurrentTime}
        role="button"
        tabIndex="-1"
      >
        The clocks are now stopped. Click here to resume showing current time.
      </div>
    ) : null;
  }

  render() {
    const { dashboard, timezones } = this.props;
    return (
      <div className={styles.container}>
        {this.renderTickingStoppedMessage()}
        <div className={`${styles.panels} flex flex-wrap clearfix`}>
          { timezones.map((timezone) => {
            const time = dashboard.momentNow.tz(timezone.name).format('HH:mm:ss');
            return (
              <div className="col col-12 sm-col-6 md-col-4" key={`panel-${timezone.name}`}>
                <TimezonePanel
                  timezone={timezone}
                  time={time}
                  setCustomTime={this.setCustomTime}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  timezones: PropTypes.arrayOf(PropTypes.object).isRequired,
  dashboard: PropTypes.shape({
    showingCustomTime: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  timezones: state.timezones,
  dashboard: state.dashboard,
});

export default connect(mapStateToProps)(Dashboard);
