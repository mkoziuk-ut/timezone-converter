import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimezonePanels.css';
import TimezonePanel from './TimezonePanel';

class TimezonePanels extends React.Component {
  render() {
    return (
      <div className={`${styles.container} flex flex-wrap clearfix`}>
        { this.props.timezones.map((timezone) => (
          <div className="col col-12 sm-col-6 md-col-4" key={`panel-${timezone.name}`}>
            <TimezonePanel
              region={timezone.region}
              area={timezone.area}
              info={timezone.info}
              time={this.props.momentNow.tz(timezone.name).format('HH:mm:ss')}
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
};

export default TimezonePanels;
