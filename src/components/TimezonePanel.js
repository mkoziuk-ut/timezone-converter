import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimezonePanel.css';

class TimezonePanel extends React.Component {
  render() {
    const { region, area, info, time } = this.props;
    return (
      <div className={styles.panel}>
        <div className={styles.closeBtn}>X</div>
        <div className={styles.header}>
          <h1>{region} {area}</h1>
          <h2>{info}</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.time}>
            {time}
          </p>
          <p className={styles.actionInfo}>
            Just click/tap to set the time
          </p>
        </div>

      </div>
    );
  }
}

TimezonePanel.propTypes = {
  region: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default TimezonePanel;
