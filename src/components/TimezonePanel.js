import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimezonePanel.css';
import Button from './Button';

class TimezonePanel extends React.Component {
  renderTime(time) {
    if (!this.props.isEdited) {
      return (
        <div
          className={styles.content}
          onClick={() => this.props.toggleEditMode(this.props.timezone.name, true)}
          role="button"
          tabIndex="-1"
        >
          <p className={styles.time}>
            {time}
          </p>
          <p className={`${styles.actionInfo} ${styles.greyLabel}`}>
            Just click/tap to set the time
          </p>
        </div>
      );
    }
    return (
      <div className={styles.content}>
        <input value={this.props.timeValue} onChange={this.props.udpateTimeValue} />
        <div className={styles.greyLabel}>
          Enter the desired time as HH:mm:ss
        </div>
        <div className="mt1 flex">
          <Button
            label="Apply"
            clickHandler={() => this.props.setCustomTime(this.props.timezone.name)}
          />
          <Button
            label="Cancel"
            clickHandler={() => this.props.toggleEditMode(this.props.timezone.name, false)}
          />
        </div>
      </div>
    );
  }

  render() {
    const { timezone, time } = this.props;
    const { name, region, area, info } = timezone;
    return (
      <div className={styles.panel}>

        {/* Close button */}
        <div
          className={styles.closeBtn}
          onClick={() => this.props.removeTimezoneHandler(name)}
          role="button"
          tabIndex="0"
        > X
        </div>

        {/* Time zone info */}
        <div className={styles.header}>
          <h1>{region} {area}</h1>
          <h2>{info}</h2>
        </div>

        {/* Time display */}
        {this.renderTime(time)}

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
  removeTimezoneHandler: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  isEdited: PropTypes.bool.isRequired,
  udpateTimeValue: PropTypes.func.isRequired,
  timeValue: PropTypes.string.isRequired,
  setCustomTime: PropTypes.func.isRequired,
};

export default TimezonePanel;
