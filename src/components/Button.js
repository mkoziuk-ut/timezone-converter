import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ label, clickHandler }) => (
  <a className={styles.btn} onClick={clickHandler} role="tab" tabIndex="0">
    {label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
