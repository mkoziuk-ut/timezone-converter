/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styles from './TimezonePanels.css';
import TimezonePanel from './TimezonePanel';

class TimezonePanels extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.udpateTimeValue = this.udpateTimeValue.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);

    this.state = {
      editedTimezone: null,
      timeValue: '',
    };
  }

  toggleEditMode(timezoneName, enabled) {
    if (enabled) {
      this.setState({
        editedTimezone: timezoneName,
        timeValue: moment().tz(timezoneName).format('HH:mm:ss'),
      });
    } else {
      this.stopEditing()
    }
  }

  stopEditing() {
    this.setState({
      editedTimezone: null,
      timeValue: '',
    });
  }

  udpateTimeValue(e) {
    this.setState({
      timeValue: e.target.value,
    })
  }

  setCustomTime(timezoneName) {
    let parsedInput = moment.tz(this.state.timeValue, 'HH:mm:ss', timezoneName);
    this.props.setCustomTime(parsedInput);
    this.stopEditing();
  }

  render() {
    return (
      <div className={`${styles.container} flex flex-wrap clearfix`}>
        { this.props.timezones.map((timezone) => (
          <div className="col col-12 sm-col-6 md-col-4" key={`panel-${timezone.name}`}>
            <TimezonePanel
              timezone={timezone}
              time={this.props.momentNow.tz(timezone.name).format('HH:mm:ss')}
              removeTimezoneHandler={this.props.removeTimezoneHandler}
              toggleEditMode={this.toggleEditMode}
              udpateTimeValue={this.udpateTimeValue}
              isEdited={this.state.editedTimezone === timezone.name}
              timeValue={this.state.editedTimezone === timezone.name ? this.state.timeValue : ''}
              setCustomTime={this.setCustomTime}
            />
          </div>
        ))}
      </div>
    );
  }
}

TimezonePanels.propTypes = {
  timezones: PropTypes.arrayOf(PropTypes.object).isRequired,
  momentNow: PropTypes.shape({
    tz: PropTypes.func,
  }).isRequired,
  removeTimezoneHandler: PropTypes.func.isRequired,
  setCustomTime: PropTypes.func.isRequired,
};

export default TimezonePanels;
