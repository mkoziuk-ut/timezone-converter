import React from 'react';
import PropTypes from 'prop-types';
import styles from './PanelHeader.css';

const PanelHeader = ({ timezone, removeTimezone }) => (
  <div>
    <div
      className={styles.closeBtn}
      onClick={() => removeTimezone(timezone.name)}
      role="button"
      tabIndex="0"
    > X
    </div>

    <div className={styles.header}>
      <h1>{timezone.region} {timezone.area}</h1>
      <h2>{timezone.info}</h2>
    </div>
  </div>
);

PanelHeader.propTypes = {
  timezone: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
    area: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
  removeTimezone: PropTypes.func.isRequired,
};

export default PanelHeader;
