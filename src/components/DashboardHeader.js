import React from 'react';
import styles from './DashboardHeader.css';
import Button from './Button';

class DashboardHeader extends React.Component {
  addTimezone() {
    const a = this;
    return a;
  }
  render() {
    return (
      <div className={`${styles.container} fixed z2 top-0 left-0 right-0 flex items-center`}>
        <div className="flex-auto">Timezone dashboard</div>
        <Button label="Add" clickHandler={this.addTimezone} />
      </div>
    );
  }
}

export default DashboardHeader;
