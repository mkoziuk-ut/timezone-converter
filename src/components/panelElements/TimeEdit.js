import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TimeEdit.css';

const TimeEdit = ({ cancelEdit, updateTimeValue, timeValue, setCustomTime }) => (
  <div className={styles.container}>
    <input value={timeValue} onChange={updateTimeValue} />
    <div className={styles.greyLabel}>
      Enter the desired time as HH:mm:ss
    </div>
    <div className="mt1 flex">
      <Button
        label="Set time"
        clickHandler={setCustomTime}
      />
      <Button
        label="Cancel"
        clickHandler={cancelEdit}
      />
    </div>
  </div>
);

TimeEdit.propTypes = {
  timeValue: PropTypes.string.isRequired,
  updateTimeValue: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  setCustomTime: PropTypes.func.isRequired,
};

export default TimeEdit;
