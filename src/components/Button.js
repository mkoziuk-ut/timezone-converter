import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ label, clickHandler, disabled }) => (
  <a
    className={`${styles.btn} ${disabled ? styles.disabled : ''}`}
    onClick={(e) => (disabled ? '' : clickHandler(e))}
    role="button"
    tabIndex="0"
    name={`btn-${label}`}
  >
    {label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
