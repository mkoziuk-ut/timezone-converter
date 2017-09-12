import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { toggleEditMode, removeTimezone, updateEditFieldValue } from '../actions';
import PanelHeader from '../components/panelElements/PanelHeader';
import TimeEdit from '../components/panelElements/TimeEdit';
import Clock from '../components/panelElements/Clock';
import styles from './TimezonePanel.css';

class TimezonePanel extends React.Component {
  constructor(props) {
    super(props);

    this.removeTimezone = this.removeTimezone.bind(this);
    this.setCustomTime = this.setCustomTime.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateEditFieldValue = this.updateEditFieldValue.bind(this);
  }

  setCustomTime() {
    const timezoneName = this.props.timezone.name;
    const momentFromInput = moment.tz(this.props.dashboard.editFieldValue, 'HH:mm:ss', timezoneName);
    this.props.setCustomTime(momentFromInput);
    this.props.dispatch(toggleEditMode(timezoneName, false));
  }

  removeTimezone() {
    this.props.dispatch(removeTimezone(this.props.timezone.name));
  }

  toggleEditMode(enabled) {
    const { dashboard, timezone } = this.props;
    if (enabled) {
      const fieldValue = dashboard.momentNow.tz(timezone.name).format('HH:mm:ss');
      this.props.dispatch(toggleEditMode(timezone.name, true, fieldValue));
    } else {
      this.props.dispatch(toggleEditMode(timezone.name, false));
    }
  }

  updateEditFieldValue(e) {
    this.props.dispatch(updateEditFieldValue(e.target.value));
  }


  renderPanelContent() {
    const { dashboard, timezone, time } = this.props;

    const isEdited = (dashboard.editedTimezone === timezone.name);
    if (isEdited) {
      return (<TimeEdit
        timeValue={dashboard.editFieldValue}
        updateTimeValue={this.updateEditFieldValue}
        setCustomTime={this.setCustomTime}
        cancelEdit={() => this.toggleEditMode(false)}
      />);
    }

    return (<Clock
      time={time}
      enableEditMode={() => this.toggleEditMode(true)}
    />);
  }

  render() {
    const { timezone } = this.props;
    return (
      <div className={styles.panel}>
        <PanelHeader
          timezone={timezone}
          removeTimezone={this.removeTimezone}
        />
        {this.renderPanelContent()}
      </div>
    );
  }
}

TimezonePanel.propTypes = {
  timezone: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
    area: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
  time: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  setCustomTime: PropTypes.func.isRequired,
  dashboard: PropTypes.shape({
    editFieldValue: PropTypes.string,
    momentNow: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps)(TimezonePanel);
