import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TimeEdit.css';

const TimeEdit = ({ cancelEdit, updateTimeValue, timeValue, setCustomTime, isValid }) => (
  <div className={styles.container} name="TimeEdit">
    <input className={isValid ? '' : styles.invalidValue} value={timeValue} onChange={updateTimeValue} />
    <div className={styles.greyLabel}>
      Enter the desired time as HH:mm:ss
    </div>
    <div className="mt1 flex">
      <Button
        label="Set time"
        clickHandler={setCustomTime}
        disabled={!isValid}
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
  isValid: PropTypes.bool,
};

TimeEdit.defaultProps = {
  isValid: true,
};

export default TimeEdit;
