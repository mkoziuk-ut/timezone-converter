import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends React.Component {
  render() {
    return (
      <a className={styles.btn} onClick={this.props.clickHandler} role="tab" tabIndex="0">
        {this.props.label}
      </a>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
