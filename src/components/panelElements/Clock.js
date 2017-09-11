import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.css';

const Clock = ({ time, enableEditMode }) => (
  <div
    className={styles.container}
    onClick={enableEditMode}
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

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  enableEditMode: PropTypes.func.isRequired,
};

export default Clock;
